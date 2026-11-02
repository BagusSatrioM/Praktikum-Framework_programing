export interface PenaltyCalculator {
  calculate(amount: number, days: number): number;
}
