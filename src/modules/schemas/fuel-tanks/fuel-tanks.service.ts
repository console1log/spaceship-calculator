import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { PartsBaseService } from '../parts-base/parts-base.service'
import { FuelTank, FuelTankDocument } from './fuel-tank.schema'

@Injectable()
export class FuelTanksService extends PartsBaseService<FuelTank> {
  constructor(
    @InjectModel(FuelTank.name)
    private fuelTankModel: Model<FuelTankDocument>
  ) {
    super(fuelTankModel)
  }
}
