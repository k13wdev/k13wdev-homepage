import Link from "next/link"
import {SunIcon, MoonIcon, MenuIcon, XIcon} from "@heroicons/react/outline"

const Navbar = () => {

  return (
    <nav className="navbar">
      <ul className="menu-list">
        <li>
          <Link href="/work">
            <a>Work</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar