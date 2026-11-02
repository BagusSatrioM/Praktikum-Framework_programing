import { ConfigService } from './config-service.interface.js';
import { AppConfigService } from './config-service.js';

export const configServiceFactory = {
  provide: 'CONFIG_SERVICE',
  useFactory: () => {
    return new AppConfigService();
  },
};
