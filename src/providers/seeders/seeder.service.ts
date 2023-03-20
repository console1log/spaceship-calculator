import { Injectable } from '@nestjs/common'
import { BodiesService } from '../../modules/schemas/bodies/bodies.service'
import * as fs from 'fs'
import * as path from 'path'
import { ThrustersService } from '../../modules/schemas/thrusters/thrusters.service'
import { FuelTanksService } from '../../modules/schemas/fuel-tanks/fuel-tanks.service'
import { ScannersService } from '../../modules/schemas/scanners/scanners.service'

@Injectable()
export class Seeder {
  constructor(
    private readonly bodyService: BodiesService,
    private readonly thrusterService: ThrustersService,
    private readonly fuelTankService: FuelTanksService,
    private readonly scannerService: ScannersService
  ) {}

  async seed() {
    try {
      await Promise.all([
        this.bodyService.deleteAll(),
        this.thrusterService.deleteAll(),
        this.fuelTankService.deleteAll(),
        this.scannerService.deleteAll(),
      ])

      const seedData = this.readJsonSeed()

      await Promise.all([
        this.bodyService.insertMany(seedData?.bodies),
        this.thrusterService.insertMany(seedData?.thrusters),
        this.fuelTankService.insertMany(seedData?.fuelTanks),
        this.scannerService.insertMany(seedData?.scanners),
      ])

      console.log('Seed data inserted!')
    } catch (error) {
      console.error(error)
    }
  }

  readJsonSeed() {
    const directory = path.resolve(
      process.cwd(),
      'src',
      'providers',
      'seeders',
      'constants',
      'seedData.json'
    )
    const seedJson = fs.readFileSync(directory, 'utf8')

    return JSON.parse(seedJson)
  }
}
