import { Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { PartBaseSchema } from '../parts-base/part-base.schema'

export type ScannerDocument = HydratedDocument<Scanner>

@Schema({ collection: 'Scanners' })
export class Scanner extends PartBaseSchema {}

export const ScannerSchema = SchemaFactory.createForClass(Scanner)
