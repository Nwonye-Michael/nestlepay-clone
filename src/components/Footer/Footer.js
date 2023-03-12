import React from "react"
import "./Footer.css"
import facebook from "../../assets/images/FACEBOOK.png"
import twitter from "../../assets/images/TWITTER.png"
import instagram from "../../assets/images/INSTAGRAM.png"
import linkedin from "../../assets/images/LINKEDIN.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
        <img src={linkedin} alt="linkedin" />
      </div>
      <p>help@nestlypay.co</p>
      <p>© 2022. NestlyPay Limited All rights reserved</p>
    </footer>
  )
}

export default Footer
