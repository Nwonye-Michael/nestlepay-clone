import React from "react"
import "./UpdatePassword.css"
import faces from "../../../../assets/images/FACES.png"

function UpdatePassword() {
  return (
    <div className=" pages">
      <div className="pagesfirsthalf">
        <div className=" pagesfirsthalf__header">NESTLE PAY</div>

        <div className=" pages__firsthalf-content">
          <div className="pages__firsthalf-content-text">
            <p style={{ display: "flex", flexDirection: "column" }}>
              Start taking steps to manage your business now.
            </p>
          </div>

          <div className="pages__firsthalf-content-image">
            <img src={faces} alt="faces" /> <p>Join 1,893 People.</p>
          </div>
        </div>
      </div>
      <div className="pages__secondhalf">
        <div className="pages__secondhalf-content">
          <h2>Reset Password</h2>

          <form>
            <input
              type="text"
              className="fullname"
              placeholder="New Password"
            />
            <input
              type="text"
              className="email"
              placeholder="Confirm Password"
            />

            <button className="create_btn ">Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdatePassword
