import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import flagsmith from '@flagsmith/flagsmith'
import { FlagsmithProvider } from '@flagsmith/flagsmith/react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FlagsmithProvider
      options={{
        environmentID: import.meta.env.VITE_FLAGSMITH_ENVIRONMENT_ID,
      }}
      flagsmith={flagsmith}
    >
      <App />
    </FlagsmithProvider>
  </StrictMode>,
)
