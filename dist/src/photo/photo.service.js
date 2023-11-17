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
exports.PhotoService = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
let PhotoService = class PhotoService {
    constructor(knex) {
        this.knex = knex;
    }
    async getPhotos() {
        return await this.knex.select('*').from('photo');
    }
    async getPhotoByID(id) {
        return await this.knex.select('*').from('photo').where('photo_id', id);
    }
    async createPhoto(photo) {
        return await this.knex
            .insert({
            ...photo,
            created_at: new Date(),
            modified_at: new Date(),
            active: true,
        })
            .into('photo')
            .returning('*');
    }
    async deletePhoto(id) {
        return await this.knex('photo')
            .update({ active: false, modified_at: new Date() })
            .where('photo_id', id)
            .returning('*');
    }
};
exports.PhotoService = PhotoService;
exports.PhotoService = PhotoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('KnexConnection')),
    __metadata("design:paramtypes", [Function])
], PhotoService);
//# sourceMappingURL=photo.service.js.map