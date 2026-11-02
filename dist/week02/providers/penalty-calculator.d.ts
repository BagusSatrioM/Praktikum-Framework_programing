import type { PenaltyCalculator } from './penalty-calculator.interface.js';
import type { ConfigService } from './config-service.interface.js';
export declare class PenaltyCalculatorService implements PenaltyCalculator {
    private readonly configService;
    constructor(configService: ConfigService);
    calculate(amount: number, days: number): number;
}
