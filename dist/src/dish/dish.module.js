"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishModule = void 0;
const common_1 = require("@nestjs/common");
const knex_module_1 = require("../global/modules/knex.module");
const dish_controller_1 = require("./dish.controller");
const dish_service_1 = require("./dish.service");
let DishModule = class DishModule {
};
exports.DishModule = DishModule;
exports.DishModule = DishModule = __decorate([
    (0, common_1.Module)({
        imports: [knex_module_1.KnexModule],
        controllers: [dish_controller_1.DishController],
        providers: [dish_service_1.DishService],
    })
], DishModule);
//# sourceMappingURL=dish.module.js.map