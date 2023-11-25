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
const swagger_1 = require("@nestjs/swagger");
const update_review_dto_1 = require("./dto/update_review.dto");
const create_review_dto_1 = require("./dto/create_review.dto");
const review_service_1 = require("./review.service");
let ReviewController = class ReviewController {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    async getReviews(restaurantID) {
        let reviewsFiltered;
        const reviews = await this.reviewService.getReviews();
        if (restaurantID) {
            reviewsFiltered = reviews.filter((review) => review.restaurant_id === restaurantID);
            return Promise.all(reviewsFiltered.map(async (review) => {
                return {
                    ...review,
                    username: (await this.reviewService.getReviewerName(review.user_id))[0].username,
                    restaurantName: (await this.reviewService.getReviewRestaurantName(review.restaurant_id))[0].name,
                    photo: (await this.reviewService.getReviewPhoto(review.review_id))[0]?.photo_url,
                };
            }));
        }
        return Promise.all(reviews.map(async (review) => ({
            ...review,
            username: (await this.reviewService.getReviewerName(review.user_id))[0]
                .username,
            restaurantName: (await this.reviewService.getReviewRestaurantName(review.restaurant_id))[0].name,
            photo: (await this.reviewService.getReviewPhoto(review.review_id))[0]
                ?.photo_url,
        })));
    }
    async getReviewByID(params) {
        const review = (await this.reviewService.getReviewByID(params.review_id))[0];
        return {
            ...review,
            username: (await this.reviewService.getReviewerName(review.user_id))[0]
                .username,
            restaurantName: (await this.reviewService.getReviewRestaurantName(review.restaurant_id))[0].name,
            photo: (await this.reviewService.getReviewPhoto(params.review_id))[0]
                ?.photo_url,
        };
    }
    async createReview(body, photoCategory) {
        const photoCategoryID = (await this.reviewService.getPhotoCategoryID(photoCategory))[0]?.photo_category_id;
        return (await this.reviewService.createReview(body.createReviewDto, body.restaurantID, photoCategoryID, body.fileExtension))[0];
    }
    async updateReview(params, updateReviewDto) {
        const reviewFound = await this.reviewService.getReviewByID(params.review_id);
        if (reviewFound) {
            return (await this.reviewService.updateReview(params.review_id, updateReviewDto))[0];
        }
        else {
            return { message: 'This review cannot be found' };
        }
    }
    async deleteReview(params) {
        const reviewFound = await this.reviewService.getReviewByID(params.review_id);
        if (reviewFound) {
            return (await this.reviewService.deleteReview(params.review_id))[0];
        }
        else {
            return { message: 'This review cannot be found' };
        }
    }
};
exports.ReviewController = ReviewController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'restaurantID', required: false }),
    openapi.ApiResponse({ status: 200, type: [require("./dto/entity/review.entity").ReviewEntity] }),
    __param(0, (0, common_1.Query)('restaurantID', new common_1.DefaultValuePipe(''))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getReviews", null);
__decorate([
    (0, common_1.Get)('id/:review_id'),
    (0, swagger_1.ApiParam)({ name: 'review_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/review.entity").ReviewEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getReviewByID", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiQuery)({ name: 'photoCategory', required: false }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('photoCategory', new common_1.DefaultValuePipe('Review'))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.CreateReviewDtoExtended, String]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "createReview", null);
__decorate([
    (0, common_1.Put)('id/:review_id'),
    (0, swagger_1.ApiParam)({ name: 'review_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_review_dto_1.UpdateReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "updateReview", null);
__decorate([
    (0, common_1.Delete)('id/:review_id'),
    (0, swagger_1.ApiParam)({ name: 'review_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: Object }),
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