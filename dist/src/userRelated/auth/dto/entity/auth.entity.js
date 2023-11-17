"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponse = exports.RegisterResponse = void 0;
const openapi = require("@nestjs/swagger");
class RegisterResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { message: { required: false, type: () => String }, token: { required: false, type: () => String } };
    }
}
exports.RegisterResponse = RegisterResponse;
class LoginResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { user: { required: false, type: () => ({ user_id: { required: true, type: () => String }, email: { required: true, type: () => String }, username: { required: true, type: () => String }, role: { required: true, type: () => String } }) }, message: { required: false, type: () => String }, token: { required: false, type: () => String } };
    }
}
exports.LoginResponse = LoginResponse;
//# sourceMappingURL=auth.entity.js.map