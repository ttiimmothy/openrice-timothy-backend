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
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
let ReviewService = class ReviewService {
    constructor(knex) {
        this.knex = knex;
    }
    async getReviews() {
        return await this.knex.select('*').from('review');
    }
    async getReviewByID(id) {
        return await this.knex.select('*').from('review').where('review_id', id);
    }
    async createReview(review, restaurantID, photo_category_id, fileExtension) {
        const reviewDetail = await this.knex
            .insert({
            ...review,
            created_at: new Date(),
            modified_at: new Date(),
            active: true,
        })
            .into('review')
            .returning('*');
        if (fileExtension) {
            await this.knex
                .insert({
                photo_category_id,
                review_id: reviewDetail[0].review_id,
                photo_url: `${process.env.IMAGE_PREFIX}/${restaurantID}/photos/${reviewDetail[0].review_id}.${fileExtension}`,
            })
                .into('review_photo');
        }
        return reviewDetail;
    }
    async updateReview(id, review) {
        return await this.knex('review')
            .update({ ...review, modified_at: new Date() })
            .where('review_id', id)
            .returning('*');
    }
    async deleteReview(id) {
        return await this.knex('review')
            .update({ active: false, modified_at: new Date() })
            .where('review_id', id)
            .returning('*');
    }
    async getReviewerName(userID) {
        return await this.knex
            .select('username')
            .from('user')
            .where('user_id', userID);
    }
    async getReviewRestaurantName(restaurantID) {
        return await this.knex
            .select('name')
            .from('restaurant')
            .where('restaurant_id', restaurantID);
    }
    async getReviewPhoto(reviewID) {
        return await this.knex
            .select('photo_url')
            .from('review_photo')
            .where('review_id', reviewID);
    }
    async getPhotoCategoryID(photoCategoryName) {
        return await this.knex
            .select('photo_category_id')
            .from('photo_category')
            .where('name', photoCategoryName);
    }
};
exports.ReviewService = ReviewService;
exports.ReviewService = ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('KnexConnection')),
    __metadata("design:paramtypes", [Function])
], ReviewService);
//# sourceMappingURL=review.service.js.map