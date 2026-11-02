import { Repository } from 'typeorm';
import { Petani } from '../entities/petani.entity.js';
import { CreatePetaniDto } from './dtos/create-petani.dto.js';
import { UpdatePetaniDto } from './dtos/update-petani.dto.js';
import { User } from '../entities/user.entity.js';
export declare class PetaniService {
    private readonly petaniRepository;
    private readonly userRepository;
    constructor(petaniRepository: Repository<Petani>, userRepository: Repository<User>);
    create(createPetaniDto: CreatePetaniDto): Promise<Petani>;
    findAll(): Promise<Petani[]>;
    findOne(id: string): Promise<Petani | null>;
    update(id: string, updatePetaniDto: UpdatePetaniDto): Promise<Petani | null>;
    remove(id: string): Promise<boolean>;
}
