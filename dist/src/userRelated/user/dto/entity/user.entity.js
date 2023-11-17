"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const openapi = require("@nestjs/swagger");
class UserEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_id: { required: true, type: () => String }, email: { required: true, type: () => String }, username: { required: true, type: () => String }, password: { required: true, type: () => String }, created_at: { required: true, type: () => Date }, modified_at: { required: true, type: () => Date }, active: { required: true, type: () => Boolean }, role: { required: true, enum: require("../../../../global/utils/enums/UserRole").UserRole } };
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map