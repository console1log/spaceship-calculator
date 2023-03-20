import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { SchemasModule } from './modules/schemas/schemas.module'
import { MongodbModule } from './providers/mongodb/mongodb.module'
import { ApisModule } from './modules/apis/apis.module'
import { CheckPostEmptyBodyMiddleware } from './middlewares/json-body-parser.middleware'

@Module({
  imports: [ApisModule, MongodbModule, SchemasModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(CheckPostEmptyBodyMiddleware).forRoutes('*')
  }
}
