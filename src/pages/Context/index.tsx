import { Profile } from '@components/Context/Profile'
import { ScoreCard } from '@components/Context/ScoreCard'

import s from '@pages/Pages.module.scss'

export function PageContext() {
  return (
    <section>
      <h1>React's Context API</h1>

      <div className={s.PageContextContainer}>
        <Profile className={s.PageContextInput} />
        <ScoreCard className={s.PageContextInput} />
      </div>
    </section>
  )
}
