import React from "react"
import "./Header.css"
import logo from "../../assets/images/LOGO.png"
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />

      <button
        className="header__signin"
        onClick={() => {
          navigate("/signin/auth")
        }}
      >
        Sign In{" "}
      </button>
    </header>
  )
}

export default Header
