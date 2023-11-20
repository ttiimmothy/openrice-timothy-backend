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
exports.PhotoController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const photo_service_1 = require("./photo.service");
const create_photo_dto_1 = require("./dto/create_photo.dto");
const swagger_1 = require("@nestjs/swagger");
let PhotoController = class PhotoController {
    constructor(photoService) {
        this.photoService = photoService;
    }
    async getPhotos() {
        return await this.photoService.getPhotos();
    }
    async getPhotoByID(params) {
        return (await this.photoService.getPhotoByID(params.photo_id))[0];
    }
    async createPhoto(createPhotoDto) {
        return (await this.photoService.createPhoto(createPhotoDto))[0];
    }
    async deletePhoto(params) {
        const photoFound = await this.photoService.getPhotoByID(params.photo_id);
        if (photoFound) {
            return (await this.photoService.deletePhoto(params.photo_id))[0];
        }
        else {
            return { message: 'This photo cannot be found' };
        }
    }
};
exports.PhotoController = PhotoController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./dto/entity/photo.entity").PhotoEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "getPhotos", null);
__decorate([
    (0, common_1.Get)(':photo_id'),
    (0, swagger_1.ApiParam)({ name: 'photo_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/photo.entity").PhotoEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "getPhotoByID", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./dto/entity/photo.entity").PhotoEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_photo_dto_1.CreatePhotoDto]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "createPhoto", null);
__decorate([
    (0, common_1.Delete)(':photo_id'),
    (0, swagger_1.ApiParam)({ name: 'photo_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "deletePhoto", null);
exports.PhotoController = PhotoController = __decorate([
    (0, swagger_1.ApiTags)('photo'),
    (0, common_1.Controller)('api/photo'),
    __metadata("design:paramtypes", [photo_service_1.PhotoService])
], PhotoController);
//# sourceMappingURL=photo.controller.js.map