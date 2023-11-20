"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReviewDto = void 0;
const openapi = require("@nestjs/swagger");
class UpdateReviewDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_id: { required: false, type: () => String }, restaurant_id: { required: false, type: () => String }, title: { required: false, type: () => String }, content: { required: false, type: () => String }, rating: { required: false, type: () => Number }, spending: { required: false, type: () => Number }, visited_date: { required: false, type: () => Date }, active: { required: false, type: () => Boolean } };
    }
}
exports.UpdateReviewDto = UpdateReviewDto;
//# sourceMappingURL=update_review.dto.js.map