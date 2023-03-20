import { Controller, Get, HttpStatus, Query } from '@nestjs/common'
import { VesselConfigApiService } from './vessel-config-api.service'
import { GetVesselConfigsRequestDto } from './dtos'
import { GetVesselConfigsResponseDto } from './dtos/get-vessel-configs-response.dto'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

// In requirements endpoint calls 'getVesselConfigs'
// But REST endpoint mustn't contain any verb
// Due to REST best practices decided to rename endpoint from requirements
@Controller('vesselConfigs')
@ApiTags('Vessel configs API')
export class VesselConfigApiController {
  constructor(
    private readonly vesselConfigApiService: VesselConfigApiService
  ) {}

  @Get()
  @ApiOperation({ summary: `Get vessel configs` })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetVesselConfigsResponseDto,
    isArray: true,
  })
  async getScanners(
    @Query() filters: GetVesselConfigsRequestDto
  ): Promise<GetVesselConfigsResponseDto[]> {
    return this.vesselConfigApiService.getVesselConfig(filters)
  }
}
