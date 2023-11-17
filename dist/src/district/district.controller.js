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
exports.DistrictController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const district_service_1 = require("./district.service");
const swagger_1 = require("@nestjs/swagger");
let DistrictController = class DistrictController {
    constructor(districtService) {
        this.districtService = districtService;
    }
    async getDistricts() {
        return await this.districtService.getDistricts();
    }
    async getDistrictByID(params) {
        return (await this.districtService.getDistrictByID(params.district_id))[0];
    }
};
exports.DistrictController = DistrictController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./dto/entity/district.entity").DistrictEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DistrictController.prototype, "getDistricts", null);
__decorate([
    (0, common_1.Get)(':district_id'),
    (0, swagger_1.ApiParam)({ name: 'district_id', required: true, type: String }),
    openapi.ApiResponse({ status: 200, type: require("./dto/entity/district.entity").DistrictEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DistrictController.prototype, "getDistrictByID", null);
exports.DistrictController = DistrictController = __decorate([
    (0, swagger_1.ApiTags)('district'),
    (0, common_1.Controller)('api/district'),
    __metadata("design:paramtypes", [district_service_1.DistrictService])
], DistrictController);
//# sourceMappingURL=district.controller.js.map