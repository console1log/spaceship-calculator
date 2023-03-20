import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { PartBaseSchema } from '../parts-base/part-base.schema'

export type BodyDocument = HydratedDocument<Body>

@Schema({ collection: 'Bodies' })
export class Body extends PartBaseSchema {
  @Prop({ required: true })
  bodyMaterial: number

  @Prop({ required: true })
  maxStorage: number
}

export const BodySchema = SchemaFactory.createForClass(Body)
