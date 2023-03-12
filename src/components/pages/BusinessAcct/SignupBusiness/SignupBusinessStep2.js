import React from "react"
import faces from "../../../../assets/images/FACES.png"

import "./SignupBusiness.css"

function SignupBusinessStep2() {
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
          <h2>Business Information</h2>
          <p>Provide your business name, business mail and company address.</p>
          <form>
            <input
              type="text"
              className="fullname nomarginbottom"
              placeholder="Company Name"
            />
            <input
              type="text"
              className="fullname nomarginbottom"
              placeholder="Company Email"
            />
            <input
              type="text"
              className="fullname nomarginbottom"
              placeholder="Address One"
            />
            <input
              type="text"
              className="fullname nomarginbottom"
              placeholder="Address Two"
            />

            {/* options input */}
            <div>
              {" "}
              <input
                type="text"
                className="fullname nomarginbottom"
                placeholder="City"
              />
              <select type="text" className="fullname nomarginbottom">
                <option value="" disabled selected>
                  State
                </option>
              </select>
            </div>

            <div>
              {" "}
              <input
                type="text"
                className="fullname nomarginbottom"
                placeholder="Postal City"
              />
              <select type="text" className="fullname nomarginbottom">
                <option value="" disabled selected>
                  Country
                </option>
              </select>
            </div>

            <input
              type="text"
              className="email nomarginbottom"
              placeholder="Website (Optional)"
            />
            <button className="create_btn ">Continue</button>
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

export default SignupBusinessStep2
