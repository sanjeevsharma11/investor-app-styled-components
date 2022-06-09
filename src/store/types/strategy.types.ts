type Trade = {
  name: string
  strategyId: string
  tradeId: string
  isDeleted: boolean
}[]

export interface IStrategyDocument {
  _id: string
  name: string
  userId: string
  portfolioId: string
  isDeleted: boolean
  trades: Trade
  createdAt: Date
  updatedAt: Date
}
