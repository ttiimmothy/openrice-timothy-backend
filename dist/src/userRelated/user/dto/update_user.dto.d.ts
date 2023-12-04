import { UserRole } from '../../../global/utils/enums/UserRole';
export declare class UpdateUserDto {
    username?: string;
    email?: string;
    password?: string;
    role?: UserRole;
}
export declare class UpdateUserDtoExtended {
    updateUserDto: UpdateUserDto;
    fileExtension: string;
}
