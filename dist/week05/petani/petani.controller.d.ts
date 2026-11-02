import { PetaniService } from './petani.service.js';
import { CreatePetaniDto } from './dtos/create-petani.dto.js';
import { UpdatePetaniDto } from './dtos/update-petani.dto.js';
export declare class PetaniController {
    private readonly petaniService;
    constructor(petaniService: PetaniService);
    create(createPetaniDto: CreatePetaniDto): Promise<import("../entities/petani.entity.js").Petani>;
    findAll(): Promise<import("../entities/petani.entity.js").Petani[]>;
    findOne(id: string): Promise<import("../entities/petani.entity.js").Petani | null>;
    update(id: string, updatePetaniDto: UpdatePetaniDto): Promise<import("../entities/petani.entity.js").Petani | null>;
    remove(id: string): Promise<boolean>;
}
