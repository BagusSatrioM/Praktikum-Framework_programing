import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { UpdateUserDto } from './dtos/update-user.dto.js';

@Injectable()
export class UsersService {
  private users: { id: string; name: string; email: string }[] = [];
  private idCounter = 1;

  create(createUserDto: CreateUserDto) {
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

  findOne(id: string) {
    return this.users.find((u) => u.id === id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    if (!user) return null;
    Object.assign(user, updateUserDto);
    return user;
  }

  remove(id: string) {
    const idx = this.users.findIndex((u) => u.id === id);
    if (idx < 0) return false;
    this.users.splice(idx, 1);
    return true;
  }
}
