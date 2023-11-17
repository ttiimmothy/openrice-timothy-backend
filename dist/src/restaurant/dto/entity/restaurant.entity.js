"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantEntity = void 0;
const openapi = require("@nestjs/swagger");
class RestaurantEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { restaurant_id: { required: true, type: () => String }, name: { required: true, type: () => String }, address: { required: true, type: () => String }, district_id: { required: true, type: () => String }, latitude: { required: true, type: () => Number }, longitude: { required: true, type: () => Number }, postal_code: { required: true, type: () => String }, phone: { required: true, type: () => String }, intro: { required: true, type: () => String }, opening_hours: { required: true, type: () => String }, cover_image: { required: false, type: () => String }, active: { required: true, type: () => Boolean }, averageRating: { required: true, type: () => Number }, reviewCount: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, modified_at: { required: true, type: () => Date } };
    }
}
exports.RestaurantEntity = RestaurantEntity;
//# sourceMappingURL=restaurant.entity.js.map