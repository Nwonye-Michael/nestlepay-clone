import React, { useState } from "react"
import "./ForgotPassword.css"
import faces from "../../../../assets/images/FACES.png"
import successalerticon from "../../../../assets/images/successalerticon.png"
import failurealerticon from "../../../../assets/images/failurealerticon.png"

function ForgotPassword() {
  return (
    <div className=" pages">
      <div className="pagesfirsthalf">
        <div className=" pagesfirsthalf__header">NESTLE PAY</div>

        <div className=" pages__firsthalf-content">
          <div className="pages__firsthalf-content-text">
            <p>Start taking steps to manage your business now.</p>
          </div>

          <div className="pages__firsthalf-content-image">
            <img src={faces} alt="faces" /> <p>Join 1,893 People.</p>
          </div>
        </div>
      </div>
      <div className="pages__secondhalf">
        {/* use state to decide alert to display */}
        <div className="alert" style={{ background: "transparent" }}>
          {false && (
            <>
              <div className="alert_edge-success "></div>

              <div className="alert_success-content">
                <img src={successalerticon} alt="success" />
                <div>
                  <h5 style={{}}>Success</h5>
                  <span>Your reset link has been sent to your email.</span>
                </div>
              </div>
            </>
          )}

          {false && (
            <>
              <div className="alert_edge-failure "></div>

              <div className="alert_success-content">
                <img src={failurealerticon} alt="success" />
                <div>
                  <h5 style={{}}>Error</h5>
                  <span>Something went wrong , Try again.</span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="pages__secondhalf-content">
          <h2>Forgot Password?</h2>
          <p style={{ display: "flex", flexDirection: "column" }}>
            Did you forget your password ? Let’s help you
            <span>reset it.</span>
          </p>
          <form>
            <input type="text" className="email" placeholder="Email Address" />
            <button className="create_btn ">Get Reset Link</button>
          </form>
          <p style={{ fontWeight: "450", fontSize: "16px" }}>Back To Sign In</p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
