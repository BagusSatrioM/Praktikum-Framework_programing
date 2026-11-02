import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller.js';
import { AuthGuard } from '../auth/auth.guard.js';

@Module({
  controllers: [ItemsController],
  providers: [AuthGuard],
})
export class ItemsModule {}
