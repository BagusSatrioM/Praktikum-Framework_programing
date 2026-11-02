import { Controller, Post, Body, Param } from '@nestjs/common';
import { LelangService } from '../services/lelang.service.js';

@Controller('lelang')
export class LelangController {
  constructor(private readonly lelangService: LelangService) {}

  @Post(':produkId/tawar/:pembeliId')
  tawar(
    @Param('produkId') produkId: string,
    @Param('pembeliId') pembeliId: string,
    @Body('jumlah') jumlah: number,
  ) {
    return this.lelangService.lelangProduk(produkId, pembeliId, jumlah);
  }

  @Post(':produkId/selesaikan')
  selesaikan(@Param('produkId') produkId: string) {
    return this.lelangService.selesaikanLelang(produkId);
  }
}
