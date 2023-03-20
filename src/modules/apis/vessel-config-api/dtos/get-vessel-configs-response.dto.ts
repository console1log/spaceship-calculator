import { GetPartsBaseResponseDto } from '../../../schemas/parts-base/dtos'
import { ApiProperty } from '@nestjs/swagger'
import {
  IBody,
  IFuelTank,
  IThruster,
  IVesselConfig,
} from '../../../schemas/bodies/types'

// would be replaced to bodies-api module if it will be added
export class GetBodyResponseDto extends GetPartsBaseResponseDto {
  @ApiProperty({
    type: 'number',
    description: 'Material of body',
    example: 30,
  })
  body_material: number

  @ApiProperty({
    type: 'number',
    description: 'Max storage of body',
    example: 10,
  })
  max_storage: number

  constructor(body: IBody) {
    super(body)

    this.body_material = body.bodyMaterial
    this.max_storage = body.maxStorage
  }
}

// would be replaced to thrusters-api module if it will be added
export class GetThrusterDto extends GetPartsBaseResponseDto {
  @ApiProperty({
    type: 'number',
    description: 'Efficiency of thruster',
    example: 0.23,
  })
  efficiency: number

  constructor(thruster: IThruster) {
    super(thruster)

    this.efficiency = thruster.efficiency
  }
}

// would be replaced to fuel-tanks-api module if it will be added
export class GetFuelTankDto extends GetPartsBaseResponseDto {
  @ApiProperty({
    type: 'number',
    description: 'Fuel capacity of fuel tank',
    example: 50,
  })
  fuel_capacity: number

  constructor(thruster: IFuelTank) {
    super(thruster)

    this.fuel_capacity = thruster.fuelCapacity
  }
}

export class GetVesselConfigsResponseDto {
  // Added weight of vessel config
  @ApiProperty({
    type: 'number',
    description: 'Weight of vessel config',
    example: 100,
  })
  weight: number

  @ApiProperty({
    type: 'number',
    description: 'Price of vessel config',
    example: 450,
  })
  price: number

  @ApiProperty({
    type: 'number',
    description: 'Journey distance of vessel config',
    example: 100,
  })
  journey_distance: number

  @ApiProperty({
    type: GetBodyResponseDto,
    description: 'Body for current config',
  })
  body: GetBodyResponseDto

  @ApiProperty({
    type: GetPartsBaseResponseDto,
    description: 'Scanner for current config',
  })
  scanner: GetPartsBaseResponseDto

  @ApiProperty({
    type: GetThrusterDto,
    description: 'Thruster for current config',
  })
  thruster: GetThrusterDto

  @ApiProperty({
    type: GetFuelTankDto,
    description: 'Fuel tank for current config',
  })
  fuel_tank: GetFuelTankDto

  constructor(vesselConfig: IVesselConfig) {
    this.weight = vesselConfig.weight
    this.price = vesselConfig.price
    this.journey_distance = vesselConfig.journeyDistance
    this.body = new GetBodyResponseDto(vesselConfig.body)
    this.scanner = new GetPartsBaseResponseDto(vesselConfig.scanner)
    this.thruster = new GetThrusterDto(vesselConfig.thruster)
    this.fuel_tank = new GetFuelTankDto(vesselConfig.fuelTank)
  }
}
