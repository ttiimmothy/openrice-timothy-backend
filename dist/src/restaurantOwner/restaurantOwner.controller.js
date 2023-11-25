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
exports.RestaurantOwnerController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_restaurant_owner_dto_1 = require("./dto/create_restaurant_owner.dto");
const update_restaurant_owner_dto_1 = require("./dto/update_restaurant_owner.dto");
const restaurantOwner_service_1 = require("./restaurantOwner.service");
const swagger_1 = require("@nestjs/swagger");
let RestaurantOwnerController = class RestaurantOwnerController {
    constructor(restaurantOwnerService) {
        this.restaurantOwnerService = restaurantOwnerService;
    }
    async getRestaurantOwners() {
        return await this.restaurantOwnerService.getRestaurantOwners();
    }
    async getRestaurantOwnerByID(params) {
        return (await this.restaurantOwnerService.getRestaurantOwnerByID(params.restaurant_owner_id))[0];
    }
    async createRestaurantOwner(createRestaurantOwnerDto) {
        return (await this.restaurantOwnerService.createRestaurantOwner(createRestaurantOwnerDto))[0];
    }
    async updateRestaurantOwner(params, updateRestaurantOwnerDto) {
        const restaurantOwnerFound = await this.restaurantOwnerService.getRestaurantOwnerByID(params.restaurant_owner_id);
        if (restaurantOwnerFound) {
            return (await this.restaurantOwnerService.updateRestaurantOwner(params.restaurant_owner_id, updateRestaurantOwnerDto))[0];
        }
        else {
            return { message: 'This restaurant owner cannot be found' };
        }
    }
    async deleteRestaurantOwner(params) {
        const restaurantOwnerFound = await this.restaurantOwnerService.getRestaurantOwnerByID(params.restaurant_owner_id);
        if (restaurantOwnerFound) {
            return (await this.restaurantOwnerService.deleteRestaurantOwner(params.restaurant_owner_id))[0];
        }
        else {
            return { message: 'This restaurant owner cannot be found' };
        }
    }
};
exports.RestaurantOwnerController = RestaurantOwnerController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./dto/entity/restaurantOwner.enttiy").RestaurantOwnerEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantOwnerController.prototype, "getRestaurantOwners", null);
__decorate([
    (0, common_1.Get)('id/:restaurant_owner_id'),
    (0, swagger_1.ApiParam)({ name: 'restaurant_owner_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/restaurantOwner.enttiy").RestaurantOwnerEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestaurantOwnerController.prototype, "getRestaurantOwnerByID", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./dto/entity/restaurantOwner.enttiy").RestaurantOwnerEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_restaurant_owner_dto_1.CreateRestaurantOwnerDto]),
    __metadata("design:returntype", Promise)
], RestaurantOwnerController.prototype, "createRestaurantOwner", null);
__decorate([
    (0, common_1.Put)('id/:restaurant_owner_id'),
    (0, swagger_1.ApiParam)({ name: 'restaurant_owner_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_restaurant_owner_dto_1.UpdateRestaurantOwnerDto]),
    __metadata("design:returntype", Promise)
], RestaurantOwnerController.prototype, "updateRestaurantOwner", null);
__decorate([
    (0, common_1.Delete)('id/:restaurant_owner_id'),
    (0, swagger_1.ApiParam)({ name: 'restaurant_owner_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RestaurantOwnerController.prototype, "deleteRestaurantOwner", null);
exports.RestaurantOwnerController = RestaurantOwnerController = __decorate([
    (0, swagger_1.ApiTags)('restaurant owner'),
    (0, common_1.Controller)('api/restaurant/owner'),
    __metadata("design:paramtypes", [restaurantOwner_service_1.RestaurantOwnerService])
], RestaurantOwnerController);
//# sourceMappingURL=restaurantOwner.controller.js.map