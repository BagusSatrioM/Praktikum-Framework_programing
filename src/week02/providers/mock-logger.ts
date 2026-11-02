import { Logger } from './logger.interface.js';

export class MockLogger implements Logger {
  log(message: string): void {
    console.log(`[MOCK] ${message}`);
  }

  error(message: string, trace?: string): void {
    console.error(`[MOCK ERROR] ${message}`, trace);
  }

  warn(message: string): void {
    console.warn(`[MOCK WARN] ${message}`);
  }
}
