var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let AppConfigService = class AppConfigService {
    config = {
        APP_NAME: 'Lelang Hasil Panen',
        DEFAULT_PENALTY_RATE: '0.05',
        DB_HOST: 'localhost',
        DB_PORT: '3306',
    };
    get(key) {
        return this.config[key];
    }
    getNumber(key) {
        const val = this.config[key];
        return val ? parseFloat(val) : undefined;
    }
};
AppConfigService = __decorate([
    Injectable()
], AppConfigService);
export { AppConfigService };
//# sourceMappingURL=config-service.js.map