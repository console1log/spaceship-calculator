import { MongodbModule } from '../mongodb/mongodb.module'
import { Seeder } from './seeder.service'
import { Module } from '@nestjs/common'
import { BodiesModule } from '../../modules/schemas/bodies/bodies.module'
import { ThrustersModule } from '../../modules/schemas/thrusters/thrusters.module'
import { FuelTanksModule } from '../../modules/schemas/fuel-tanks/fuel-tanks.module'
import { ScannersModule } from '../../modules/schemas/scanners/scanners.module'

@Module({
  imports: [
    MongodbModule,
    BodiesModule,
    ThrustersModule,
    FuelTanksModule,
    ScannersModule,
  ],
  providers: [Seeder],
})
export class SeederModule {}
