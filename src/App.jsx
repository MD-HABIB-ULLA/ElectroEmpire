// import { useState } from 'react'

import { Outlet } from 'react-router-dom'

import Navber from './components/layout/Navber/Navber'
// import Home from './pages/Home/Home'
import Footer from './components/layout/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navber/>
    <Outlet/>
    <Footer/>
     
    </>
  )
}

export default App
