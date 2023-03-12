import React from "react"
import "./NewUserSignUp.css"
import faces from "../../../../assets/images/FACES.png"
function NewUserSignUp() {
  return (
    <div className=" pages">
      <div className="pagesfirsthalf">
        <div className=" pagesfirsthalf__header">NESTLE PAY</div>

        <div className=" pages__firsthalf-content">
          <div className="pages__firsthalf-content-text">
            <p style={{ display: "flex", flexDirection: "column" }}>
              <span>Are you a Freelancer? </span>
              Create a one time free invoice without signing in
            </p>
          </div>

          <div className="pages__firsthalf-content-image">
            <img src={faces} alt="faces" /> <p>Join 1,893 People.</p>
          </div>
        </div>
      </div>
      <div className="pages__secondhalf">
        <div className="pages__secondhalf-content">
          <h2>Create an Account</h2>
          <p>
            Tell us a bit about you. Provide your legal name,
            <br></br>
            work mail and home address.
          </p>
          <form>
            <input type="text" className="fullname" placeholder="Full Name" />
            <input type="text" className="email" placeholder="Email Address" />
            <input type="text" className="email" placeholder="Password" />
            <button className="create_btn ">Create Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewUserSignUp
