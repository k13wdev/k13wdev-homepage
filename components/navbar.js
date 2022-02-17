import Link from "next/link"
import {MenuIcon, XIcon} from "@heroicons/react/outline"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const buttonClickHandler = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <nav className="navbar">
      <button type="button" className="button-menu" onClick={buttonClickHandler}>
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          {isOpen ? <XIcon width={32} height={32}/> : <MenuIcon width={32} height="32"/>}
      </button>
      
      <ul className={`menu-list ${isOpen ? 'isOpen' : 'isClose'}`}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/k13wdev">
            <a target="_blank">GitHub</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar