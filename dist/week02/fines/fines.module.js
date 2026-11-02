var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { FinesController } from './fines.controller.js';
import { PenaltyCalculatorService } from '../providers/penalty-calculator.js';
import { AppConfigService } from '../providers/config-service.js';
import { MockLogger } from '../providers/mock-logger.js';
import { loggerProviders } from '../providers/logger-providers.js';
let FinesModule = class FinesModule {
};
FinesModule = __decorate([
    Module({
        controllers: [FinesController],
        providers: [
            PenaltyCalculatorService,
            AppConfigService,
            MockLogger,
            ...loggerProviders,
            {
                provide: 'PENALTY_CALCULATOR',
                useFactory: (config) => {
                    const rate = config.getNumber('DEFAULT_PENALTY_RATE') ?? 0.05;
                    return {
                        calculate: (amount, days) => amount * rate * days,
                    };
                },
                inject: [AppConfigService],
            },
        ],
    })
], FinesModule);
export { FinesModule };
//# sourceMappingURL=fines.module.js.map