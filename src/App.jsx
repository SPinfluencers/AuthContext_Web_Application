import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Allroutes from './Allroutes/Allroutes'
import Navbar from './Allroutes/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
        <Allroutes />
        
      </div>
     
  )
}

export default App
