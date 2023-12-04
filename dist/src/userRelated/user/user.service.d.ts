import { Knex } from 'knex';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';
export declare class UserService {
    private readonly knex;
    constructor(knex: Knex);
    getUsers(): Promise<any[]>;
    getUserByID(id: string): Promise<any[]>;
    createUser(user: CreateUserDto, fileExtension?: string): Promise<any[]>;
    updateUserProfile(id: string, user: UpdateUserDto, fileExtension: string): Promise<any[]>;
    deleteUser(id: string): Promise<any[]>;
}
