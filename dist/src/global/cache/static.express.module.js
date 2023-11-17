"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticExpressModule = void 0;
const common_1 = require("@nestjs/common");
const static_express_controller_1 = require("./static.express.controller");
const static_express_middleware_1 = require("./static.express.middleware");
let StaticExpressModule = class StaticExpressModule {
    configure(consumer) {
        consumer.apply(static_express_middleware_1.StaticExpressMiddleware).forRoutes('*');
    }
};
exports.StaticExpressModule = StaticExpressModule;
exports.StaticExpressModule = StaticExpressModule = __decorate([
    (0, common_1.Module)({
        controllers: [static_express_controller_1.StaticExpressController],
    })
], StaticExpressModule);
//# sourceMappingURL=static.express.module.js.map