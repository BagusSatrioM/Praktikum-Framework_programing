import { MockLogger } from './mock-logger.js';
export const loggerProviders = [
    {
        provide: 'LOGGER',
        useClass: MockLogger,
    },
    {
        provide: 'ALIAS_LOGGER',
        useExisting: 'LOGGER',
    },
];
//# sourceMappingURL=logger-providers.js.map