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
exports.SubscribeService = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
let SubscribeService = class SubscribeService {
    constructor(knex) {
        this.knex = knex;
    }
    async getSubscribes() {
        return await this.knex.select('*').from('subscribe');
    }
    async getSubscribeByID(id) {
        return await this.knex
            .select('*')
            .from('subscribe')
            .where('subscribe_id', id);
    }
    async createSubscribe(subscribe) {
        return await this.knex
            .insert({
            ...subscribe,
            created_at: new Date(),
            modified_at: new Date(),
            active: true,
        })
            .into('subscribe')
            .returning('*');
    }
    async deleteSubscribe(id) {
        return await this.knex('subscribe')
            .update({ active: false, modified_at: new Date() })
            .where('subscribe_id', id)
            .returning('*');
    }
};
exports.SubscribeService = SubscribeService;
exports.SubscribeService = SubscribeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('KnexConnection')),
    __metadata("design:paramtypes", [Function])
], SubscribeService);
//# sourceMappingURL=subscribe.service.js.map