import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update_user.dto';
import { UserEntity } from './dto/entity/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<UserEntity[]>;
    getUserByID(params: {
        user_id: string;
    }): Promise<UserEntity>;
    updateUser(params: {
        user_id: string;
    }, updateUserDto: UpdateUserDto): Promise<UserEntity | {
        message: string;
    }>;
    deleteUser(params: {
        user_id: string;
    }): Promise<UserEntity | {
        message: string;
    }>;
}
