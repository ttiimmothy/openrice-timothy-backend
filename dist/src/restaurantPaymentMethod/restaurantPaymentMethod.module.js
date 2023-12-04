"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantPaymentMethodModule = void 0;
const common_1 = require("@nestjs/common");
const restaurantPaymentMethod_controller_1 = require("./restaurantPaymentMethod.controller");
const restaurantPaymentMethod_service_1 = require("./restaurantPaymentMethod.service");
let RestaurantPaymentMethodModule = class RestaurantPaymentMethodModule {
};
exports.RestaurantPaymentMethodModule = RestaurantPaymentMethodModule;
exports.RestaurantPaymentMethodModule = RestaurantPaymentMethodModule = __decorate([
    (0, common_1.Module)({
        controllers: [restaurantPaymentMethod_controller_1.RestaurantPaymentMethodController],
        providers: [restaurantPaymentMethod_service_1.RestaurantPaymentMethodService],
    })
], RestaurantPaymentMethodModule);
//# sourceMappingURL=restaurantPaymentMethod.module.js.map