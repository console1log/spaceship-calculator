import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Body, BodySchema } from './body.schema'
import { BodiesService } from './bodies.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Body.name, schema: BodySchema }]),
  ],
  providers: [BodiesService],
  exports: [BodiesService],
})
export class BodiesModule {}
