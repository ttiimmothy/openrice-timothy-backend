"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./userRelated/user/user.module");
const restaurant_module_1 = require("./restaurant/restaurant.module");
const dish_module_1 = require("./dish/dish.module");
const restaurantDish_module_1 = require("./restaurantDish/restaurantDish.module");
const photo_module_1 = require("./photo/photo.module");
const restaurantOwner_module_1 = require("./restaurantOwner/restaurantOwner.module");
const restaurantPayment_module_1 = require("./restaurantPayment/restaurantPayment.module");
const review_module_1 = require("./review/review.module");
const subscribe_module_1 = require("./subscribe/subscribe.module");
const district_module_1 = require("./district/district.module");
const photoCategory_module_1 = require("./photoCategory/photoCategory.module");
const auth_module_1 = require("./userRelated/auth/auth.module");
const paymentMethod_module_1 = require("./paymentMethod/paymentMethod.module");
const knex_module_1 = require("./global/modules/knex.module");
const csp_module_1 = require("./global/csp/csp.module");
const static_module_1 = require("./global/static/static.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            csp_module_1.CspModule,
            static_module_1.StaticModule,
            knex_module_1.KnexModule,
            user_module_1.UserModule,
            restaurant_module_1.RestaurantModule,
            dish_module_1.DishModule,
            restaurantDish_module_1.RestaurantDishModule,
            district_module_1.DistrictModule,
            photo_module_1.PhotoModule,
            photoCategory_module_1.PhotoCategoryModule,
            restaurantDish_module_1.RestaurantDishModule,
            restaurantOwner_module_1.RestaurantOwnerModule,
            restaurantPayment_module_1.RestaurantPaymentModule,
            review_module_1.ReviewModule,
            subscribe_module_1.SubscribeModule,
            auth_module_1.AuthModule,
            paymentMethod_module_1.PaymentMethodModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map