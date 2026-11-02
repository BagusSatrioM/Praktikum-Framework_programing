import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module.js';
import { RequestLoggerMiddleware } from './middleware/request-logger.middleware.js';

@Module({
  imports: [UsersModule],
})
export class Week03Module implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('users');
  }
}
