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
exports.CreateReviewDtoExtended = exports.CreateReviewDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class CreateReviewDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_id: { required: true, type: () => String }, restaurant_id: { required: true, type: () => String }, title: { required: true, type: () => String }, content: { required: true, type: () => String }, rating: { required: true, type: () => Number }, spending: { required: true, type: () => Number }, visited_date: { required: true, type: () => Date } };
    }
}
exports.CreateReviewDto = CreateReviewDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The foreign key (UUID, user_id) from user table',
        type: String,
    }),
    __metadata("design:type", String)
], CreateReviewDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The foreign key (UUID, restaurant_id) from restaurant table',
        type: String,
    }),
    __metadata("design:type", String)
], CreateReviewDto.prototype, "restaurant_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The title of the review',
        type: String,
    }),
    __metadata("design:type", String)
], CreateReviewDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The content of the review',
        type: String,
    }),
    __metadata("design:type", String)
], CreateReviewDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The rating of the restaurant in number',
        type: Number,
        minimum: 0,
        maximum: 5,
    }),
    __metadata("design:type", Number)
], CreateReviewDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The spending in the restaurant',
        type: Number,
    }),
    __metadata("design:type", Number)
], CreateReviewDto.prototype, "spending", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The visiting date to the restaurant',
        type: Date,
    }),
    __metadata("design:type", Date)
], CreateReviewDto.prototype, "visited_date", void 0);
class CreateReviewDtoExtended {
    static _OPENAPI_METADATA_FACTORY() {
        return { createReviewDto: { required: true, type: () => require("./create_review.dto").CreateReviewDto }, restaurantID: { required: true, type: () => String }, fileExtension: { required: false, type: () => String } };
    }
}
exports.CreateReviewDtoExtended = CreateReviewDtoExtended;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'create review dto', type: CreateReviewDto }),
    __metadata("design:type", CreateReviewDto)
], CreateReviewDtoExtended.prototype, "createReviewDto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'restaurant id (UUID)', type: String }),
    __metadata("design:type", String)
], CreateReviewDtoExtended.prototype, "restaurantID", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'file extension of the review photo',
        type: String,
    }),
    __metadata("design:type", String)
], CreateReviewDtoExtended.prototype, "fileExtension", void 0);
//# sourceMappingURL=create_review.dto.js.map