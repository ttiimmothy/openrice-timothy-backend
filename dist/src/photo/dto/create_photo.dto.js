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
exports.CreatePhotoDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class CreatePhotoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { photo_category_id: { required: false, type: () => String }, review_id: { required: false, type: () => String }, photo_url: { required: false, type: () => String }, restaurantID: { required: false, type: () => String }, imageName: { required: false, type: () => String } };
    }
}
exports.CreatePhotoDto = CreatePhotoDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The foreign key (UUID) from photo category table',
        type: String,
    }),
    __metadata("design:type", String)
], CreatePhotoDto.prototype, "photo_category_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The foreign key (UUID) from review table',
        type: String,
    }),
    __metadata("design:type", String)
], CreatePhotoDto.prototype, "review_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The url of photo',
        type: String,
    }),
    __metadata("design:type", String)
], CreatePhotoDto.prototype, "photo_url", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
    }),
    __metadata("design:type", String)
], CreatePhotoDto.prototype, "restaurantID", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
    }),
    __metadata("design:type", String)
], CreatePhotoDto.prototype, "imageName", void 0);
//# sourceMappingURL=create_photo.dto.js.map