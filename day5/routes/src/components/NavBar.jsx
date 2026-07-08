import logovite from '../assets/vite.svg'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
    <div className="bg-blue-950 text-white p-4  flex justify-between items-center">
        <div className="bg-black p-2 rounded-lg shadow-md flex items-center gap-2 w-10 h-10">
          <img src={logovite} alt="logovite" />

        </div>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/help" className="hover:underline">
            Help
          </Link>


        </div>
    </div>
    </>
  )
}

export default NavBar