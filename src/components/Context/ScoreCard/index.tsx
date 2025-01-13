import { useContext } from 'react'
import { UserContext } from '@stores/UserContext'

interface IScoreCard {
  className?: string
}

export const ScoreCard = ({ className }: IScoreCard) => {
  const userContext = useContext(UserContext)

  return (
    <input
      className={className}
      type="number"
      name="context_score"
      placeholder="Score"
      value={userContext?.user.score ?? 0}
      onChange={ev => userContext?.updateUserState({ score: Number(ev.target.value) })}
    />
  )
}
