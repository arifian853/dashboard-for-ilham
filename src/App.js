import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './Pages/LandingPage.jsx'
import { UserAuthContextProvider } from './Context/UserAuthContext'
import { Dashboard } from './Pages/Dashboard'
import { ProtectedRoute } from './Components/ProtectedRoute'
import { LoginPage } from './Pages/LoginPage'
import { NotFound } from './Pages/NotFound'

export default function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<LandingPage />}></Route>

          <Route path='/login' element={<LoginPage />}></Route>

          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>} />
          
        </Routes>
      </UserAuthContextProvider>
    </>
  )
}
