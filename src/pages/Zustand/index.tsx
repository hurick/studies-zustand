import { Profile } from '@components/Zustand/Profile'
import { ScoreCard } from '@components/Zustand/ScoreCard'

import s from '@pages/Pages.module.scss'

export function PageZustand() {
  return (
    <section>
      <h1>pmndrs' Zustand</h1>

      <div className={s.PageContextContainer}>
        <Profile className={s.PageContextInput} />
        <ScoreCard className={s.PageContextInput} />
      </div>
    </section>
  )
}
