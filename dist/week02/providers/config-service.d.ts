import { ConfigService } from './config-service.interface.js';
export declare class AppConfigService implements ConfigService {
    private config;
    get(key: string): string | undefined;
    getNumber(key: string): number | undefined;
}
