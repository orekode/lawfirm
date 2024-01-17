import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import 'react-loading-skeleton/dist/skeleton.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import { SkeletonTheme } from 'react-loading-skeleton'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme baseColor='#ebebeb69'  highlightColor='#f5f5f536'>

        <App />
      </SkeletonTheme>
    </QueryClientProvider>
  </React.StrictMode>,
)
