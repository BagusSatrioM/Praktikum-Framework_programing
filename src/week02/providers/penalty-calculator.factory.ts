import { PenaltyCalculator } from './penalty-calculator.interface.js';

export const penaltyCalculatorFactory = {
  provide: 'PENALTY_CALCULATOR',
  useFactory: () => {
    return {
      calculate: (amount: number, days: number): number => {
        const rate = 0.1;
        return amount * rate * days;
      },
    } as PenaltyCalculator;
  },
};
