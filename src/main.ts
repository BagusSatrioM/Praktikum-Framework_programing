import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend access
  app.enableCors();
  
  // Global prefix untuk semua route
  app.setGlobalPrefix('api');
  
  await app.listen(3000);
  console.log('🚀 NestJS running at http://localhost:3000/api');
}
bootstrap();
