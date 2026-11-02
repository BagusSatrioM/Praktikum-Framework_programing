import { Module } from '@nestjs/common';
import { FinesController } from './fines.controller.js';
import { PenaltyCalculatorService } from '../providers/penalty-calculator.js';
import { AppConfigService } from '../providers/config-service.js';
import { MockLogger } from '../providers/mock-logger.js';
import { loggerProviders } from '../providers/logger-providers.js';

@Module({
  controllers: [FinesController],
  providers: [
    PenaltyCalculatorService,
    AppConfigService,
    MockLogger,
    ...loggerProviders,
    {
      provide: 'PENALTY_CALCULATOR',
      useFactory: (config: AppConfigService) => {
        const rate = config.getNumber('DEFAULT_PENALTY_RATE') ?? 0.05;
        return {
          calculate: (amount: number, days: number) => amount * rate * days,
        };
      },
      inject: [AppConfigService],
    },
  ],
})
export class FinesModule {}
