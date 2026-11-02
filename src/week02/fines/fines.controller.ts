import { Controller, Get, Query, Inject } from '@nestjs/common';
import type { PenaltyCalculator } from '../providers/penalty-calculator.interface.js';

@Controller('fines')
export class FinesController {
  constructor(
    @Inject('PENALTY_CALCULATOR')
    private readonly penaltyCalculator: PenaltyCalculator,
  ) {}

  @Get('calculate')
  calculateFine(
    @Query('amount') amount: number,
    @Query('days') days: number,
  ) {
    return {
      amount,
      days,
      total: this.penaltyCalculator.calculate(amount, days),
    };
  }
}
