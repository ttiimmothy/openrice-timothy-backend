"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeEntity = void 0;
const openapi = require("@nestjs/swagger");
class SubscribeEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { subscribe_id: { required: true, type: () => String }, user_id: { required: true, type: () => String }, restaurant_id: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date } };
    }
}
exports.SubscribeEntity = SubscribeEntity;
//# sourceMappingURL=subscribe.entity.js.map