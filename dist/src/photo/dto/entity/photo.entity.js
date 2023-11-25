"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoEntity = void 0;
const openapi = require("@nestjs/swagger");
class PhotoEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { photo_id: { required: true, type: () => String }, review_id: { required: true, type: () => String }, photo_category_id: { required: true, type: () => String }, photo_url: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date } };
    }
}
exports.PhotoEntity = PhotoEntity;
//# sourceMappingURL=photo.entity.js.map