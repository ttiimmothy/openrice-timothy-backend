"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAuthDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateAuthDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String }, password: { required: true, type: () => String } };
    }
}
exports.CreateAuthDto = CreateAuthDto;
//# sourceMappingURL=create_auth.dto.js.map