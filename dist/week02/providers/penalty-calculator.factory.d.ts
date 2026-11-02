import { PenaltyCalculator } from './penalty-calculator.interface.js';
export declare const penaltyCalculatorFactory: {
    provide: string;
    useFactory: () => PenaltyCalculator;
};
