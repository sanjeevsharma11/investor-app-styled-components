export interface IUserDocument extends Document {
  _id: string
  userId: string
  name: string
  email: string
  password: string
  role: string
  subRole: string
  file: string
  phone: string
  followers: Followers
  following: Followers
  isDeleted: boolean
  latest_login: Date
  percentageReturn: number
  matchPassword: (enteredPassword: string) => Promise<boolean>
  createPasswordResetToken: () => Promise<string>
  generateAccessToken(): string
  generateRefreshToken(): string
  passwordResetToken: string
  passwordResetExpires: Date
  createdAt: Date
  updatedAt: Date
}

type Followers = {
  userId: string
}[]

export interface IUser {
  _id: string
  name: string
  email: string
  role: string
  subRole: string
  file: string
  phone: string
  followers: Followers
  following: Followers
  createdAt: Date
  updatedAt: Date
}
