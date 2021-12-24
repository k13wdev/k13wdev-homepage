import Logo from "./logo"
import Navbar from "./navbar"

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <Logo/>
        <Navbar/>
      </div>
    </header>
  )
}

export default Header