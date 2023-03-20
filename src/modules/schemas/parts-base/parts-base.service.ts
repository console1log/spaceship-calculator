import { Model } from 'mongoose'
import { DeleteResult } from 'mongodb'
import { MongoResponse } from './types'

export class PartsBaseService<T> {
  protected model: Model<T>

  constructor(model: Model<T>) {
    this.model = model
  }

  async findAll(): Promise<MongoResponse<T>[]> {
    return this.model.find()
  }

  async findById(id: string): Promise<MongoResponse<T> | null> {
    return this.model.findById(id)
  }

  async create(data: T): Promise<MongoResponse<T>> {
    const createdModel = new this.model(data)
    const newModel = await createdModel.save()

    return newModel as MongoResponse<T>
  }

  async updateById(
    id: string,
    data: Partial<T>
  ): Promise<MongoResponse<T> | null> {
    return this.model.findByIdAndUpdate({ _id: id }, data, { new: true })
  }

  async removeById(id: string): Promise<DeleteResult> {
    return this.model.deleteOne({ _id: id })
  }

  async deleteAll(): Promise<DeleteResult> {
    return this.model.deleteMany({})
  }

  async insertMany(data: T[]): Promise<T[]> {
    return this.model.insertMany(data)
  }
}
