import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Scanner, ScannerSchema } from './scanner.schema'
import { ScannersService } from './scanners.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Scanner.name, schema: ScannerSchema }]),
  ],
  providers: [ScannersService],
  exports: [ScannersService],
})
export class ScannersModule {}
