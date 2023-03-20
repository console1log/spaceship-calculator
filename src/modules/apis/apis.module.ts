import { Module } from '@nestjs/common'
import { ScannersApiModule } from './scanners-api/scanners-api.module'
import { VesselConfigApiModule } from './vessel-config-api/vessel-config-api.module'

@Module({
  imports: [ScannersApiModule, VesselConfigApiModule],
  exports: [ScannersApiModule, VesselConfigApiModule],
})
export class ApisModule {}
