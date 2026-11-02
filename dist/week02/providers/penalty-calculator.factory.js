export const penaltyCalculatorFactory = {
    provide: 'PENALTY_CALCULATOR',
    useFactory: () => {
        return {
            calculate: (amount, days) => {
                const rate = 0.1;
                return amount * rate * days;
            },
        };
    },
};
//# sourceMappingURL=penalty-calculator.factory.js.map