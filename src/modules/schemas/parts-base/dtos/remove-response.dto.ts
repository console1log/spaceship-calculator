import { ApiProperty } from '@nestjs/swagger'

export class RemoveResponseDto {
  @ApiProperty({
    type: 'boolean',
    description: 'Removal acknowledged',
    example: true,
  })
  acknowledged: boolean

  @ApiProperty({
    type: 'number',
    description: 'Removed count',
    example: 1,
  })
  deletedCount: number
}
