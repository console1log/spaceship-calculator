import { Injectable } from '@nestjs/common'
import { validateSync } from 'class-validator'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'
import { ConfigurationDto } from './dtos/configuration.dto'

@Injectable()
export class ConfigurationService {
  private readonly configuration: ConfigurationDto

  constructor() {
    const configuration = new ConfigurationDto()

    Object.assign(configuration, {
      ...ConfigurationService.getDotenvConfiguration(),
      ...process.env,
    })
    const validationResult = validateSync(configuration, { whitelist: true })

    if (validationResult && validationResult.length > 0) {
      throw new Error(`Configuration invalid\n${validationResult}`)
    }

    this.configuration = configuration
  }

  private static getDotenvConfiguration(): Record<string, string | null> {
    const ENV_PATH = path.resolve(process.cwd(), '.env')
    return fs.existsSync(ENV_PATH)
      ? dotenv.parse(fs.readFileSync(ENV_PATH))
      : {}
  }

  public get<K extends keyof ConfigurationDto>(key: K): ConfigurationDto[K] {
    if (!this.configuration[key]) {
      throw new Error(`Key ${key} does not exists in configuration`)
    }
    return this.configuration[key]
  }
}
