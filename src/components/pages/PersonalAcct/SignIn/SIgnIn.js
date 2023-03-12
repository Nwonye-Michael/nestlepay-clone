import React from "react"
import { useNavigate } from "react-router-dom"
import faces from "../../../../assets/images/FACES.png"
import "./SignIn.css"
function SIgnIn() {
  const navigate = useNavigate()
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
        <div className="pages__secondhalf-content">
          <h2>Welcome Back!</h2>
          <p>Pick up where you left off.</p>
          <form>
            <input type="text" className="fullname" placeholder="Full Name" />
            <input type="text" className="email" placeholder="Email Address" />
            <button className="create_btn ">SIgn In</button>
          </form>
          <p className="marginautos">
            Don’t Have an Account?{" "}
            <span
              className="signin signup"
              onClick={() => {
                navigate("/signin/auth")
              }}
            >
              Create One
            </span>
          </p>
          <p className="forgotpassword marginautos">Forgot Password</p>
        </div>
      </div>
    </div>
  )
}

export default SIgnIn
