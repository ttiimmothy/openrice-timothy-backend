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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
let UserService = class UserService {
    constructor(knex) {
        this.knex = knex;
    }
    async getUsers() {
        return await this.knex.select('*').from('user');
    }
    async getUserByID(id) {
        return await this.knex.select('*').from('user').where('user_id', id);
    }
    async createUser(user) {
        return await this.knex
            .insert({
            ...user,
            role: user.role ? user.role : 'User',
            active: true,
            created_at: new Date(),
            modified_at: new Date(),
        })
            .into('user')
            .returning('*');
    }
    async updateUser(id, user) {
        return await this.knex('user')
            .update({ ...user, modified_at: new Date() })
            .where('user_id', id)
            .returning('*');
    }
    async deleteUser(id) {
        return await this.knex('user')
            .update({ active: false, modified_at: new Date() })
            .where('user_id', id)
            .returning('*');
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('KnexConnection')),
    __metadata("design:paramtypes", [Function])
], UserService);
//# sourceMappingURL=user.service.js.map