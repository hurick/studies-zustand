import { useState } from 'react'
import { UserContext } from '.'
import { IUserContextProvider, User } from '@utilsTypes/user'

export const UserContextProvider = ({ children }: IUserContextProvider) => {
  const [user, setUser] = useState<User>({
    email: "",
    fullName: "",
    score: 0
  })

  const updateUserState = (data: Partial<User>) => {
    setUser(prev => ({
      ...prev,
      ...data
    }))
  }

  return (
    <UserContext.Provider value={{ user, updateUserState }}>
      {children}
    </UserContext.Provider>
  )
}
