import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigurationService } from '../../modules/configuration/configuration.service'

const configurationService = new ConfigurationService()

@Module({
  imports: [
    MongooseModule.forRoot(configurationService.get('MONGO_ATLAS_URL')),
  ],
})
export class MongodbModule {}
