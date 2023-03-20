import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { PartsTypeEnum } from '../enums'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class UpdateBasePartRequestDto {
  @ApiPropertyOptional({
    type: 'string',
    description: 'Name of scanner',
    example: 'Visor S',
  })
  @IsOptional()
  @IsString()
  name?: string

  @ApiPropertyOptional({
    type: 'string',
    description: 'Vendor of scanner',
    example: 'BluTek',
  })
  @IsOptional()
  @IsString()
  vendor?: string

  @ApiPropertyOptional({
    enum: PartsTypeEnum,
    enumName: 'PartsTypeEnum',
    description: `Type of scanner`,
    example: PartsTypeEnum.ARMADA,
  })
  @IsOptional()
  @IsEnum(PartsTypeEnum)
  @IsString()
  type?: PartsTypeEnum

  @ApiPropertyOptional({
    type: 'number',
    description: 'Weight of scanner',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  weight?: number

  @ApiPropertyOptional({
    type: 'number',
    description: 'Price of scanner',
    example: 25,
  })
  @IsOptional()
  @IsNumber()
  price?: number
}
