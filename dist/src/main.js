"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet_1 = require("helmet");
dotenv.config({ path: __dirname + '/../../src/secrets/keys/.env' });
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors({
        origin: [
            'http://localhost:3865',
            'http://localhost:3870',
            'http://localhost:3880',
            'https://openricecanadafrontend.vercel.app',
            'https://openricetimothyfrontend.vercel.app',
            'https://ttiimmothy.github.io/openrice-timothy-frontend',
            'https://ttiimmothy.github.io',
        ],
        credentials: true,
    }));
    app.use((0, helmet_1.default)());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Openrice Canada')
        .setDescription('The Openrice Canada API description')
        .setVersion('0.1.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/swagger', app, document, {
        customSiteTitle: 'Swagger API Documentation',
        customfavIcon: '/static/recent_favicon.ico',
    });
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map