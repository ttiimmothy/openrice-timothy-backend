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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDtoExtended = exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const UserRole_1 = require("../../../global/utils/enums/UserRole");
class CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, role: { required: false, enum: require("../../../global/utils/enums/UserRole").UserRole } };
    }
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The username of that user',
        type: String,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The email of that user',
        type: String,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The password of that user',
        type: String,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The role of the user',
        enum: UserRole_1.UserRole,
        default: UserRole_1.UserRole.User,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
class CreateUserDtoExtended {
    static _OPENAPI_METADATA_FACTORY() {
        return { createUserDto: { required: true, type: () => require("./create_user.dto").CreateUserDto }, fileExtension: { required: false, type: () => String } };
    }
}
exports.CreateUserDtoExtended = CreateUserDtoExtended;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'create user dto',
        type: CreateUserDto,
    }),
    __metadata("design:type", CreateUserDto)
], CreateUserDtoExtended.prototype, "createUserDto", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'file extension of the profile picture',
        type: String,
    }),
    __metadata("design:type", String)
], CreateUserDtoExtended.prototype, "fileExtension", void 0);
//# sourceMappingURL=create_user.dto.js.map