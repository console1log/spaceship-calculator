import { Module } from '@nestjs/common'
import { ScannersApiController } from './scanners-api.controller'
import { ScannersModule } from '../../schemas/scanners/scanners.module'

@Module({
  imports: [ScannersModule],
  controllers: [ScannersApiController],
})
export class ScannersApiModule {}
