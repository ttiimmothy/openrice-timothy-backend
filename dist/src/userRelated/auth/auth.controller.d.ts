import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginResponse, RegisterResponse } from './dto/entity/auth.entity';
import { LoginUserDto } from '../user/dto/login-user.dto';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    register(createUserDto: CreateUserDto): Promise<RegisterResponse>;
    login(credentials: LoginUserDto): Promise<LoginResponse>;
    getCurrentUser(req: any): {
        user: any;
    };
}
