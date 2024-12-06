import React from 'react'
import App from './src/App'
import { Route, Routes } from 'react-router-dom'
import LoginPopUp from './src/components/Loginpopup/LoginPopUp'
import ProtectedRoute from './src/components/Protected/ProtectedRoute'
import ErrorBoundary from './src/components/Errorboundary/ErrorBoundary'
const MainApp = () => {
  return (
    <div>
    <ErrorBoundary>
    <Routes>
        <Route path='/' element={<LoginPopUp/>}/>
        <Route path='/admin/pannel' element={<ProtectedRoute element={<App/>}/>}/>
    </Routes>
    </ErrorBoundary>
    </div>
  )
}

export default MainApp
