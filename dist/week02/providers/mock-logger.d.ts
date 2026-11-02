import { Logger } from './logger.interface.js';
export declare class MockLogger implements Logger {
    log(message: string): void;
    error(message: string, trace?: string): void;
    warn(message: string): void;
}
