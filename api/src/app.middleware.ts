import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: NextFunction) {
    // Mientras tanto vamos a utilizar un id de un cliente en específico,
    // luego este id lo vamos a obtener del token de autenticación
    req.userId = 1;
    req.user = {
      roles: ['admin']
    };
    next();
  }
}
