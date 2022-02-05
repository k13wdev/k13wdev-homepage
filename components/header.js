import { useState, useEffect } from "react"
import Logo from "./logo"
import Navbar from "./navbar"

const Header = () => {
  const [showHeader, showHeaderHandler] = useState(false)

  const transitionHeader = () => {
    if( window.scrollY > 50) {
      showHeaderHandler(true)
    } else {
      showHeaderHandler(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionHeader)
    return () => window.removeEventListener('scroll', transitionHeader)
  }, [])

 
  return (
    <header className={`header ${showHeader ? 'header--blur':''}`}>
      <div className="header__wrapper container">
        <Logo/>
        <Navbar/>
      </div>
    </header>
  )
}

export default Header