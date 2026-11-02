import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PetaniService } from './petani.service.js';
import { CreatePetaniDto } from './dtos/create-petani.dto.js';
import { UpdatePetaniDto } from './dtos/update-petani.dto.js';

@Controller('petani')
export class PetaniController {
  constructor(private readonly petaniService: PetaniService) {}

  @Post()
  create(@Body() createPetaniDto: CreatePetaniDto) {
    return this.petaniService.create(createPetaniDto);
  }

  @Get()
  findAll() {
    return this.petaniService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petaniService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePetaniDto: UpdatePetaniDto) {
    return this.petaniService.update(id, updatePetaniDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petaniService.remove(id);
  }
}
