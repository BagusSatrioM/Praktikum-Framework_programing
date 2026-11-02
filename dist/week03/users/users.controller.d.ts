import { UsersService } from './users.service.js';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { UpdateUserDto } from './dtos/update-user.dto.js';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): {
        name: string;
        email: string;
        password: string;
        id: string;
    };
    findAll(): {
        id: string;
        name: string;
        email: string;
    }[];
    findOne(id: string): {
        id: string;
        name: string;
        email: string;
    } | undefined;
    update(id: string, updateUserDto: UpdateUserDto): {
        id: string;
        name: string;
        email: string;
    } | null;
    remove(id: string): boolean;
}
