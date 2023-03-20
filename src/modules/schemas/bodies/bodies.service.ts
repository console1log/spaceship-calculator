import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Body, BodyDocument } from './body.schema'
import { PartsBaseService } from '../parts-base/parts-base.service'
import { PartsTypeEnum } from '../parts-base/enums'
import { GetVesselConfigsRequestDto } from '../../apis/vessel-config-api/dtos'
import { OrderEnum } from '../../utils/enums'
import {
  DEFAULT_PAGINATION_LIMIT,
  DEFAULT_PAGINATION_PAGE,
} from '../../utils/constants'
import { IVesselConfig } from './types'

const IONIC_FUEL = 43.29

@Injectable()
export class BodiesService extends PartsBaseService<Body> {
  constructor(
    @InjectModel(Body.name)
    private bodyModel: Model<BodyDocument>
  ) {
    super(bodyModel)
  }

  async getAndFilterVesselConfigs(
    filters: GetVesselConfigsRequestDto
  ): Promise<IVesselConfig[]> {
    return this.bodyModel.aggregate([
      {
        $lookup: {
          from: 'Fuel_tanks',
          let: { typeArr: ['$type', PartsTypeEnum.ANY] },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ['$type', '$$typeArr'],
                },
              },
            },
          ],
          as: 'fuelTank',
        },
      },
      { $unwind: '$fuelTank' },
      {
        $lookup: {
          from: 'Thrusters',
          let: { typeArr: ['$type', PartsTypeEnum.ANY] },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ['$type', '$$typeArr'],
                },
              },
            },
          ],
          as: 'thruster',
        },
      },
      { $unwind: '$thruster' },
      {
        $lookup: {
          from: 'Scanners',
          let: { typeArr: ['$type', PartsTypeEnum.ANY] },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ['$type', '$$typeArr'],
                },
              },
            },
          ],
          as: 'scanner',
        },
      },
      { $unwind: '$scanner' },
      {
        $addFields: {
          totalWeight: {
            $add: [
              '$thruster.weight',
              '$fuelTank.weight',
              '$scanner.weight',
              '$weight',
            ],
          },
          totalPrice: {
            $add: [
              '$thruster.price',
              '$fuelTank.price',
              '$scanner.price',
              '$price',
            ],
          },
        },
      },
      {
        $project: {
          price: '$totalPrice',
          weight: '$totalWeight',
          journeyDistance: {
            $divide: [
              {
                $multiply: [
                  '$thruster.efficiency',
                  '$fuelTank.fuelCapacity',
                  IONIC_FUEL,
                ],
              },
              '$totalWeight',
            ],
          },
          body: {
            _id: '$_id',
            name: '$name',
            vendor: '$vendor',
            type: '$type',
            bodyMaterial: '$bodyMaterial',
            maxStorage: '$maxStorage',
            weight: '$weight',
            price: '$price',
            __v: '$__v',
          },
          fuelTank: 1,
          scanner: 1,
          thruster: 1,
        },
      },
      {
        $match: {
          weight: { $lte: filters.maxWeight },
          price: { $lte: filters.maxPrice },
          journeyDistance: { $gte: filters.journeyDistance },
        },
      },
      {
        $sort: {
          price: OrderEnum.DESC,
        },
      },
      {
        $skip: DEFAULT_PAGINATION_PAGE,
      },
      {
        $limit: DEFAULT_PAGINATION_LIMIT,
      },
    ])
  }
}
