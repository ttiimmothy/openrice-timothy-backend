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
exports.SubscribeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const subscribe_service_1 = require("./subscribe.service");
const create_subscribe_dto_1 = require("./dto/create_subscribe.dto");
const swagger_1 = require("@nestjs/swagger");
let SubscribeController = class SubscribeController {
    constructor(subscribeService) {
        this.subscribeService = subscribeService;
    }
    async getSubscribes() {
        return await this.subscribeService.getSubscribes();
    }
    async getSubscribeByID(params) {
        return (await this.subscribeService.getSubscribeByID(params.subscribe_id))[0];
    }
    async createSubscribe(createSubscribeDto) {
        return (await this.subscribeService.createSubscribe(createSubscribeDto))[0];
    }
    async deleteSubscribe(params) {
        const subscribeFound = await this.subscribeService.getSubscribeByID(params.subscribe_id);
        if (subscribeFound) {
            return (await this.subscribeService.deleteSubscribe(params.subscribe_id))[0];
        }
        else {
            return { message: 'This restaurant subscription cannot be found' };
        }
    }
};
exports.SubscribeController = SubscribeController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./dto/entity/subscribe.entity").SubscribeEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubscribeController.prototype, "getSubscribes", null);
__decorate([
    (0, common_1.Get)('id/:subscribe_id'),
    (0, swagger_1.ApiParam)({ name: 'subscribe_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/subscribe.entity").SubscribeEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubscribeController.prototype, "getSubscribeByID", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./dto/entity/subscribe.entity").SubscribeEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subscribe_dto_1.CreateSubscribeDto]),
    __metadata("design:returntype", Promise)
], SubscribeController.prototype, "createSubscribe", null);
__decorate([
    (0, common_1.Delete)('id/:subscribe_id'),
    (0, swagger_1.ApiParam)({ name: 'subscribe_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubscribeController.prototype, "deleteSubscribe", null);
exports.SubscribeController = SubscribeController = __decorate([
    (0, swagger_1.ApiTags)('subscribe'),
    (0, common_1.Controller)('api/subscribe'),
    __metadata("design:paramtypes", [subscribe_service_1.SubscribeService])
], SubscribeController);
//# sourceMappingURL=subscribe.controller.js.map