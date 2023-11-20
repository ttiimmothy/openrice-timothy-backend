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
exports.RestaurantDishController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const restaurantDish_service_1 = require("./restaurantDish.service");
const create_restaurant_dish_dto_1 = require("./dto/create_restaurant_dish.dto");
const swagger_1 = require("@nestjs/swagger");
let RestaurantDishController = class RestaurantDishController {
    constructor(restaurantDishService) {
        this.restaurantDishService = restaurantDishService;
    }
    async getRestaurantDishes() {
        return await this.restaurantDishService.getRestaurantDishes();
    }
    async getRestaurantDishByID(params) {
        return (await this.restaurantDishService.getRestaurantDishByID(params.restaurant_dish_id))[0];
    }
    async createRestaurantDish(createRestaurantDishDto) {
        return (await this.restaurantDishService.createRestaurantDish(createRestaurantDishDto))[0];
    }
    async deleteRestaurantDish(params) {
        const restaurantDishFound = await this.restaurantDishService.getRestaurantDishByID(params.restaurant_dish_id);
        if (restaurantDishFound) {
            return (await this.restaurantDishService.deleteRestaurantDish(params.restaurant_dish_id))[0];
        }
        else {
            return { message: 'This restaurant dish cannot be found' };
        }
    }
};
exports.RestaurantDishController = RestaurantDishController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./dto/entity/restaurantDish.entity").RestaurantDishEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantDishController.prototype, "getRestaurantDishes", null);
__decorate([
    (0, common_1.Get)(':restaurant_dish_id'),
    (0, swagger_1.ApiParam)({ name: 'restaurant_dish_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/restaurantDish.entity").RestaurantDishEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestaurantDishController.prototype, "getRestaurantDishByID", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./dto/entity/restaurantDish.entity").RestaurantDishEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_restaurant_dish_dto_1.CreateRestaurantDishDto]),
    __metadata("design:returntype", Promise)
], RestaurantDishController.prototype, "createRestaurantDish", null);
__decorate([
    (0, common_1.Delete)(':restaurant_dish_id'),
    (0, swagger_1.ApiParam)({ name: 'restaurant_dish_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestaurantDishController.prototype, "deleteRestaurantDish", null);
exports.RestaurantDishController = RestaurantDishController = __decorate([
    (0, swagger_1.ApiTags)('restaurant dish'),
    (0, common_1.Controller)('api/restaurant-dish'),
    __metadata("design:paramtypes", [restaurantDish_service_1.RestaurantDishService])
], RestaurantDishController);
//# sourceMappingURL=restaurantDish.controller.js.map