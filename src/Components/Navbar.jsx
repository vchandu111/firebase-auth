import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">Firebase Auth</Link>
        </div>
        <div className="space-x-4">
          <Link 
            to="/signup" 
            className="hover:text-gray-300 transition-colors"
          >
            Signup
          </Link>
          <Link 
            to="/login" 
            className="hover:text-gray-300 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
