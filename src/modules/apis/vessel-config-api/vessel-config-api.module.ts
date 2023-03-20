import { Module } from '@nestjs/common'
import { VesselConfigApiController } from './vessel-config-api.controller'
import { VesselConfigApiService } from './vessel-config-api.service'
import { BodiesModule } from '../../schemas/bodies/bodies.module'

@Module({
  imports: [BodiesModule],
  controllers: [VesselConfigApiController],
  providers: [VesselConfigApiService],
  exports: [VesselConfigApiService],
})
export class VesselConfigApiModule {}
