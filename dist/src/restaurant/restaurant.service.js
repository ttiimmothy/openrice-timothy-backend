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
exports.RestaurantService = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
let RestaurantService = class RestaurantService {
    constructor(knex) {
        this.knex = knex;
    }
    async getRestaurants(limit, offset) {
        if (limit) {
            return await this.knex
                .select('*')
                .from('restaurant')
                .limit(limit)
                .offset(offset);
        }
        else {
            return await this.knex.select('*').from('restaurant').offset(offset);
        }
    }
    async getRestaurantsByDish(dish) {
        return await this.knex
            .select('restaurant.*')
            .from('restaurant')
            .leftOuterJoin('restaurant_dish', 'restaurant.restaurant_id', 'restaurant_dish.restaurant_id')
            .leftOuterJoin('dish', 'restaurant_dish.dish_id', 'dish.dish_id')
            .where('dish.name', dish);
    }
    async getRestaurantByID(id) {
        return await this.knex
            .select('*')
            .from('restaurant')
            .where('restaurant_id', id);
    }
    async createRestaurant(restaurant, fileExtension) {
        const restaurantDetail = await this.knex
            .insert({
            ...restaurant,
            created_at: new Date(),
            modified_at: new Date(),
            active: true,
        })
            .into('restaurant')
            .returning('*');
        if (fileExtension) {
            return await this.knex('restaurant')
                .update({
                cover_image_url: `${process.env.IMAGE_PREFIX}/restaurant/${restaurantDetail[0].restaurant_id}/cover_image_url.${fileExtension}`,
                modified_at: new Date(),
            })
                .where('restaurant_id', restaurantDetail[0].restaurant_id)
                .returning('*');
        }
        return restaurantDetail;
    }
    async updateRestaurant(id, restaurant) {
        return await this.knex('restaurant')
            .update({ ...restaurant, modified_at: new Date() })
            .where('restaurant_id', id)
            .returning('*');
    }
    async deleteRestaurant(id) {
        return await this.knex('restaurant')
            .update({ active: false, modified_at: new Date() })
            .where('restaurant_id', id)
            .returning('*');
    }
    async getAverageRating(id) {
        const totalRating = (await this.knex('review').sum('rating').where('restaurant_id', id))[0].sum;
        const ratingCount = (await this.knex('review').count('rating').where('restaurant_id', id))[0].count;
        return parseInt(totalRating) / parseInt(ratingCount);
    }
    async getReviewCount(id) {
        return (await this.knex('review').count('rating').where('restaurant_id', id))[0].count;
    }
};
exports.RestaurantService = RestaurantService;
exports.RestaurantService = RestaurantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('KnexConnection')),
    __metadata("design:paramtypes", [Function])
], RestaurantService);
//# sourceMappingURL=restaurant.service.js.map