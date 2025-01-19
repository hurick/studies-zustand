import { ReactNode } from 'react'

export type User = {
  email: string
  fullName: string
  score: number
}

export interface IUserContext {
  user: User
  updateUserState: (updatedData: Partial<User>) => void
}

export interface IUserContextProvider {
  children: ReactNode
}

export interface IProfile {
  className?: string
}

export interface IScoreCard {
  className?: string
}
