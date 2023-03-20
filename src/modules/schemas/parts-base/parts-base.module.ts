import { Module } from '@nestjs/common'
import { PartsBaseService } from './parts-base.service'

@Module({
  providers: [PartsBaseService],
  exports: [PartsBaseService],
})
export class PartsBaseModule {}
