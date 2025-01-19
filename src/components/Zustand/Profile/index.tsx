import { useUserStore } from '@stores/UserZustand'
import { IProfile } from '@utils/types/user'

export const Profile = ({ className }: IProfile) => {
  const email = useUserStore(store => store.user.email)
  const fullName = useUserStore(store => store.user.fullName)
  const updateUserState = useUserStore(store => store.updateUserState)

  return (
    <>
      <input
        autoComplete="name"
        className={className}
        type="text"
        name="zustand_fullName"
        placeholder="Name"
        value={fullName}
        onChange={ev => updateUserState({ fullName: ev.target.value })}
      />

      <input
        autoComplete="email"
        className={className}
        type="email"
        name="zustand_email"
        placeholder="E-mail"
        value={email}
        onChange={ev => updateUserState({ email: ev.target.value })}
      />
    </>
  )
}
