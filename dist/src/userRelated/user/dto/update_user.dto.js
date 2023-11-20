"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const openapi = require("@nestjs/swagger");
class UpdateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: false, type: () => String }, password: { required: false, type: () => String }, role: { required: false, enum: require("../../../global/utils/enums/UserRole").UserRole } };
    }
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update_user.dto.js.map