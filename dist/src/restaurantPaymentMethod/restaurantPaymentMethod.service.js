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
exports.RestaurantPaymentMethodService = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
let RestaurantPaymentMethodService = class RestaurantPaymentMethodService {
    constructor(knex) {
        this.knex = knex;
    }
    async getRestaurantPaymentMethods() {
        return await this.knex.select('*').from('restaurant_payment_method');
    }
    async getRestaurantPaymentMethodByID(id) {
        return await this.knex
            .select('*')
            .from('restaurant_payment_method')
            .where('restaurant_payment_method_id', id);
    }
    async createRestaurantPaymentMethod(restaurantPaymentMethod) {
        return await this.knex
            .insert({
            ...restaurantPaymentMethod,
            created_at: new Date(),
            active: true,
        })
            .into('restaurant_payment_method')
            .returning('*');
    }
    async deleteRestaurantPaymentMethod(id) {
        return await this.knex('restaurant_payment_method')
            .update({ active: false })
            .where('restaurant_payment_method_id', id)
            .returning('*');
    }
};
exports.RestaurantPaymentMethodService = RestaurantPaymentMethodService;
exports.RestaurantPaymentMethodService = RestaurantPaymentMethodService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('KnexConnection')),
    __metadata("design:paramtypes", [Function])
], RestaurantPaymentMethodService);
//# sourceMappingURL=restaurantPaymentMethod.service.js.map