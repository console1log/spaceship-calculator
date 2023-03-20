import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Thruster, ThrusterSchema } from './thruster.schema'
import { ThrustersService } from './thrusters.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Thruster.name, schema: ThrusterSchema },
    ]),
  ],
  providers: [ThrustersService],
  exports: [ThrustersService],
})
export class ThrustersModule {}
