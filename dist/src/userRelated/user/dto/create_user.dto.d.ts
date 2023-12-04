import { UserRole } from '../../../global/utils/enums/UserRole';
export declare class CreateUserDto {
    username: string;
    email: string;
    password: string;
    role?: UserRole;
}
export declare class CreateUserDtoExtended {
    createUserDto: CreateUserDto;
    fileExtension?: string;
}
