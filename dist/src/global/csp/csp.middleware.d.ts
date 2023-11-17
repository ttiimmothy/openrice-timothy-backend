import { NestMiddleware } from '@nestjs/common';
import { CspService } from './csp.service';
import { Request, Response, NextFunction } from 'express';
export declare class CspMiddleware implements NestMiddleware {
    private readonly cspService;
    constructor(cspService: CspService);
    use(_: Request, res: Response, next: NextFunction): void;
}
