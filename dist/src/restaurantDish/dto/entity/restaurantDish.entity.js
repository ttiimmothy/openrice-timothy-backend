"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantDishEntity = void 0;
const openapi = require("@nestjs/swagger");
class RestaurantDishEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { restaurant_dish_id: { required: true, type: () => String }, restaurant_id: { required: true, type: () => String }, dish_id: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date } };
    }
}
exports.RestaurantDishEntity = RestaurantDishEntity;
//# sourceMappingURL=restaurantDish.entity.js.map