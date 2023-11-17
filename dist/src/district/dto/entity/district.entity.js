"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistrictEntity = void 0;
const openapi = require("@nestjs/swagger");
class DistrictEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { district_id: { required: true, type: () => String }, name: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date } };
    }
}
exports.DistrictEntity = DistrictEntity;
//# sourceMappingURL=district.entity.js.map