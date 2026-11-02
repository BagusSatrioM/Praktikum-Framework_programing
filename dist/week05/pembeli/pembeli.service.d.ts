import { Repository } from 'typeorm';
import { Pembeli } from '../entities/pembeli.entity.js';
import { CreatePembeliDto } from './dtos/create-pembeli.dto.js';
import { UpdatePembeliDto } from './dtos/update-pembeli.dto.js';
import { User } from '../entities/user.entity.js';
export declare class PembeliService {
    private readonly pembeliRepository;
    private readonly userRepository;
    constructor(pembeliRepository: Repository<Pembeli>, userRepository: Repository<User>);
    create(createPembeliDto: CreatePembeliDto): Promise<Pembeli>;
    findAll(): Promise<Pembeli[]>;
    findOne(id: string): Promise<Pembeli | null>;
    update(id: string, updatePembeliDto: UpdatePembeliDto): Promise<Pembeli | null>;
    remove(id: string): Promise<boolean>;
}
