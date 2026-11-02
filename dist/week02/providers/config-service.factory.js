import { AppConfigService } from './config-service.js';
export const configServiceFactory = {
    provide: 'CONFIG_SERVICE',
    useFactory: () => {
        return new AppConfigService();
    },
};
//# sourceMappingURL=config-service.factory.js.map