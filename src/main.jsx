import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './reset.css'

import { ConfiguratorProvider } from './context/Configurator'
import LoadingScreen from './components/LoadingScreen'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfiguratorProvider>
      <Suspense fallback={<LoadingScreen />}>
        <App />
      </Suspense>
    </ConfiguratorProvider>
  </React.StrictMode>,
)