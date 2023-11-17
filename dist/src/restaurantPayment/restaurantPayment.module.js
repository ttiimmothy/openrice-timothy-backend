"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantPaymentModule = void 0;
const common_1 = require("@nestjs/common");
const knex_module_1 = require("../global/modules/knex.module");
const restaurantPayment_controller_1 = require("./restaurantPayment.controller");
const restaurantPayment_service_1 = require("./restaurantPayment.service");
let RestaurantPaymentModule = class RestaurantPaymentModule {
};
exports.RestaurantPaymentModule = RestaurantPaymentModule;
exports.RestaurantPaymentModule = RestaurantPaymentModule = __decorate([
    (0, common_1.Module)({
        imports: [knex_module_1.KnexModule],
        controllers: [restaurantPayment_controller_1.RestaurantPaymentController],
        providers: [restaurantPayment_service_1.RestaurantPaymentService],
    })
], RestaurantPaymentModule);
//# sourceMappingURL=restaurantPayment.module.js.map