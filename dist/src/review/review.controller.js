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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const update_review_dto_1 = require("./dto/update-review.dto");
const create_review_dto_1 = require("./dto/create-review.dto");
const review_service_1 = require("./review.service");
const swagger_1 = require("@nestjs/swagger");
let ReviewController = class ReviewController {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    async getReviews() {
        const reviews = await this.reviewService.getReviews();
        return Promise.all(reviews.map(async (review) => ({
            ...review,
            username: (await this.reviewService.getReviewerName(review.user_id))[0]
                .username,
            restaurantName: (await this.reviewService.getReviewRestaurantName(review.restaurant_id))[0].name,
        })));
    }
    async getReviewByID(params) {
        const review = (await this.reviewService.getReviewByID(params.review_id))[0];
        return {
            ...review,
            username: (await this.reviewService.getReviewerName(review.user_id))[0]
                .username,
            restaurantName: (await this.reviewService.getReviewRestaurantName(review.restaurant_id))[0].name,
        };
    }
    async createReview(createReviewDto) {
        return (await this.reviewService.createReview(createReviewDto))[0];
    }
    async updateReview(params, updateReviewDto) {
        const reviewFound = await this.reviewService.getReviewByID(params.review_id);
        if (reviewFound) {
            return (await this.reviewService.updateReview(params.review_id, updateReviewDto))[0];
        }
        else {
            throw new common_1.NotFoundException('Bad request', {
                cause: new Error(),
                description: 'This review cannot be found',
            });
        }
    }
    async deleteReview(params) {
        const reviewFound = await this.reviewService.getReviewByID(params.review_id);
        if (reviewFound) {
            return (await this.reviewService.deleteReview(params.review_id))[0];
        }
        else {
            throw new common_1.NotFoundException('Bad request', {
                cause: new Error(),
                description: 'This review cannot be found',
            });
        }
    }
};
exports.ReviewController = ReviewController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./dto/entity/review.entity").ReviewEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getReviews", null);
__decorate([
    (0, common_1.Get)(':review_id'),
    (0, swagger_1.ApiParam)({ name: 'review_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/review.entity").ReviewEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getReviewByID", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.CreateReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "createReview", null);
__decorate([
    (0, common_1.Put)(':review_id'),
    (0, swagger_1.ApiParam)({ name: 'review_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/review.entity").ReviewEntity }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_review_dto_1.UpdateReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "updateReview", null);
__decorate([
    (0, common_1.Delete)(':review_id'),
    (0, swagger_1.ApiParam)({ name: 'review_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/review.entity").ReviewEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "deleteReview", null);
exports.ReviewController = ReviewController = __decorate([
    (0, swagger_1.ApiTags)('review'),
    (0, common_1.Controller)('api/review'),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewController);
//# sourceMappingURL=review.controller.js.map