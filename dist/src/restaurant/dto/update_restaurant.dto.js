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
exports.UpdateRestaurantDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class UpdateRestaurantDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: false, type: () => String }, address: { required: false, type: () => String }, district_id: { required: false, type: () => String }, latitude: { required: false, type: () => Number }, longitude: { required: false, type: () => Number }, postal_code: { required: false, type: () => String }, phone: { required: false, type: () => String }, intro: { required: false, type: () => String }, opening_hours: { required: false, type: () => String }, cover_image_url: { required: false, type: () => String }, active: { required: false, type: () => Boolean } };
    }
}
exports.UpdateRestaurantDto = UpdateRestaurantDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'name of the restaurant', type: String }),
    __metadata("design:type", String)
], UpdateRestaurantDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'address of the restaurant',
        type: String,
    }),
    __metadata("design:type", String)
], UpdateRestaurantDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The foreign key (UUID, district_id) of the restaurant',
        type: String,
    }),
    __metadata("design:type", String)
], UpdateRestaurantDto.prototype, "district_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'latitude of the restaurant',
        type: Number,
    }),
    __metadata("design:type", Number)
], UpdateRestaurantDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'longitude of the restaurant',
        type: Number,
    }),
    __metadata("design:type", Number)
], UpdateRestaurantDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'postal code of the restaurant',
        type: String,
    }),
    __metadata("design:type", String)
], UpdateRestaurantDto.prototype, "postal_code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'phone number of the restaurant',
        type: String,
    }),
    __metadata("design:type", String)
], UpdateRestaurantDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'introduction of the restaurant',
        type: String,
    }),
    __metadata("design:type", String)
], UpdateRestaurantDto.prototype, "intro", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'opening hour of the restaurant',
        type: String,
    }),
    __metadata("design:type", String)
], UpdateRestaurantDto.prototype, "opening_hours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'cover image url of the restaurant',
        type: String,
    }),
    __metadata("design:type", String)
], UpdateRestaurantDto.prototype, "cover_image_url", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'active status of the restaurant',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], UpdateRestaurantDto.prototype, "active", void 0);
//# sourceMappingURL=update_restaurant.dto.js.map