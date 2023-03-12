import React from "react"
import faces from "../../../../assets/images/FACES.png"
import "./Signup.css"
// import "../../MasterAuth/MasterAuth.css"

function FreeReceipt() {
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
          <h2>Create free Invoice</h2>
          <p>Create a one time free invoice without signing up.</p>
          <form>
            <input type="text" className="fullname" placeholder="Full Name" />
            <input type="text" className="email" placeholder="Email Address" />
            <button className="create_btn ">Create Now</button>
          </form>
          <p>
            Already Have an Account?{" "}
            <span className="signin signup">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FreeReceipt
