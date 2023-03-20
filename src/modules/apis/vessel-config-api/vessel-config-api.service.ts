import { Injectable } from '@nestjs/common'
import { BodiesService } from '../../schemas/bodies/bodies.service'
import { GetVesselConfigsRequestDto } from './dtos'
import { GetVesselConfigsResponseDto } from './dtos/get-vessel-configs-response.dto'

@Injectable()
export class VesselConfigApiService {
  constructor(private readonly bodyService: BodiesService) {}

  async getVesselConfig(
    filters: GetVesselConfigsRequestDto
  ): Promise<GetVesselConfigsResponseDto[]> {
    const vesselConfigs = await this.bodyService.getAndFilterVesselConfigs(
      filters
    )

    return vesselConfigs.map((vesselConfig) => {
      return new GetVesselConfigsResponseDto(vesselConfig)
    })
  }
}
