"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRestaurantDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateRestaurantDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, address: { required: true, type: () => String }, district_id: { required: true, type: () => String }, latitude: { required: true, type: () => Number }, longitude: { required: true, type: () => Number }, postal_code: { required: true, type: () => String }, phone: { required: true, type: () => String }, intro: { required: true, type: () => String }, opening_hours: { required: true, type: () => String }, cover_image: { required: false, type: () => String } };
    }
}
exports.CreateRestaurantDto = CreateRestaurantDto;
//# sourceMappingURL=create_restaurant.dto.js.map