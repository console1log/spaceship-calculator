import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { INestApplication, ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ConfigurationService } from './modules/configuration/configuration.service'

const configurationService = new ConfigurationService()

async function bootstrap() {
  const app = await createApp()
  await app.listen(configurationService.get('APP_PORT'))
}

async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.setGlobalPrefix('api')

  setupSwagger(app)

  return app
}

function setupSwagger(app: INestApplication): void {
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Spaceship calculator API')
    .setDescription('Documentation for Spaceship calculator API')
    .build()
  const document = SwaggerModule.createDocument(app, swaggerOptions)

  SwaggerModule.setup('/documentation', app, document)
}

bootstrap()
