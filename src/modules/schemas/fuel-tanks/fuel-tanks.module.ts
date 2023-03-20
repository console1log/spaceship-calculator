import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { FuelTank, FuelTankSchema } from './fuel-tank.schema'
import { FuelTanksService } from './fuel-tanks.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FuelTank.name, schema: FuelTankSchema },
    ]),
  ],
  providers: [FuelTanksService],
  exports: [FuelTanksService],
})
export class FuelTanksModule {}
