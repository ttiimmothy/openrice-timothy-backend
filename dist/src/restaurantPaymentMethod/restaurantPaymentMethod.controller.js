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
exports.RestaurantPaymentMethodController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const restaurantPaymentMethod_service_1 = require("./restaurantPaymentMethod.service");
const create_restaurant_payment_method_dto_1 = require("./dto/create_restaurant_payment_method.dto");
const swagger_1 = require("@nestjs/swagger");
let RestaurantPaymentMethodController = class RestaurantPaymentMethodController {
    constructor(restaurantPaymentMethodService) {
        this.restaurantPaymentMethodService = restaurantPaymentMethodService;
    }
    async getRestaurantPaymentMethods() {
        return await this.restaurantPaymentMethodService.getRestaurantPaymentMethods();
    }
    async getRestaurantPaymentMethodByID(params) {
        return (await this.restaurantPaymentMethodService.getRestaurantPaymentMethodByID(params.restaurant_payment_method_id))[0];
    }
    async createRestaurantPaymentMethod(createRestaurantPaymentMethodDto) {
        const restaurantPaymentMethod = await this.restaurantPaymentMethodService.createRestaurantPaymentMethod(createRestaurantPaymentMethodDto);
        return restaurantPaymentMethod[0];
    }
    async deleteRestaurantPaymentMethod(params) {
        const restaurantPaymentMethodFound = await this.restaurantPaymentMethodService.getRestaurantPaymentMethodByID(params.restaurant_payment_method_id);
        if (restaurantPaymentMethodFound) {
            return (await this.restaurantPaymentMethodService.deleteRestaurantPaymentMethod(params.restaurant_payment_method_id))[0];
        }
        else {
            return { message: 'This restaurant payment method cannot be found' };
        }
    }
};
exports.RestaurantPaymentMethodController = RestaurantPaymentMethodController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./dto/entity/restaurantPaymentMethod.entity").RestaurantPaymentMethodEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantPaymentMethodController.prototype, "getRestaurantPaymentMethods", null);
__decorate([
    (0, common_1.Get)('id/:restaurant_payment_method_id'),
    (0, swagger_1.ApiParam)({
        name: 'restaurant_payment_method_id',
        required: true,
        type: String,
    }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/restaurantPaymentMethod.entity").RestaurantPaymentMethodEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestaurantPaymentMethodController.prototype, "getRestaurantPaymentMethodByID", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./dto/entity/restaurantPaymentMethod.entity").RestaurantPaymentMethodEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_restaurant_payment_method_dto_1.CreateRestaurantPaymentMethodDto]),
    __metadata("design:returntype", Promise)
], RestaurantPaymentMethodController.prototype, "createRestaurantPaymentMethod", null);
__decorate([
    (0, common_1.Delete)('id/:restaurant_payment_method_id'),
    (0, swagger_1.ApiParam)({
        name: 'restaurant_payment_method_id',
        required: true,
        type: String,
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestaurantPaymentMethodController.prototype, "deleteRestaurantPaymentMethod", null);
exports.RestaurantPaymentMethodController = RestaurantPaymentMethodController = __decorate([
    (0, swagger_1.ApiTags)('restaurant payment method'),
    (0, common_1.Controller)('api/restaurant/payment/method'),
    __metadata("design:paramtypes", [restaurantPaymentMethod_service_1.RestaurantPaymentMethodService])
], RestaurantPaymentMethodController);
//# sourceMappingURL=restaurantPaymentMethod.controller.js.map