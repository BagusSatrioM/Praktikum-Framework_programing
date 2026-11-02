var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let UsersService = class UsersService {
    users = [];
    idCounter = 1;
    create(createUserDto) {
        const user = {
            id: String(this.idCounter++),
            ...createUserDto,
        };
        this.users.push(user);
        return user;
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        return this.users.find((u) => u.id === id);
    }
    update(id, updateUserDto) {
        const user = this.findOne(id);
        if (!user)
            return null;
        Object.assign(user, updateUserDto);
        return user;
    }
    remove(id) {
        const idx = this.users.findIndex((u) => u.id === id);
        if (idx < 0)
            return false;
        this.users.splice(idx, 1);
        return true;
    }
};
UsersService = __decorate([
    Injectable()
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map