import { PartsTypeEnum } from '../enums'

export interface IPartsBase {
  _id: string
  name: string
  vendor: string
  type: PartsTypeEnum
  weight: number
  price: number
  __v: number
}
