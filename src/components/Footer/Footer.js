import React from "react"
import "./Footer.css"
import facebook from "../../images/FACEBOOK.png"
import twitter from "../../images/TWITTER.png"
import instagram from "../../images/INSTAGRAM.png"
import linkedin from "../../images/LINKEDIN.png"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
        <img src={linkedin} alt="linkedin" />
      </div>
      <p>help@nestlypay.co</p>
      <p>© 2022. NestlyPay Limited All rights reserved</p>
    </div>
  )
}

export default Footer
