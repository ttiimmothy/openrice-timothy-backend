"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishEntity = void 0;
const openapi = require("@nestjs/swagger");
class DishEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { dish_id: { required: true, type: () => String }, name: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, created_at: { required: true, type: () => Date } };
    }
}
exports.DishEntity = DishEntity;
//# sourceMappingURL=dish.entity.js.map