import React from "react"
import { useNavigate } from "react-router-dom"
import "./MasterAuth.css"
import faces from "../../../assets/images/FACES.png"
import businessicon from "../../../assets/images/Businessicon.png"
import personalicon from "../../../assets/images/Personalicon.png"

function MasterAuth() {
  const navigate = useNavigate()
  return (
    <div className="masterauth pages">
      <div className="masterauth__firsthalf pagesfirsthalf">
        <div className="masterauth__header pagesfirsthalf__header">
          NESTLE PAY
        </div>

        <div className="masterauth__firsthalf-content pages__firsthalf-content">
          <div className="masterauth__firsthalf-content-text pages__firsthalf-content-text">
            <p>Start taking steps to manage your business now.</p>
          </div>

          <div className="masterauth__firsthalf-content-image pages__firsthalf-content-image">
            <img src={faces} alt="faces" /> <p>Join 1,893 People.</p>
          </div>
        </div>
      </div>
      <div className="masterauth__secondhalf pages__secondhalf">
        <div className="masterauth__secondhalf-content pages__secondhalf-content">
          <h2>Choose your account type</h2>
          <p>
            Get a downloadable receipts on every invoice payment as a reference
            to help your business in management and accounting.
          </p>

          <div className="masterauth__secondhalf-content-business">
            <img src={businessicon} alt="businessicon" />
            <div
              className="masterauth__secondhalf-content-business-text"
              onClick={() => {
                navigate("/signin/business")
              }}
            >
              <p>Business</p>
              <p>Create invoice as a business</p>
            </div>
          </div>
          <div className="masterauth__secondhalf-content-personal">
            <img src={personalicon} alt="personalicon" />
            <div
              className="masterauth__secondhalf-content-personal-text"
              onClick={() => {
                navigate("/signin/personal")
              }}
            >
              <p>Personal</p>
              <p>Create a one-time invoice as a freelancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="masterauth pages">
    //   <div className="masterauth__firsthalf pagesfirsthalf">
    //     <div className="masterauth__header pagesfirsthalf__header">
    //       NESTLE PAY
    //     </div>

    //     <div className="masterauth__firsthalf-content pages__firsthalf-content">
    //       <div className="masterauth__firsthalf-content-text pages__firsthalf-content-text">
    //         <p>Start taking steps to manage your business now.</p>
    //       </div>

    //       <div className="masterauth__firsthalf-content-image pages__firsthalf-content-image">
    //         <img src={faces} alt="faces" /> <p>Join 1,893 People.</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="masterauth__secondhalf pages__secondhalf">
    //     <div className="masterauth__secondhalf-content pages__secondhalf-content">
    //       <h2>Choose your account type</h2>
    //     </div>
    //   </div>
    // </div>
  )
}

export default MasterAuth
