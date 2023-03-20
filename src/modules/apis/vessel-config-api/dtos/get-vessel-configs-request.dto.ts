import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'
import { Expose, Transform, TransformFnParams } from 'class-transformer'

export class GetVesselConfigsRequestDto {
  @ApiProperty({
    type: 'number',
    description: 'Max price of vessel',
    example: 100,
    name: 'max_price',
  })
  @Expose({ name: 'max_price' })
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams): number => Number(value))
  @IsNumber()
  maxPrice: number

  @ApiProperty({
    type: 'number',
    description: 'Journey distance of vessel',
    example: 26.6,
    name: 'journey_distance',
  })
  @Expose({ name: 'journey_distance' })
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams): number => Number(value))
  @IsNumber()
  journeyDistance: number

  @ApiProperty({
    type: 'number',
    description: 'Max weight of vessel',
    example: 50,
    name: 'max_weight',
  })
  @Expose({ name: 'max_weight' })
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams): number => Number(value))
  @IsNumber()
  maxWeight: number
}
