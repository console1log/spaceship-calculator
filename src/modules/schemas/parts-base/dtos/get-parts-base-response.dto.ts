import { ApiProperty } from '@nestjs/swagger'
import { CreatePartsBaseRequestDto } from './create-parts-base-request.dto'

export class GetPartsBaseResponseDto extends CreatePartsBaseRequestDto {
  @ApiProperty({
    type: 'string',
    description: 'Document id',
    example: '64146b902abf4b0de09a6f8b',
  })
  _id: string

  @ApiProperty({
    type: 'number',
    description: 'Version of document',
    example: '0',
  })
  __v: number

  constructor(data: any) {
    super()

    this._id = data._id
    this.name = data.name
    this.type = data.type
    this.vendor = data.vendor
    this.weight = data.weight
    this.price = data.price
    this.__v = data.__v
  }
}
