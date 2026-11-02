import { MockLogger } from './mock-logger.js';
export declare const loggerProviders: ({
    provide: string;
    useClass: typeof MockLogger;
    useExisting?: undefined;
} | {
    provide: string;
    useExisting: string;
    useClass?: undefined;
})[];
