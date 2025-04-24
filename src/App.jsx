import {useState, useRef, useEffect} from 'react'

import './App.css'

import { useMediaQuery } from 'react-responsive'

import { IoMenuOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";


import Navbar from './components/Navbar/Navbar'
import NavbarMobile from './components/NavbarMobile/NavbarMobile'
import Footer from './components/Footer/Footer'

const App = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <>

      {isDesktopOrLaptop && <div className="nav-container"><Navbar/> <FaReact id='logo' /></div>}
      {isTabletOrMobile && <div className="nav-container"><IoMenuOutline id='menu-icon'/> <NavbarMobile /> <FaReact id='logo' /></div>}

      <Footer />

    </>
  )
}

export default App