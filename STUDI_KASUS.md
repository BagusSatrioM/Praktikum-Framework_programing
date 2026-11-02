# Studi Kasus: BookStore E-Commerce

BookStore merupakan aplikasi e-commerce untuk penjualan buku secara online.

## Fitur Sistem

- Mengelola data buku
- Mengelola kategori buku
- Mengelola penerbit
- Mengelola pelanggan
- Mencatat pesanan dan detail buku yang dibeli
- Mencatat pembayaran
- Mengelola pengiriman pesanan

## Rancangan Tabel Database

| No. | Table | Fungsi |
|---|---|---|
| 1 | customers | Menyimpan data pelanggan |
| 2 | customer_addresses | Menyimpan alamat pelanggan |
| 3 | categories | Menyimpan kategori buku |
| 4 | publishers | Menyimpan data penerbit |
| 5 | books | Menyimpan informasi buku |
| 6 | authors | Menyimpan data penulis |
| 7 | book_authors | Menghubungkan buku dan penulis |
| 8 | orders | Menyimpan transaksi pesanan |
| 9 | order_items | Menyimpan detail buku dalam pesanan |
| 10 | payments | Menyimpan informasi pembayaran |
| 11 | shipments | Menyimpan informasi pengiriman |

---

## A. customers

Menyimpan data pelanggan.

| Column | Type | Keterangan |
|---|---|---|
| id | UUID | Primary key |
| name | VARCHAR(150) | Nama pelanggan |
| email | VARCHAR(150) | Email pelanggan, unik |
| phone | VARCHAR(20) | Nomor telepon |
| created_at | TIMESTAMP | Waktu dibuat |
| updated_at | TIMESTAMP | Waktu diperbarui |
| deleted_at | TIMESTAMP, nullable | Waktu soft delete |

**Relasi:**
- customers (1) → (N) orders: Satu pelanggan dapat memiliki banyak pesanan
- customers (1) → (N) customer_addresses: Satu pelanggan dapat menyimpan beberapa alamat

---

## B. customer_addresses

Menyimpan alamat pengiriman pelanggan.

| Column | Type | Keterangan |
|---|---|---|
| id | UUID | Primary key |
| customer_id | UUID | Foreign key ke customers |
| recipient_name | VARCHAR(150) | Nama penerima |
| phone | VARCHAR(20) | Nomor telepon penerima |
| address | TEXT | Alamat lengkap |
| city | VARCHAR(100) | Kota |
| postal_code | VARCHAR(10) | Kode pos |
| created_at | TIMESTAMP | Waktu dibuat |
| updated_at | TIMESTAMP | Waktu diperbarui |

**Relasi:**
- customers (1) → (N) customer_addresses: Satu pelanggan dapat menyimpan beberapa alamat

**Catatan:** Untuk transaksi nyata, orders sebaiknya juga menyimpan snapshot alamat pengiriman saat checkout. Dengan begitu, perubahan alamat pelanggan tidak mengubah riwayat alamat pesanan lama.

---

## C. categories

Menyimpan kategori buku.

| Column | Type | Keterangan |
|---|---|---|
| id | UUID | Primary key |
| name | VARCHAR(100) | Nama kategori, unik |
| created_at | TIMESTAMP | Waktu dibuat |
| updated_at | TIMESTAMP | Waktu diperbarui |

**Contoh kategori:**
- Programming
- Database
- Business
- Design
- Education

**Relasi:**
- categories (1) → (N) books: Satu kategori dapat memiliki banyak buku

---

## D. publishers

Menyimpan data penerbit.

| Column | Type | Keterangan |
|---|---|---|
| id | UUID | Primary key |
| name | VARCHAR(150) | Nama penerbit |
| created_at | TIMESTAMP | Waktu dibuat |
| updated_at | TIMESTAMP | Waktu diperbarui |

**Relasi:**
- publishers (1) → (N) books: Satu penerbit dapat menerbitkan banyak buku

---

## E. books

Menyimpan informasi buku.

| Column | Type | Keterangan |
|---|---|---|
| id | UUID | Primary key |
| title | VARCHAR(30) | Judul buku |
| isbn | VARCHAR(45) | ISBN buku, unik |
| publishedYear | INT | Tahun terbit, default 0 |
| isAvailable | BOOLEAN | Status ketersediaan, default true |
| price | DECIMAL(12,2) | Harga jual buku, default 0 |
| stock | INT | Jumlah stok yang tersedia, default 0 |
| category_id | UUID | Foreign key ke categories, nullable |
| publisher_id | UUID | Foreign key ke publishers, nullable |
| created_at | TIMESTAMP | Waktu data dibuat |
| updated_at | TIMESTAMP | Waktu data diperbarui |
| deleted_at | TIMESTAMP, nullable | Waktu soft delete |

**Relasi:**
- categories (1) → (N) books: Melalui category_id
- publishers (1) → (N) books: Melalui publisher_id
- books (N) ↔ (N) authors: Melalui book_authors

**Catatan:**
- ISBN menggunakan constraint UNIQUE agar ISBN yang sama tidak tercatat lebih dari sekali
- price menggunakan DECIMAL, bukan FLOAT, agar nilai harga tidak mengalami masalah presisi floating-point
- stock digunakan untuk menyimpan jumlah buku yang tersedia dalam inventaris
- isAvailable dapat menunjukkan apakah buku ditawarkan atau tersedia untuk dijual, tetapi status ini perlu disinkronkan dengan aturan stok
- deletedAt digunakan untuk mendukung soft delete melalui TypeORM

---

## F. authors

Menyimpan data penulis.

| Column | Type | Keterangan |
|---|---|---|
| id | UUID | Primary key |
| name | VARCHAR(150) | Nama penulis |
| created_at | TIMESTAMP | Waktu dibuat |
| updated_at | TIMESTAMP | Waktu diperbarui |

**Relasi:**
- authors (N) ↔ (N) books: Melalui book_authors

---

## G. book_authors

Menghubungkan buku dan penulis (relasi many-to-many).

| Column | Type | Keterangan |
|---|---|---|
| book_id | UUID | Foreign key ke books (Primary key) |
| author_id | UUID | Foreign key ke authors (Primary key) |

**Relasi:**
- books (N) ↔ (N) authors

**Catatan:**
- Primary key berupa gabungan (book_id, author_id)
- Jika menggunakan authors dan book_authors, kolom author pada entity Book sebaiknya dihapus untuk menghindari redundansi data

---

## H. orders

Menyimpan informasi utama pesanan.

| Column | Type | Keterangan |
|---|---|---|
| id | UUID | Primary key |
| customer_id | UUID | Foreign key ke customers |
| order_number | VARCHAR(50) | Nomor pesanan, unik |
| status | VARCHAR(30) | Status pesanan |
| total_amount | DECIMAL(12,2) | Total pesanan |
| created_at | TIMESTAMP | Waktu pesanan dibuat |
| updated_at | TIMESTAMP | Waktu pesanan diperbarui |

**Status pesanan:**
- pending
- paid
- processing
- shipped
- completed
- cancelled

**Relasi:**
- customers (1) → (N) orders: Melalui customer_id
- orders (1) → (N) order_items: Satu pesanan dapat memiliki banyak item buku
- orders (1) → (1) payments: Satu pesanan memiliki satu pembayaran (sederhana)
- orders (1) → (1) shipments: Satu pesanan memiliki satu pengiriman (sederhana)

**Catatan:** total_amount dapat disimpan sebagai snapshot nilai transaksi, tetapi perhitungannya harus dijaga agar konsisten dengan detail pesanan dan komponen biaya lainnya.

---

## I. order_items

Menyimpan buku yang dibeli pada setiap pesanan.

| Column | Type | Keterangan |
|---|---|---|
| id | UUID | Primary key |
| order_id | UUID | Foreign key ke orders |
| book_id | UUID | Foreign key ke books |
| quantity | INT | Jumlah buku |
| price | DECIMAL(12,2) | Harga satuan saat transaksi |
| subtotal | DECIMAL(12,2) | Subtotal item |

**Relasi:**
- orders (1) → (N) order_items: Satu pesanan dapat memiliki banyak item
- books (1) → (N) order_items: Satu buku dapat muncul di banyak pesanan

**Mengapa price harus disimpan di order_items?**

Contoh: Harga buku saat ini Rp150.000, tetapi harga ketika pelanggan membeli buku minggu lalu Rp130.000.

Riwayat transaksi harus tetap menunjukkan harga Rp130.000, walaupun harga katalog sekarang telah berubah.

Karena itu, order_items.price merupakan snapshot harga pada saat pembelian, bukan duplikasi yang harus selalu sama dengan books.price.

---

## J. payments

Menyimpan informasi pembayaran.

| Column | Type | Keterangan |
|---|---|---|
| id | UUID | Primary key |
| order_id | UUID | Foreign key ke orders, unik |
| payment_method | VARCHAR(50) | Metode pembayaran |
| amount | DECIMAL(12,2) | Jumlah pembayaran |
| status | VARCHAR(30) | Status pembayaran |
| paid_at | TIMESTAMP, nullable | Waktu pembayaran berhasil |
| created_at | TIMESTAMP | Waktu dibuat |

**Relasi:**
- orders (1) → (1) payments: Satu pesanan memiliki satu pembayaran (untuk sistem sederhana)

**Catatan:** Untuk sistem sederhana, order_id dapat diberi constraint UNIQUE jika satu pesanan hanya boleh memiliki satu catatan pembayaran. Jika sistem mendukung beberapa percobaan pembayaran, desainnya perlu memungkinkan satu pesanan memiliki beberapa catatan pembayaran.

---

## K. shipments

Menyimpan informasi pengiriman.

| Column | Type | Keterangan |
|---|---|---|
| id | UUID | Primary key |
| order_id | UUID | Foreign key ke orders, unik |
| courier | VARCHAR(100) | Nama kurir |
| tracking_number | VARCHAR(100), nullable | Nomor resi |
| status | VARCHAR(30) | Status pengiriman |
| shipped_at | TIMESTAMP, nullable | Waktu pengiriman |
| delivered_at | TIMESTAMP, nullable | Waktu diterima |
| created_at | TIMESTAMP | Waktu dibuat |

**Relasi:**
- orders (1) → (1) shipments: Satu pesanan memiliki satu pengiriman (untuk skenario sederhana)

**Catatan:** Untuk skenario sederhana, satu pesanan memiliki maksimal satu pengiriman sehingga order_id diberi constraint UNIQUE.

---

## Ringkasan Relasi

| Parent Table | Child Table | Relasi |
|---|---|---|
| customers | customer_addresses | One-to-Many |
| customers | orders | One-to-Many |
| categories | books | One-to-Many |
| publishers | books | One-to-Many |
| books | book_authors | One-to-Many |
| authors | book_authors | One-to-Many |
| orders | order_items | One-to-Many |
| books | order_items | One-to-Many |
| orders | payments | One-to-One |
| orders | shipments | One-to-One |

---

## ERD Konseptual

```
CUSTOMERS
   |
   | 1:N
   +-------------- CUSTOMER_ADDRESSES
   |
   | 1:N
   |
   ORDERS
   |
   | 1:N
   |
   ORDER_ITEMS
   |
   | N:1
   |
   BOOKS
   |
   +------------- CATEGORIES
   |
   +------------- PUBLISHERS
   |
   | 1:N
   |
   BOOK_AUTHORS
   |
   | N:1
   |
   AUTHORS
   
ORDERS
   |
   +------------- PAYMENTS (1:1)
   |
   +------------- SHIPMENTS (1:1)
```

---

## Implementasi TypeORM

Semua entities telah diimplementasikan di `src/bookstore/entities/`:
- customer.entity.ts
- customer-address.entity.ts
- category.entity.ts
- publisher.entity.ts
- book.entity.ts
- author.entity.ts
- book-author.entity.ts
- order.entity.ts
- order-item.entity.ts
- payment.entity.ts
- shipment.entity.ts

Database: `db_bookstore`
Type: MySQL
Host: localhost:3306

Semua entities menggunakan:
- UUID sebagai primary key (@PrimaryGeneratedColumn('uuid'))
- Soft delete melalui @DeleteDateColumn (untuk Book, Customer, Category, Publisher)
- Decimal untuk price/amount (precision: 12, scale: 2)
- CreateDateColumn dan UpdateDateColumn untuk audit trail
