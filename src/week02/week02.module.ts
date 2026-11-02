import { Module } from '@nestjs/common';
import { FinesModule } from './fines/fines.module.js';

@Module({
  imports: [FinesModule],
})
export class Week02Module {}
