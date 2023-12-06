import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Register } from './pages/Auth'
import { SideNav } from './pages/Main/Cycling'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={< Login />} />
          <Route path='/register' element={< Register />} />
          <Route path='/dashboard' element={< SideNav />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
