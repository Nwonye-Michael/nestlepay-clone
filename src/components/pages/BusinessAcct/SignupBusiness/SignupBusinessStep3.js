import React from "react"
import faces from "../../../../assets/images/FACES.png"
import "./SignupBusiness.css"

function SignupBusinessStep3() {
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
          <h2>One Last Step</h2>
          <p>
            Avoid easily guessable password, and make <br />
            sure it is easy to remember.
          </p>
          <form>
            <input type="text" className="fullname" placeholder="Password" />
            <input
              type="text"
              className="fullname"
              placeholder="Confirm Password"
            />

            <button className="create_btn ">Create Account</button>
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

export default SignupBusinessStep3
