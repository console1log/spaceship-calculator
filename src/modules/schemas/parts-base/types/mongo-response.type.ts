export type MongoResponse<T> = T & {
  _id: string
  __v: number
}
