"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRestaurantPaymentDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class CreateRestaurantPaymentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { restaurant_id: { required: true, type: () => String }, payment_method_id: { required: true, type: () => String } };
    }
}
exports.CreateRestaurantPaymentDto = CreateRestaurantPaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The foreign key (UUID, restaurant_id) from restaurant table',
        type: String,
    }),
    __metadata("design:type", String)
], CreateRestaurantPaymentDto.prototype, "restaurant_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The foreign key (UUID, payment_method_id) from payment method table',
        type: String,
    }),
    __metadata("design:type", String)
], CreateRestaurantPaymentDto.prototype, "payment_method_id", void 0);
//# sourceMappingURL=create_restaurant_payment.dto.js.map