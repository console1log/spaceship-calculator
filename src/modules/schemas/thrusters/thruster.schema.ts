import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { PartBaseSchema } from '../parts-base/part-base.schema'

export type ThrusterDocument = HydratedDocument<Thruster>

@Schema({ collection: 'Thrusters' })
export class Thruster extends PartBaseSchema {
  @Prop({ required: true })
  efficiency: number
}

export const ThrusterSchema = SchemaFactory.createForClass(Thruster)
