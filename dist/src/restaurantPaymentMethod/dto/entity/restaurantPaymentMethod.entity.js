"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantPaymentMethodEntity = void 0;
const openapi = require("@nestjs/swagger");
class RestaurantPaymentMethodEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { restaurant_payment_method_id: { required: true, type: () => String }, restaurant_id: { required: true, type: () => String }, payment_method_id: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date } };
    }
}
exports.RestaurantPaymentMethodEntity = RestaurantPaymentMethodEntity;
//# sourceMappingURL=restaurantPaymentMethod.entity.js.map