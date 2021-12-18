import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { NoMatch } from './components/NoMatch'
import { AuthProvider } from './components/auth'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import { RequireAuth } from './components/RequireAuth'

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  )
}

export default App