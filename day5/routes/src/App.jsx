import { Routes, Route, Link} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from '../src/pages/Home'
import About from './components/About'
import Contact from './components/Contact'
import Help from './components/Help'



const App = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  )
}

export default App