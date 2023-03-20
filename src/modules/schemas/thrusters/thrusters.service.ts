import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Thruster, ThrusterDocument } from './thruster.schema'
import { PartsBaseService } from '../parts-base/parts-base.service'

@Injectable()
export class ThrustersService extends PartsBaseService<Thruster> {
  constructor(
    @InjectModel(Thruster.name)
    private thrusterModel: Model<ThrusterDocument>
  ) {
    super(thrusterModel)
  }
}
