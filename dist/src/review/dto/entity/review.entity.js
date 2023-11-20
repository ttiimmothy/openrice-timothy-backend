"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewEntity = void 0;
const openapi = require("@nestjs/swagger");
class ReviewEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { review_id: { required: true, type: () => String }, user_id: { required: true, type: () => String }, restaurant_id: { required: true, type: () => String }, username: { required: false, type: () => String }, restaurantName: { required: false, type: () => String }, title: { required: true, type: () => String }, content: { required: true, type: () => String }, rating: { required: true, type: () => Number }, spending: { required: true, type: () => Number }, visited_date: { required: true, type: () => Date }, active: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date }, modified_at: { required: true, type: () => Date } };
    }
}
exports.ReviewEntity = ReviewEntity;
//# sourceMappingURL=review.entity.js.map