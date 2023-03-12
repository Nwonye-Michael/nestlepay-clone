import React from "react"
import "./Confirmation.css"
import Sucessicon from "../../../../../assets/images/sucessicon.png"

function Confirmation() {
  return (
    <div className="confirmation">
      <div className="pages__secondhalf-content confirmation-content">
        <img src={Sucessicon} alt="successicon" />
        <h2>Success</h2>
        <p>Click the link in your email to create a new invoice</p>
      </div>
    </div>
  )
}

export default Confirmation
