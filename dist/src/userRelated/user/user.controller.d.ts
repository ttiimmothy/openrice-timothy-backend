import { UserService } from './user.service';
import { UpdateUserDtoExtended } from './dto/update_user.dto';
import { UpdateUserProfileResponse, UserEntity } from './dto/entity/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<UserEntity[]>;
    getUserByID(params: {
        user_id: string;
    }): Promise<UserEntity>;
    updateUserProfile(params: {
        user_id: string;
    }, body: UpdateUserDtoExtended, req: any): Promise<UpdateUserProfileResponse>;
    deleteUser(params: {
        user_id: string;
    }): Promise<UserEntity | {
        message: string;
    }>;
}
