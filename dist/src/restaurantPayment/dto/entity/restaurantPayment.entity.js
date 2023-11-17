"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantPaymentEntity = void 0;
const openapi = require("@nestjs/swagger");
class RestaurantPaymentEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { restaurant_payment_id: { required: true, type: () => String }, restaurant_id: { required: true, type: () => String }, payment_method_id: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date } };
    }
}
exports.RestaurantPaymentEntity = RestaurantPaymentEntity;
//# sourceMappingURL=restaurantPayment.entity.js.map