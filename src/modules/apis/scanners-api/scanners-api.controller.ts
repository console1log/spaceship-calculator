import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ScannersService } from '../../schemas/scanners/scanners.service'
import {
  CreatePartsBaseRequestDto,
  GetPartsBaseResponseDto,
  RemoveResponseDto,
  UpdateBasePartRequestDto,
} from '../../schemas/parts-base/dtos'

@Controller('scanners')
@ApiTags('Scanners API')
export class ScannersApiController {
  constructor(private readonly scannerService: ScannersService) {}

  @Get()
  @ApiOperation({ summary: `Get all scanners` })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetPartsBaseResponseDto,
    isArray: true,
  })
  async getScanners(): Promise<GetPartsBaseResponseDto[]> {
    return this.scannerService.findAll()
  }

  @Get(':scannerId')
  @ApiOperation({ summary: `Get scanner by id` })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetPartsBaseResponseDto,
    isArray: false,
  })
  async getScanner(
    @Param('scannerId') scannerId: string
  ): Promise<GetPartsBaseResponseDto> {
    const scanner = await this.scannerService.findById(scannerId)

    if (!scanner) {
      throw new NotFoundException('Scanner with provided ID does not exists')
    }

    return scanner
  }

  @Post()
  @ApiOperation({ summary: `Add new scanner` })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: GetPartsBaseResponseDto,
    isArray: false,
  })
  async createScanner(
    @Body() dto: CreatePartsBaseRequestDto
  ): Promise<GetPartsBaseResponseDto> {
    return this.scannerService.create(dto)
  }

  @Patch(':scannerId')
  @ApiOperation({ summary: `Update scanner by id` })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetPartsBaseResponseDto,
    isArray: false,
  })
  async updateScanner(
    @Param('scannerId') scannerId: string,
    @Body() dto: UpdateBasePartRequestDto
  ): Promise<GetPartsBaseResponseDto> {
    const scanner = await this.scannerService.updateById(scannerId, dto)

    if (!scanner) {
      throw new NotFoundException('Scanner with provided ID does not exists')
    }

    return scanner
  }

  @Delete(':scannerId')
  @ApiOperation({ summary: `Delete scanner by id` })
  @ApiResponse({
    status: HttpStatus.OK,
    type: RemoveResponseDto,
    isArray: false,
  })
  async deleteScanner(
    @Param('scannerId') scannerId: string
  ): Promise<RemoveResponseDto> {
    return this.scannerService.removeById(scannerId)
  }
}
