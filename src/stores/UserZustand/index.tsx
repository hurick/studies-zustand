import { IUserContext, User } from '@utilsTypes/user'
import { createPersistedStore } from '@utils/createPersistedStore'

const INITIAL_USER_STATE: Pick<IUserContext, 'user'> = {
  user: {
    email: "",
    fullName: "",
    score: 0,
  }
}

const updateUserStateHelper = (
  prevState: IUserContext,
  newUserData: Partial<User>
) => ({
  ...prevState,
  user: {
    ...prevState.user,
    ...newUserData
  }
})

export const useUserStore = createPersistedStore<IUserContext>(
  set => ({
    ...INITIAL_USER_STATE,
    updateUserState(newUserData) {
      set(prevState => updateUserStateHelper(prevState, newUserData))
    },
  }),
  { name: 'store-user' }
)
