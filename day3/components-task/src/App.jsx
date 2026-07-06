import React from 'react'
import './App.css'
import hero from './assets/hero.png'

const App = () => {
  return (<>
    <div>
       <h1>Welcome to React</h1>
       <img src={hero} alt="React Logo" />
       <br />
       <img src="./favicon.svg" alt="Vite Logo" />
    </div>
  </>
    
  )
}

export default App