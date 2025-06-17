"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantOwnerEntity = void 0;
const openapi = require("@nestjs/swagger");
class RestaurantOwnerEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { restaurant_owner_id: { required: true, type: () => String }, user_id: { required: true, type: () => String }, restaurant_id: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date } };
    }
}
exports.RestaurantOwnerEntity = RestaurantOwnerEntity;
//# sourceMappingURL=restaurantOwner.entity.js.map