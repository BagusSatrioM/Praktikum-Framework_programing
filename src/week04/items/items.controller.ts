import { Controller, Get, Post, Body, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard.js';
import { Public } from '../decorators/public.decorator.js';
import { ResponseInterceptor } from '../interceptors/response.interceptor.js';

@UseInterceptors(ResponseInterceptor)
@UseGuards(AuthGuard)
@Controller('items')
export class ItemsController {
  private items = [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }];

  @Public()
  @Get()
  findAll() {
    return this.items;
  }

  @Post()
  create(@Body() body: { name: string }) {
    const item = { id: String(this.items.length + 1), ...body };
    this.items.push(item);
    return item;
  }
}
