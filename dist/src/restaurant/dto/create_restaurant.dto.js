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
exports.CreateRestaurantDtoExtended = exports.CreateRestaurantDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class CreateRestaurantDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, address: { required: true, type: () => String }, district_id: { required: true, type: () => String }, latitude: { required: true, type: () => Number }, longitude: { required: true, type: () => Number }, postal_code: { required: true, type: () => String }, phone: { required: true, type: () => String }, intro: { required: true, type: () => String }, opening_hours: { required: true, type: () => String }, cover_image_url: { required: false, type: () => String } };
    }
}
exports.CreateRestaurantDto = CreateRestaurantDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the restaurant',
        type: String,
    }),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The address of the restaurant',
        type: String,
    }),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The foreign key (UUID, district_id) from district table',
        type: String,
    }),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "district_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The latitude of the restaurant',
        type: Number,
    }),
    __metadata("design:type", Number)
], CreateRestaurantDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The longitude of the restaurant',
        type: Number,
    }),
    __metadata("design:type", Number)
], CreateRestaurantDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The postal code of the restaurant',
        type: String,
    }),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "postal_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The phone (string) of the restaurant',
        type: String,
    }),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The introduction of the restaurant',
        type: String,
    }),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "intro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The opening hours of the restaurant in JSON format',
        type: String,
    }),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "opening_hours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The url of cover image',
        type: String,
        required: false,
    }),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "cover_image_url", void 0);
class CreateRestaurantDtoExtended {
    static _OPENAPI_METADATA_FACTORY() {
        return { createRestaurantDto: { required: true, type: () => require("./create_restaurant.dto").CreateRestaurantDto }, fileExtension: { required: false, type: () => String } };
    }
}
exports.CreateRestaurantDtoExtended = CreateRestaurantDtoExtended;
__decorate([
    (0, swagger_1.ApiProperty)({ type: CreateRestaurantDto }),
    __metadata("design:type", CreateRestaurantDto)
], CreateRestaurantDtoExtended.prototype, "createRestaurantDto", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: String }),
    __metadata("design:type", String)
], CreateRestaurantDtoExtended.prototype, "fileExtension", void 0);
//# sourceMappingURL=create_restaurant.dto.js.map