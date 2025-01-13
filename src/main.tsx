import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { UserContextProvider } from '@stores/UserContext'

import { PageContext } from '@pages/Context'
import { PageZustand } from '@pages/Zustand'

import s from './Main.module.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className={s.Main}>
      <UserContextProvider>
        <PageContext />
      </UserContextProvider>

      <PageZustand />
    </main>
  </StrictMode>
)
