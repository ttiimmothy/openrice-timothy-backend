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
exports.PhotoCategoryController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const photoCategory_service_1 = require("./photoCategory.service");
const swagger_1 = require("@nestjs/swagger");
let PhotoCategoryController = class PhotoCategoryController {
    constructor(photoCategoryService) {
        this.photoCategoryService = photoCategoryService;
    }
    async getPhotoCategories() {
        return await this.photoCategoryService.getPhotoCategories();
    }
    async getPhotoCategoryByID(params) {
        return (await this.photoCategoryService.getPhotoCategoryByID(params.photo_category_id))[0];
    }
};
exports.PhotoCategoryController = PhotoCategoryController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./dto/entity/photoCategory.entity").PhotoCategoryEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhotoCategoryController.prototype, "getPhotoCategories", null);
__decorate([
    (0, common_1.Get)('id/:photo_category_id'),
    (0, swagger_1.ApiParam)({ name: 'photo_category_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/photoCategory.entity").PhotoCategoryEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PhotoCategoryController.prototype, "getPhotoCategoryByID", null);
exports.PhotoCategoryController = PhotoCategoryController = __decorate([
    (0, swagger_1.ApiTags)('photo category'),
    (0, common_1.Controller)('api/photo/category'),
    __metadata("design:paramtypes", [photoCategory_service_1.PhotoCategoryService])
], PhotoCategoryController);
//# sourceMappingURL=photoCategory.controller.js.map