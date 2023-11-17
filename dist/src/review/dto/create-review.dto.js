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
exports.CreateReviewDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class CreateReviewDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_id: { required: true, type: () => String }, restaurant_id: { required: true, type: () => String }, rating: { required: true, type: () => Number }, title: { required: true, type: () => String }, visited_date: { required: true, type: () => Date }, content: { required: true, type: () => String }, spending: { required: true, type: () => Number } };
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
        description: 'The rating of the restaurant in Integer',
        type: Number,
        minimum: 0,
        maximum: 5,
    }),
    __metadata("design:type", Number)
], CreateReviewDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The title of the review',
        type: String,
    }),
    __metadata("design:type", String)
], CreateReviewDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The visiting date to the restaurant',
        type: Date,
    }),
    __metadata("design:type", Date)
], CreateReviewDto.prototype, "visited_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The content of the review',
        type: String,
    }),
    __metadata("design:type", String)
], CreateReviewDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The spending in the restaurant',
        type: Number,
    }),
    __metadata("design:type", Number)
], CreateReviewDto.prototype, "spending", void 0);
//# sourceMappingURL=create-review.dto.js.map