import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';
import { ValidationPipe } from './pipes/validation.pipe.js';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'APP_PIPE',
      useClass: ValidationPipe,
    },
  ],
})
export class UsersModule {}
