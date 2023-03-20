import { IsNotEmpty, IsNumberString, IsString } from 'class-validator'

export class ConfigurationDto {
  @IsNotEmpty()
  @IsNumberString()
  APP_PORT: string

  @IsNotEmpty()
  @IsString()
  MONGO_ATLAS_URL: string
}
