import type { PenaltyCalculator } from '../providers/penalty-calculator.interface.js';
export declare class FinesController {
    private readonly penaltyCalculator;
    constructor(penaltyCalculator: PenaltyCalculator);
    calculateFine(amount: number, days: number): {
        amount: number;
        days: number;
        total: number;
    };
}
