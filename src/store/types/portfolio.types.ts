type PremiumPortfolioTypes = 'FREE' | 'ONE_TIME' | 'SUBSCRIPTION'

type Strategies = {
  type: string
}[]

export interface IPortfolioDocument {
  _id: string
  name: string
  strategies: Strategies
  userId: string
  isDeleted: boolean
  premiumPortfolioType: PremiumPortfolioTypes
  createdAt: Date
  updatedAt: Date
}
