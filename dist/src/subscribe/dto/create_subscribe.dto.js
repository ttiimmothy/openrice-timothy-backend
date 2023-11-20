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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubscribeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class CreateSubscribeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_id: { required: true, type: () => String }, restaurant_id: { required: true, type: () => String } };
    }
}
exports.CreateSubscribeDto = CreateSubscribeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The foreign key (UUID, user_id) from user table',
        type: String,
    }),
    __metadata("design:type", String)
], CreateSubscribeDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The foreign key (UUID, restaurant_id) from restaurant table',
        type: String,
    }),
    __metadata("design:type", String)
], CreateSubscribeDto.prototype, "restaurant_id", void 0);
//# sourceMappingURL=create_subscribe.dto.js.map