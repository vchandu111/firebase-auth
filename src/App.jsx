import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Login from './Components/Login'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<div className="min-h-screen flex items-center justify-center bg-gray-100"><h1>Home</h1></div>} />
      </Routes>
    </Router>
  )
}

export default App
