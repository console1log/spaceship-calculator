import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class CheckPostEmptyBodyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (
      req.method === 'POST' &&
      req.get('Content-Type') === 'application/json' &&
      Object.keys(req.body).length === 0
    ) {
      return res.status(400).json({ message: 'The request body is empty.' })
    }
    next()
  }
}
