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
exports.UpdateUserDtoExtended = exports.UpdateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const UserRole_1 = require("../../../global/utils/enums/UserRole");
class UpdateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: false, type: () => String }, email: { required: false, type: () => String }, password: { required: false, type: () => String }, role: { required: false, enum: require("../../../global/utils/enums/UserRole").UserRole } };
    }
}
exports.UpdateUserDto = UpdateUserDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The username of that user',
        type: String,
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The email of that user',
        type: String,
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The password of that user',
        type: String,
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The user role of that user',
        enum: UserRole_1.UserRole,
        default: UserRole_1.UserRole.User,
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "role", void 0);
class UpdateUserDtoExtended {
    static _OPENAPI_METADATA_FACTORY() {
        return { updateUserDto: { required: true, type: () => require("./update_user.dto").UpdateUserDto }, fileExtension: { required: true, type: () => String } };
    }
}
exports.UpdateUserDtoExtended = UpdateUserDtoExtended;
__decorate([
    (0, swagger_1.ApiProperty)({ type: UpdateUserDto }),
    __metadata("design:type", UpdateUserDto)
], UpdateUserDtoExtended.prototype, "updateUserDto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], UpdateUserDtoExtended.prototype, "fileExtension", void 0);
//# sourceMappingURL=update_user.dto.js.map