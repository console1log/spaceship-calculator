import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { PartBaseSchema } from '../parts-base/part-base.schema'

export type FuelTankDocument = HydratedDocument<FuelTank>

@Schema({ collection: 'Fuel_tanks' })
export class FuelTank extends PartBaseSchema {
  @Prop({ required: true })
  fuelCapacity: number
}

export const FuelTankSchema = SchemaFactory.createForClass(FuelTank)
