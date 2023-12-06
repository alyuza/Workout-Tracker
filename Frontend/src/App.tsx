import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ButtonUsage } from './components/ButtonUsage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ButtonUsage />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
