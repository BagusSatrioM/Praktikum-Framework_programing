import { Injectable } from '@nestjs/common';
import { ConfigService } from './config-service.interface.js';

@Injectable()
export class AppConfigService implements ConfigService {
  private config: Record<string, string> = {
    APP_NAME: 'Lelang Hasil Panen',
    DEFAULT_PENALTY_RATE: '0.05',
    DB_HOST: 'localhost',
    DB_PORT: '3306',
  };

  get(key: string): string | undefined {
    return this.config[key];
  }

  getNumber(key: string): number | undefined {
    const val = this.config[key];
    return val ? parseFloat(val) : undefined;
  }
}
