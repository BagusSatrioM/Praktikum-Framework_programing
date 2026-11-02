var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Body, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard.js';
import { Public } from '../decorators/public.decorator.js';
import { ResponseInterceptor } from '../interceptors/response.interceptor.js';
let ItemsController = class ItemsController {
    items = [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }];
    findAll() {
        return this.items;
    }
    create(body) {
        const item = { id: String(this.items.length + 1), ...body };
        this.items.push(item);
        return item;
    }
};
__decorate([
    Public(),
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "findAll", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ItemsController.prototype, "create", null);
ItemsController = __decorate([
    UseInterceptors(ResponseInterceptor),
    UseGuards(AuthGuard),
    Controller('items')
], ItemsController);
export { ItemsController };
//# sourceMappingURL=items.controller.js.map