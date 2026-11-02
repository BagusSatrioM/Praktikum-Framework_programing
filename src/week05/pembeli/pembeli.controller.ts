import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PembeliService } from './pembeli.service.js';
import { CreatePembeliDto } from './dtos/create-pembeli.dto.js';
import { UpdatePembeliDto } from './dtos/update-pembeli.dto.js';

@Controller('pembeli')
export class PembeliController {
  constructor(private readonly pembeliService: PembeliService) {}

  @Post()
  create(@Body() createPembeliDto: CreatePembeliDto) {
    return this.pembeliService.create(createPembeliDto);
  }

  @Get()
  findAll() {
    return this.pembeliService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pembeliService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePembeliDto: UpdatePembeliDto) {
    return this.pembeliService.update(id, updatePembeliDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pembeliService.remove(id);
  }
}
