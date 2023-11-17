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
exports.RestaurantPaymentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const restaurantPayment_service_1 = require("./restaurantPayment.service");
const create_restaurantPayment_dto_1 = require("./dto/create-restaurantPayment.dto");
const swagger_1 = require("@nestjs/swagger");
let RestaurantPaymentController = class RestaurantPaymentController {
    constructor(restaurantPaymentService) {
        this.restaurantPaymentService = restaurantPaymentService;
    }
    async getRestaurantPayments() {
        return await this.restaurantPaymentService.getRestaurantPayments();
    }
    async getRestaurantPaymentByID(params) {
        return (await this.restaurantPaymentService.getRestaurantPaymentByID(params.restaurant_payment_id))[0];
    }
    async createRestaurantPayment(createRestaurantPaymentDto) {
        return (await this.restaurantPaymentService.createRestaurantPayment(createRestaurantPaymentDto))[0];
    }
    async deleteRestaurantPayment(params) {
        const restaurantPaymentFound = await this.restaurantPaymentService.getRestaurantPaymentByID(params.restaurant_payment_id);
        if (restaurantPaymentFound) {
            return (await this.restaurantPaymentService.deleteRestaurantPayment(params.restaurant_payment_id))[0];
        }
        else {
            throw new common_1.NotFoundException('Bad request', {
                cause: new Error(),
                description: 'This restaurant payment method cannot be found',
            });
        }
    }
};
exports.RestaurantPaymentController = RestaurantPaymentController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./dto/entity/restaurantPayment.entity").RestaurantPaymentEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantPaymentController.prototype, "getRestaurantPayments", null);
__decorate([
    (0, common_1.Get)(':restaurant_payment_id'),
    (0, swagger_1.ApiParam)({ name: 'restaurant_payment_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/restaurantPayment.entity").RestaurantPaymentEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestaurantPaymentController.prototype, "getRestaurantPaymentByID", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./dto/entity/restaurantPayment.entity").RestaurantPaymentEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_restaurantPayment_dto_1.CreateRestaurantPaymentDto]),
    __metadata("design:returntype", Promise)
], RestaurantPaymentController.prototype, "createRestaurantPayment", null);
__decorate([
    (0, common_1.Delete)(':restaurant_payment_id'),
    (0, swagger_1.ApiParam)({ name: 'restaurant_payment_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/restaurantPayment.entity").RestaurantPaymentEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestaurantPaymentController.prototype, "deleteRestaurantPayment", null);
exports.RestaurantPaymentController = RestaurantPaymentController = __decorate([
    (0, swagger_1.ApiTags)('restaurant payment'),
    (0, common_1.Controller)('api/restaurant-payment'),
    __metadata("design:paramtypes", [restaurantPayment_service_1.RestaurantPaymentService])
], RestaurantPaymentController);
//# sourceMappingURL=restaurantPayment.controller.js.map