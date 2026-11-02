import { Injectable } from '@nestjs/common';
import type { PenaltyCalculator } from './penalty-calculator.interface.js';
import type { ConfigService } from './config-service.interface.js';

@Injectable()
export class PenaltyCalculatorService implements PenaltyCalculator {
  constructor(private readonly configService: ConfigService) {}

  calculate(amount: number, days: number): number {
    const rate = this.configService.getNumber('DEFAULT_PENALTY_RATE') ?? 0.05;
    return amount * rate * days;
  }
}
