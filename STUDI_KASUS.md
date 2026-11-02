# Studi Kasus: Lelang Hasil Panen — Implementasi NestJS

**Tujuan**: Jual-beli hasil panen pertanian via lelang online.  
**Skenario**: Petani post produk → Pembeli/Investor bid → Winner verified → Rating.

---

## 1. Domain Entities (Week 05-06)

### User (Base Entity)
```typescript
// src/week05/entities/user.entity.ts
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  nama: string;

  @Column()
  kata_sandi: string;  // hashed dalam production

  @CreateDateColumn()
  createdAt: Date;
}
```

**Mengapa class-based?** TypeORM perlu decorator reflection. Interface ga bisa.

---

### Petani (Farmer)
```typescript
// src/week05/entities/petani.entity.ts
@Entity('petani')
export class Petani extends User {
  @Column({ nullable: true })
  fotoKTP: string;  // URL atau path

  @Column({ nullable: true })
  fotoSelfie: string;

  @Column({ nullable: true })
  fotoLahan: string;

  @Column({ type: 'int', default: 50 })
  creditScore: number;  // 0-100. Turun jika rating ≤3

  @OneToMany(() => Produk, (produk) => produk.petani)
  produk: Produk[];
}
```

**creditScore logic:**
- Default: 50
- Naik +1 setiap kali petani update status tepat (5x naik jadi 55)
- Turun jika dapat rating ≤3

---

### Pembeli (Buyer/Investor)
```typescript
// src/week05/entities/pembeli.entity.ts
@Entity('pembeli')
export class Pembeli extends User {
  @Column({ nullable: true })
  npwp: string;

  @Column({ nullable: true })
  alamat: string;

  @Column({ nullable: true })
  suratUsaha: string;  // proof of business

  @Column({ type: 'int', default: 50 })
  creditScore: number;  // Naik jika bayar tepat waktu

  @OneToMany(() => Tawaran, (tawaran) => tawaran.pembeli)
  tawaran: Tawaran[];
}
```

---

### Produk (Harvest/Commodity)
```typescript
// src/week06/entities/produk.entity.ts
@Entity('produk')
export class Produk {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama: string;  // e.g., "Padi", "Jagung"

  @Column()
  jumlah: number;  // kg

  @Column({ type: 'enum', enum: ['A', 'B', 'C', 'D'] })
  grade: string;  // ML classifier output (Week 05 docs)

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  hargaDasar: number;  // base price per unit

  @Column({ type: 'decimal', precision: 3, scale: 2 })
  multiplierHarga: number;  // 1.0=A, 0.8=B, 0.6=C, 0.4=D

  @ManyToOne(() => Petani, (petani) => petani.produk)
  @JoinColumn({ name: 'petani_id' })
  petani: Petani;

  @OneToMany(() => Tawaran, (tawaran) => tawaran.produk)
  tawaran: Tawaran[];

  @CreateDateColumn()
  createdAt: Date;

  get hargaFinal(): number {
    return this.hargaDasar * this.multiplierHarga;
  }
}
```

**Why multiplier?** Grade A padi lebih premium. Hitung otomatis dari classifier.

---

### Tawaran (Bid/Offer)
```typescript
// src/week06/entities/tawaran.entity.ts
@Entity('tawaran')
export class Tawaran {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Produk, (produk) => produk.tawaran)
  @JoinColumn({ name: 'produk_id' })
  produk: Produk;

  @ManyToOne(() => Pembeli, (pembeli) => pembeli.tawaran)
  @JoinColumn({ name: 'pembeli_id' })
  pembeli: Pembeli;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  hargaTawar: number;

  @Column({ default: false })
  isMenang: boolean;  // winner bid

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

---

### Lelang (Auction Session)
```typescript
// src/week06/entities/lelang.entity.ts
@Entity('lelang')
export class Lelang {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Produk)
  @JoinColumn({ name: 'produk_id' })
  produk: Produk;

  @Column({ type: 'enum', enum: ['PENDING', 'RUNNING', 'CLOSED', 'FINISHED'] })
  status: string;

  @Column()
  tanggalMulai: Date;

  @Column()
  tanggalBerakhir: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  hargaReserve: number;  // minimum acceptable

  @CreateDateColumn()
  createdAt: Date;
}
```

---

## 2. Business Logic: Lelang Service

### Skenario: Menutup Lelang (Close Auction)

```typescript
// src/week06/services/lelang.service.ts
@Injectable()
export class LelangService {
  constructor(
    @InjectRepository(Produk)
    private produkRepository: Repository<Produk>,
    @InjectRepository(Tawaran)
    private tawaranRepository: Repository<Tawaran>,
    @InjectRepository(Pembeli)
    private pembeliRepository: Repository<Pembeli>,
    private dataSource: DataSource,  // untuk transaction
  ) {}

  // Multi-step transaction
  async tutupLelang(lelangId: string) {
    // Selalu gunakan transaction untuk operasi multi-entity
    return await this.dataSource.transaction(async (queryRunner) => {
      const lelangRepo = queryRunner.manager.getRepository(Lelang);
      const produkRepo = queryRunner.manager.getRepository(Produk);
      const tawaranRepo = queryRunner.manager.getRepository(Tawaran);
      const pembeliRepo = queryRunner.manager.getRepository(Pembeli);

      // 1. Cari lelang
      const lelang = await lelangRepo.findOne({
        where: { id: lelangId },
        relations: { produk: true },
      });

      if (!lelang) throw new NotFoundException('Lelang not found');

      // 2. Cari tawaran tertinggi
      const tawaranMenang = await tawaranRepo.findOne({
        where: {
          produk: { id: lelang.produk.id },
          hargaTawar: { $gte: lelang.hargaReserve },  // TypeORM QueryBuilder
        },
        order: { hargaTawar: 'DESC' },
        relations: { pembeli: true },
      });

      if (!tawaranMenang) {
        // Tidak ada penawar. Lelang gagal.
        lelang.status = 'CLOSED';
        await lelangRepo.save(lelang);
        return { message: 'Lelang ditutup, tidak ada penawar' };
      }

      // 3. Tandai sebagai winner
      tawaranMenang.isMenang = true;
      await tawaranRepo.save(tawaranMenang);

      // 4. Update credit score pembeli
      const pembeli = await pembeliRepo.findOne({
        where: { id: tawaranMenang.pembeli.id },
      });
      pembeli.creditScore = Math.min(100, pembeli.creditScore + 1);
      await pembeliRepo.save(pembeli);

      // 5. Update lelang status
      lelang.status = 'FINISHED';
      await lelangRepo.save(lelang);

      return {
        lelangId,
        winner: pembeli.nama,
        price: tawaranMenang.hargaTawar,
        newCreditScore: pembeli.creditScore,
      };
    });
  }
}
```

### Key Patterns

1. **Relation loading**: `relations: { pembeli: true }` (NOT string array)
2. **Transaction**: ALL changes atomically
3. **Business rule in service**: Not controller
4. **Error handling**: Wrap in try-catch per business step

---

## 3. DTO (Data Transfer Object)

```typescript
// src/week05/petani/dtos/create-petani.dto.ts
export class CreatePetaniDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  nama: string;

  @IsString()
  @MinLength(6)
  kataSandi: string;  // client-side hash recommended

  @IsUrl()
  fotoKTP: string;

  @IsUrl()
  fotoSelfie: string;

  @IsUrl()
  fotoLahan: string;
}
```

**Mengapa class?** `@IsEmail()` decorator butuh class metadata reflection.

---

## 4. Controller (Thin)

```typescript
// src/week06/lelang/lelang.controller.ts
@Controller('week06/lelang')
export class LelangController {
  constructor(private readonly lelangService: LelangService) {}

  @Post(':id/tutup')
  async tutupLelang(@Param('id') lelangId: string) {
    return this.lelangService.tutupLelang(lelangId);
  }

  @Get(':id/tawaran-tertinggi')
  async tawaranTertinggi(@Param('id') lelangId: string) {
    return this.lelangService.findTawaranTertinggi(lelangId);
  }
}
```

**Controller principles:**
- No business logic
- Delegate to service
- Return plain object (NestJS handles JSON)

---

## 5. Module Assembly

```typescript
// src/week06/week06.module.ts
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Petani,
      Pembeli,
      Produk,
      Tawaran,
      Lelang,
      Rating,
    ]),
  ],
  controllers: [LelangController, PetaniController],
  providers: [LelangService, PetaniService],
  exports: [LelangService],  // kalau modul lain butuh
})
export class Week06Module {}
```

---

## 6. Testing Workflow

```bash
# Buat lelang
POST /api/week06/lelang
{
  "produk_id": "uuid-produk",
  "hargaReserve": 100000,
  "tanggalMulai": "2024-01-01T10:00:00Z",
  "tanggalBerakhir": "2024-01-10T18:00:00Z"
}

# Pembeli buat tawaran
POST /api/week06/tawaran
{
  "lelang_id": "uuid-lelang",
  "pembeli_id": "uuid-pembeli",
  "hargaTawar": 150000
}

# Tutup lelang
POST /api/week06/lelang/{id}/tutup

# Check winner
GET /api/week06/lelang/{id}/tawaran-tertinggi
```

---

## 7. Advanced Features (Optional)

### RAB (Rencana Anggaran Biaya) = Investment Planning
- Petani set durasi + biaya + komoditas
- Pembeli commit %return (bagi hasil / fixed %)
- Multi-investor per RAB until target reached
- Credit score turun if target unmet by deadline

### ML Classifier Integration
Input: Foto hasil panen → Output: Grade A/B/C/D + price multiplier

### Rekber (Escrow) Verification
Admin verify transfer proof sebelum product shipped.

---

## 8. Lessons Learned

| Concept | Example in Case | Why |
|---------|-----------------|-----|
| **One-to-Many** | Petani → Produk | Single farmer, many harvests |
| **Transaction** | tutupLelang() | All steps must succeed or rollback |
| **DTO Validation** | @IsEmail(), @IsUrl() | Prevent garbage data |
| **Credit Score** | pembeli.creditScore++ | Business rule in service |
| **Relations** | `{ pembeli: true }` | TypeORM v0.3+ syntax |

---

## Next Steps

1. **Run project**:
   ```bash
   npm run start:dev
   ```

2. **Read code files** (in order):
   - `src/week05/entities/petani.entity.ts`
   - `src/week06/services/lelang.service.ts`
   - `src/week06/lelang/lelang.controller.ts`

3. **Modify & extend**:
   - Add `@Put` endpoint untuk update lelang status
   - Add rating service post-auction
   - Add credit score decay logic

4. **For capstone**: Copy `service.ts` + `dtos/` + `entities/` pattern.

---

## Common Pitfalls

❌ **Relation string array**: `relations: ['pembeli']`  
✅ **Object format**: `relations: { pembeli: true }`

❌ **Logic in controller**:
```typescript
@Post()
create(@Body() dto) {
  const pembeli = new Pembeli(dto);  // ← WRONG
  return pembeli;
}
```

✅ **Delegate to service**:
```typescript
@Post()
create(@Body() dto) {
  return this.pembeliService.create(dto);  // ← RIGHT
}
```

❌ **No transaction** — UPDATE pembeli, then UPDATE tawaran, then crash ← race condition  
✅ **Transaction wrapper** — all or nothing

---

## Query Examples (Service Layer)

```typescript
// Find with eager load
const lelang = await this.lelangRepository.find({
  relations: { produk: { petani: true }, tawaran: true },
  where: { status: 'RUNNING' },
  order: { createdAt: 'DESC' },
  take: 10,  // limit
});

// Aggregate (highest bid)
const tertinggi = await this.tawaranRepository
  .createQueryBuilder('t')
  .where('t.lelang_id = :lelangId', { lelangId })
  .orderBy('t.hargaTawar', 'DESC')
  .limit(1)
  .getOne();

// Update conditional
const result = await this.pembeliRepository.update(
  { creditScore: LessThan(50) },  // where
  { creditScore: 50 },  // set
);
```

Semua pattern sudah ada di code. Copy-paste, modify, test.
