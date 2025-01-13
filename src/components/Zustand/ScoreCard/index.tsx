import { useUserStore } from '@stores/UserZustand'

interface IScoreCard {
  className?: string
}

export const ScoreCard = ({ className }: IScoreCard) => {
  const score = useUserStore(store => store.user.score)
  const updateUserState = useUserStore(store => store.updateUserState)

  return (
    <input
      className={className}
      type="number"
      name="zustand_score"
      placeholder="Score"
      value={score}
      onChange={ev => updateUserState({ score: Number(ev.target.value) })}
    />
  )
}
