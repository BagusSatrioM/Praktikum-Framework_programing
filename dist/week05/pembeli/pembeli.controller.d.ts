import { PembeliService } from './pembeli.service.js';
import { CreatePembeliDto } from './dtos/create-pembeli.dto.js';
import { UpdatePembeliDto } from './dtos/update-pembeli.dto.js';
export declare class PembeliController {
    private readonly pembeliService;
    constructor(pembeliService: PembeliService);
    create(createPembeliDto: CreatePembeliDto): Promise<import("../entities/pembeli.entity.js").Pembeli>;
    findAll(): Promise<import("../entities/pembeli.entity.js").Pembeli[]>;
    findOne(id: string): Promise<import("../entities/pembeli.entity.js").Pembeli | null>;
    update(id: string, updatePembeliDto: UpdatePembeliDto): Promise<import("../entities/pembeli.entity.js").Pembeli | null>;
    remove(id: string): Promise<boolean>;
}
