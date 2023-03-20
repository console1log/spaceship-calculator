import { Prop } from '@nestjs/mongoose'
import { PartsTypeEnum } from './enums'

export class PartBaseSchema {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  vendor: string

  @Prop({ required: true, type: String, enum: PartsTypeEnum })
  type: PartsTypeEnum

  @Prop({ required: true })
  weight: number

  @Prop({ required: true })
  price: number
}
