"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, username: { required: true, type: () => String }, password: { required: true, type: () => String }, role: { required: false, enum: require("../../../global/utils/enums/UserRole").UserRole } };
    }
}
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create_user.dto.js.map