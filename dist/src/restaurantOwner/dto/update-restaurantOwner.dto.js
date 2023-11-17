"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRestaurantOwnerDto = void 0;
const openapi = require("@nestjs/swagger");
class UpdateRestaurantOwnerDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_id: { required: false, type: () => String }, restaurant_id: { required: false, type: () => String }, active: { required: false, type: () => Boolean } };
    }
}
exports.UpdateRestaurantOwnerDto = UpdateRestaurantOwnerDto;
//# sourceMappingURL=update-restaurantOwner.dto.js.map