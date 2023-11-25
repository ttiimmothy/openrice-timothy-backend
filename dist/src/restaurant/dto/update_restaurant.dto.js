"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRestaurantDto = void 0;
const openapi = require("@nestjs/swagger");
class UpdateRestaurantDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: false, type: () => String }, address: { required: false, type: () => String }, district_id: { required: false, type: () => String }, latitude: { required: false, type: () => Number }, longitude: { required: false, type: () => Number }, postal_code: { required: false, type: () => String }, phone: { required: false, type: () => String }, intro: { required: false, type: () => String }, opening_hours: { required: false, type: () => String }, cover_image_url: { required: false, type: () => String }, active: { required: false, type: () => Boolean } };
    }
}
exports.UpdateRestaurantDto = UpdateRestaurantDto;
//# sourceMappingURL=update_restaurant.dto.js.map