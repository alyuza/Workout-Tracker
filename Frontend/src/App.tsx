import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Register } from './pages/Auth'
import BMIForm from './pages/Main/BMI'
import { CyclingDashboard, RunningDashboard, SwimmingDashboard } from './pages/Main'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={< Login />} />
          <Route path='/register' element={< Register />} />
          <Route path='/running' element={<  RunningDashboard />} />
          <Route path='/cycling' element={< CyclingDashboard />} />
          <Route path='/swimming' element={< SwimmingDashboard />} />
          <Route path='/bmi' element={< BMIForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
