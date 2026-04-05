import { useFlags } from '@flagsmith/flagsmith/react'
import './App.css'

function App() {
  const flags = useFlags(['demo-feature'])
  const isDemoFeatureEnabled = flags['demo-feature']?.enabled

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Flagsmith Feature Flag Test</h1>
      
      <div style={{ margin: '2rem 0', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Flag Status: {isDemoFeatureEnabled ? '✅ ENABLED' : '❌ DISABLED'}</h2>
        
        {isDemoFeatureEnabled ? (
          <div style={{ padding: '1rem', backgroundColor: '#e0f7fa', borderRadius: '8px', marginTop: '1rem' }}>
            <h3>Demo Feature is ON!</h3>
            <p>This content is only visible when the "demo-feature" flag is enabled in Flagsmith.</p>
          </div>
        ) : (
          <div style={{ padding: '1rem', backgroundColor: '#ffebee', borderRadius: '8px', marginTop: '1rem' }}>
            <h3>Demo Feature is OFF</h3>
            <p>Enable the "demo-feature" flag in Flagsmith to see the locked content.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
