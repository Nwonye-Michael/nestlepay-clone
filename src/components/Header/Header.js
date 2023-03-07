import React from "react"
import "./Header.css"
import logo from "../../images/LOGO.png"

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />

      <button className="header__signin">Sign In </button>
    </header>
  )
}

export default Header
