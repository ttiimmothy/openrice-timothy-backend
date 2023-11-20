import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create_user.dto';
import { LoginResponse, RegisterResponse } from './dto/entity/auth.entity';
import { CreateAuthDto } from './dto/create_auth.dto';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    register(createUserDto: CreateUserDto): Promise<RegisterResponse>;
    login(credentials: CreateAuthDto): Promise<LoginResponse>;
    getCurrentUser(req: any): {
        user: any;
    };
}
