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
const user_service_1 = require("./user.service");
const update_user_dto_1 = require("./dto/update_user.dto");
const swagger_1 = require("@nestjs/swagger");
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
    async updateUser(params, updateUserDto) {
        const userFound = await this.userService.getUserByID(params.user_id);
        if (userFound) {
            return (await this.userService.updateUser(params.user_id, updateUserDto))[0];
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
    (0, common_1.Put)('id/:user_id'),
    (0, swagger_1.ApiParam)({ name: 'user_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
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