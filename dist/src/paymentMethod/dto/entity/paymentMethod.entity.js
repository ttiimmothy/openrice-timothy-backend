"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodEntity = void 0;
const openapi = require("@nestjs/swagger");
class PaymentMethodEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { payment_method_id: { required: true, type: () => String }, name: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date } };
    }
}
exports.PaymentMethodEntity = PaymentMethodEntity;
//# sourceMappingURL=paymentMethod.entity.js.map