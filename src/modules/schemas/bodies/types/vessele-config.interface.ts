import { IPartsBase } from '../../parts-base/types'

export interface IVesselConfig {
  _id?: string
  weight: number
  price: number
  journeyDistance: number
  scanner: IPartsBase
  body: IBody
  thruster: IThruster
  fuelTank: IFuelTank
}

// would be replaced to bodies module if it will have functionality
export interface IBody extends IPartsBase {
  bodyMaterial: number
  maxStorage: number
}

// would be replaced to thrusters module if it will have functionality
export interface IThruster extends IPartsBase {
  efficiency: number
}

// would be replaced to fuel-tank module if it will have functionality
export interface IFuelTank extends IPartsBase {
  fuelCapacity: number
}
