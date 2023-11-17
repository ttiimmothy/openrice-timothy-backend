"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReviewDto = void 0;
const openapi = require("@nestjs/swagger");
class UpdateReviewDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_id: { required: false, type: () => String }, restaurant_id: { required: false, type: () => String }, rating: { required: false, type: () => Number }, title: { required: false, type: () => String }, visited_date: { required: false, type: () => Date }, content: { required: false, type: () => String }, spending: { required: false, type: () => Number }, active: { required: false, type: () => Boolean } };
    }
}
exports.UpdateReviewDto = UpdateReviewDto;
//# sourceMappingURL=update-review.dto.js.map