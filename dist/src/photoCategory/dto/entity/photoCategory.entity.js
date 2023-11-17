"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoCategoryEntity = void 0;
const openapi = require("@nestjs/swagger");
class PhotoCategoryEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { photo_category_id: { required: true, type: () => String }, name: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date } };
    }
}
exports.PhotoCategoryEntity = PhotoCategoryEntity;
//# sourceMappingURL=photoCategory.entity.js.map