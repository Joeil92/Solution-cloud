import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.tsx'
import LoadingPage from './router/loading-page.tsx'
import './index.css'
import './services/firebase/firebaseConfig.ts'
import { AuthProvider } from './contexts/authContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<LoadingPage />} />
  </React.StrictMode>,
)
