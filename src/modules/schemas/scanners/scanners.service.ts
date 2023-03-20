import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { PartsBaseService } from '../parts-base/parts-base.service'
import { Scanner, ScannerDocument } from './scanner.schema'

@Injectable()
export class ScannersService extends PartsBaseService<Scanner> {
  constructor(
    @InjectModel(Scanner.name)
    private scannerModel: Model<ScannerDocument>
  ) {
    super(scannerModel)
  }
}
