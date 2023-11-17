"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnexModule = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
const knexfile_1 = require("../../../knexfile");
const configMode = process.env.NODE_ENV || 'development';
const knexConfig = knexfile_1.default[configMode];
let KnexModule = class KnexModule {
};
exports.KnexModule = KnexModule;
exports.KnexModule = KnexModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            {
                provide: 'KnexConnection',
                useFactory: () => {
                    const knex = (0, knex_1.default)(knexConfig);
                    return knex;
                },
            },
        ],
        exports: ['KnexConnection'],
    })
], KnexModule);
//# sourceMappingURL=knex.module.js.map