"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwtSimple = require("jwt-simple");
const auth_service_1 = require("./auth.service");
const user_service_1 = require("../user/user.service");
const create_user_dto_1 = require("../user/dto/create_user.dto");
const hash_1 = require("../../global/lib/hash");
const auth_guard_1 = require("../../global/guards/auth.guard");
const create_auth_dto_1 = require("./dto/create_auth.dto");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async register(body) {
        const users = await this.userService.getUsers();
        if (users.find((user) => user.username === body.createUserDto.username)) {
            return { message: 'This username is already used' };
        }
        if (users.find((user) => user.email === body.createUserDto.email)) {
            return { message: 'This email is already used' };
        }
        const newUser = (await this.userService.createUser({
            ...body.createUserDto,
            password: await (0, hash_1.hashPassword)(body.createUserDto.password),
        }, body.fileExtension))[0];
        const token = jwtSimple.encode(newUser, process.env.JWT_SECRET);
        return {
            user: {
                user_id: newUser.user_id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role,
                profile_picture_url: newUser.profile_picture_url,
            },
            token,
        };
    }
    async login(credentials) {
        const users = await this.userService.getUsers();
        if (users.findIndex((user) => user.username === credentials.username) === -1) {
            return { message: 'The username is not found' };
        }
        const user = (await this.authService.login(credentials.username))[0];
        const match = await (0, hash_1.checkPassword)(credentials.password, user.password);
        if (match) {
            const token = jwtSimple.encode(user, process.env.JWT_SECRET);
            const userFound = {
                user_id: user.user_id,
                username: user.username,
                email: user.email,
                role: user.role,
                profile_picture_url: user.profile_picture_url,
            };
            return { user: userFound, token };
        }
        else {
            return { message: 'The password is incorrect' };
        }
    }
    getCurrentUser(req) {
        return { user: req.user };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    openapi.ApiResponse({ status: 201, type: require("./dto/entity/auth.entity").RegisterResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDtoExtended]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    openapi.ApiResponse({ status: 201, type: require("./dto/entity/auth.entity").LoginResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.CreateAuthDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('current-user'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getCurrentUser", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('api/auth/user'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map