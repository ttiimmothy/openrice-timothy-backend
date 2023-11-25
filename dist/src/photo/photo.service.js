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
exports.PhotoService = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
let PhotoService = class PhotoService {
    constructor(knex) {
        this.knex = knex;
    }
    async getPhotos() {
        return await this.knex.select('*').from('review_photo');
    }
    async getPhotoByID(id) {
        const reviewPhoto = await this.knex
            .select('*')
            .from('review_photo')
            .where('review_photo_id', id);
        const menuPhoto = await this.knex
            .select('*')
            .from('menu_photo')
            .where('menu_photo_id', id);
        if (reviewPhoto.length > 0) {
            return reviewPhoto;
        }
        else {
            return menuPhoto;
        }
    }
    async getReviewPhotos(id) {
        return await this.knex
            .select('*')
            .from('review_photo')
            .leftOuterJoin('review', 'review_photo.review_id', 'review.review_id')
            .andWhere('review.restaurant_id', id)
            .andWhere('review_photo.active', true);
    }
    async getMenuPhotos(id) {
        return await this.knex
            .select('*')
            .from('menu_photo')
            .leftOuterJoin('restaurant', 'menu_photo.restaurant_id', 'restaurant.restaurant_id')
            .andWhere('menu_photo.restaurant_id', id)
            .andWhere('menu_photo.active', true);
    }
    async createPhoto(photo, photo_category_id, photoCategory) {
        if (photo.restaurantID && photo.imageName) {
            return await this.knex
                .insert({
                photo_category_id,
                restaurant_id: photo.restaurantID,
                photo_url: `${process.env.IMAGE_PREFIX}/${photo.restaurantID}/${photoCategory.toLowerCase()}s/${photo.imageName}`,
                created_at: new Date(),
                active: true,
            })
                .into('menu_photo')
                .returning('*');
        }
    }
    async deletePhoto(id) {
        return await this.knex('review_photo')
            .update({ active: false })
            .where('review_photo_id', id)
            .returning('*');
    }
    async getPhotoCategoryID(photoCategoryName) {
        return await this.knex
            .select('photo_category_id')
            .from('photo_category')
            .where('name', photoCategoryName);
    }
};
exports.PhotoService = PhotoService;
exports.PhotoService = PhotoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('KnexConnection')),
    __metadata("design:paramtypes", [Function])
], PhotoService);
//# sourceMappingURL=photo.service.js.map