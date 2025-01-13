import { useContext } from 'react'
import { UserContext } from '@stores/UserContext'

interface IProfile {
  className?: string
}

export const Profile = ({ className }: IProfile) => {
  const userContext = useContext(UserContext)

  return (
    <>
      <input
        autoComplete="name"
        className={className}
        type="text"
        name="context_fullName"
        placeholder="Name"
        value={userContext?.user.fullName ?? ''}
        onChange={ev => userContext?.updateUserState({ fullName: ev.target.value })}
      />

      <input
        autoComplete="email"
        className={className}
        type="email"
        name="context_email"
        placeholder="E-mail"
        value={userContext?.user.email ?? ''}
        onChange={ev => userContext?.updateUserState({ email: ev.target.value })}
      />
    </>
  )
}
