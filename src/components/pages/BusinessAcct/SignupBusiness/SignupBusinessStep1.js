import React from "react"
import faces from "../../../../assets/images/FACES.png"
import "./SignupBusiness.css"

function SignupBusinessStep1() {
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
          <h2>Personal Information</h2>
          <p>Provide your legal name and work mail.</p>
          <form>
            <input type="text" className="fullname" placeholder="First Name" />
            <input type="text" className="fullname" placeholder="Last Name" />
            <input type="text" className="email" placeholder="Email Address" />
            <button className="create_btn ">Continue</button>
          </form>
          {/* <p>
            Already Have an Account?{" "}
            <span className="signin signup">Sign In</span>
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default SignupBusinessStep1
