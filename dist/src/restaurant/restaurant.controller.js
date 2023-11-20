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
exports.RestaurantController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_restaurant_dto_1 = require("./dto/create_restaurant.dto");
const update_restaurant_dto_1 = require("./dto/update_restaurant.dto");
const restaurant_service_1 = require("./restaurant.service");
const swagger_1 = require("@nestjs/swagger");
const UserRole_1 = require("../global/utils/enums/UserRole");
let RestaurantController = class RestaurantController {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    async getRestaurants(limit, offset, name) {
        let filterRestaurants;
        const restaurants = await this.restaurantService.getRestaurants(limit, offset);
        if (name) {
            filterRestaurants = restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(name.toLowerCase()));
            return Promise.all(filterRestaurants.map(async (restaurant) => ({
                ...restaurant,
                averageRating: await this.restaurantService.getAverageRating(restaurant.restaurant_id),
                reviewCount: await this.restaurantService.getReviewCount(restaurant.restaurant_id),
            })));
        }
        return Promise.all(restaurants.map(async (restaurant) => ({
            ...restaurant,
            averageRating: await this.restaurantService.getAverageRating(restaurant.restaurant_id),
            reviewCount: await this.restaurantService.getReviewCount(restaurant.restaurant_id),
        })));
    }
    async getRestaurantByID(params) {
        const restaurant = (await this.restaurantService.getRestaurantByID(params.restaurant_id))[0];
        return {
            ...restaurant,
            averageRating: await this.restaurantService.getAverageRating(restaurant.restaurant_id),
            reviewCount: await this.restaurantService.getReviewCount(restaurant.restaurant_id),
        };
    }
    async createRestaurant(createRestaurantDto) {
        return (await this.restaurantService.createRestaurant(createRestaurantDto))[0];
    }
    async updateRestaurant(params, updateRestaurantDto) {
        const restaurantFound = await this.restaurantService.getRestaurantByID(params.restaurant_id);
        if (restaurantFound) {
            return (await this.restaurantService.updateRestaurant(params.restaurant_id, updateRestaurantDto))[0];
        }
        else {
            return { message: 'This restaurant cannot be found' };
        }
    }
    async deleteRestaurant(params) {
        const restaurantFound = await this.restaurantService.getRestaurantByID(params.restaurant_id);
        if (restaurantFound) {
            return (await this.restaurantService.deleteRestaurant(params.restaurant_id))[0];
        }
        else {
            return { message: 'This restaurant cannot be found' };
        }
    }
};
exports.RestaurantController = RestaurantController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'offset', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'name', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'role', enum: UserRole_1.UserRole, required: false }),
    openapi.ApiResponse({ status: 200, type: [require("./dto/entity/restaurant.entity").RestaurantEntity] }),
    __param(0, (0, common_1.Query)('limit', new common_1.DefaultValuePipe('10'), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('offset', new common_1.DefaultValuePipe('0'), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('name', new common_1.DefaultValuePipe(''))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "getRestaurants", null);
__decorate([
    (0, common_1.Get)(':restaurant_id'),
    (0, swagger_1.ApiParam)({ name: 'restaurant_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/restaurant.entity").RestaurantEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "getRestaurantByID", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./dto/entity/restaurant.entity").RestaurantEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_restaurant_dto_1.CreateRestaurantDto]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "createRestaurant", null);
__decorate([
    (0, common_1.Put)(':restaurant_id'),
    (0, swagger_1.ApiParam)({ name: 'restaurant_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_restaurant_dto_1.UpdateRestaurantDto]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "updateRestaurant", null);
__decorate([
    (0, common_1.Delete)(':restaurant_id'),
    (0, swagger_1.ApiParam)({ name: 'restaurant_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "deleteRestaurant", null);
exports.RestaurantController = RestaurantController = __decorate([
    (0, swagger_1.ApiTags)('restaurant'),
    (0, common_1.Controller)('api/restaurant'),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
], RestaurantController);
//# sourceMappingURL=restaurant.controller.js.map