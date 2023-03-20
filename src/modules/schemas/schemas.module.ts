import { Module } from '@nestjs/common'
import { BodiesModule } from './bodies/bodies.module'
import { ThrustersModule } from './thrusters/thrusters.module'
import { PartsBaseModule } from './parts-base/parts-base.module'
import { FuelTanksModule } from './fuel-tanks/fuel-tanks.module'
import { ScannersModule } from './scanners/scanners.module'

const modules = [
  BodiesModule,
  ThrustersModule,
  PartsBaseModule,
  FuelTanksModule,
  ScannersModule,
]

@Module({
  imports: modules,
  exports: modules,
})
export class SchemasModule {}
