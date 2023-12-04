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
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwtSimple = require("jwt-simple");
const user_service_1 = require("./user.service");
const auth_guard_1 = require("../../global/guards/auth.guard");
const update_user_dto_1 = require("./dto/update_user.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getUsers() {
        return await this.userService.getUsers();
    }
    async getUserByID(params) {
        return (await this.userService.getUserByID(params.user_id))[0];
    }
    async updateUserProfile(params, body, req) {
        const userFound = await this.userService.getUserByID(params.user_id);
        if (userFound) {
            const users = await this.userService.getUsers();
            if (users.find((user) => user.username === body.updateUserDto.username) &&
                req.user.username !== body.updateUserDto.username) {
                return {
                    message: 'The username cannot be updated because this username is already used',
                };
            }
            if (users.find((user) => user.email === body.updateUserDto.email) &&
                req.user.email !== body.updateUserDto.email) {
                return {
                    message: 'The email cannot be updated because this email is already used',
                };
            }
            const user = (await this.userService.updateUserProfile(params.user_id, body.updateUserDto, body.fileExtension))[0];
            const token = jwtSimple.encode(user, process.env.JWT_SECRET);
            return {
                userInfo: {
                    user_id: user.user_id,
                    email: user.email,
                    username: user.username,
                    role: user.role,
                    profile_picture_url: user.profile_picture_url,
                },
                token,
            };
        }
        else {
            return { message: 'This user cannot be found' };
        }
    }
    async deleteUser(params) {
        const userFound = await this.userService.getUserByID(params.user_id);
        if (userFound) {
            return (await this.userService.deleteUser(params.user_id))[0];
        }
        else {
            return { message: 'This user cannot be found' };
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./dto/entity/user.entity").UserEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('id/:user_id'),
    (0, swagger_1.ApiParam)({ name: 'user_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/user.entity").UserEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByID", null);
__decorate([
    (0, common_1.Put)('profile/:user_id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiParam)({ name: 'user_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/user.entity").UpdateUserProfileResponse }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDtoExtended, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserProfile", null);
__decorate([
    (0, common_1.Delete)('id/:user_id'),
    (0, swagger_1.ApiParam)({ name: 'user_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)('api/user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map