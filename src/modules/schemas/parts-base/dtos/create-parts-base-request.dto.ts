import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { PartsTypeEnum } from '../enums'

export class CreatePartsBaseRequestDto {
  @ApiProperty({
    type: 'string',
    description: 'Name of part',
    example: 'Visor S',
  })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({
    type: 'string',
    description: 'Vendor of part',
    example: 'BluTek',
  })
  @IsNotEmpty()
  @IsString()
  vendor: string

  @ApiProperty({
    enum: PartsTypeEnum,
    enumName: 'PartsTypeEnum',
    description: `Type of part`,
    example: PartsTypeEnum.ARMADA,
  })
  @IsEnum(PartsTypeEnum)
  @IsNotEmpty()
  @IsString()
  type: PartsTypeEnum

  @ApiProperty({
    type: 'number',
    description: 'Weight of part',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  weight: number

  @ApiProperty({
    type: 'number',
    description: 'Price of part',
    example: 25,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number
}
