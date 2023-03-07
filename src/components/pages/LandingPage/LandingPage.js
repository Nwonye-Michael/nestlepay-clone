import React from "react"
import Header from "../../Header/Header"
import "./LandingPage.css"
import frameImg from "../../../images/FrameImg1.png"
import righticon from "../../../images/rightimage.png"
import SimpleSlider from "../../../UI/Slider/SimpleSlider"
import bottomimg1 from "../../../images/bottomsection1.png"
import bottomimg2 from "../../../images/bottomsection2.png"

function LandingPage() {
  return (
    <div className="landingpage">
      <h1 className="landingpage__header">
        <span>Connecting Businesses for</span>
        <span>Simplified Payments.</span>
      </h1>
      <div className="tagline-container">
        {" "}
        <div className="tagline">
          <span>
            Create and send invoices, manage your finance, track sales, and
          </span>
          <span>get paid faster.</span>
        </div>
      </div>
      <button className="create__btn">Create free Invoice</button>
      <img src={frameImg} alt="frameimg1" className="frame__img" />
      <div className="h1__content">
        <p>
          Never chase a client again. Speed up your cash flow and manage our
          business at your
        </p>
        <p>
          fingertips. Let Nestlypay help with the hard work, while you focus on
          your business.
        </p>
        <p className="h1__content-3">
          Get a fast invoice today <img src={righticon} alt="righticon" />{" "}
        </p>
      </div>

      <SimpleSlider />

      <section className="bottom__section">
        <div className="bottom__section-text">
          <h2>
            <span>Ready to Grow Your </span>
            <span>Business in One Solution?</span>
          </h2>

          <p>
            Say hello to Nestlypay, a platform that enables you to send
            professional invoices, save time, digitalize your bills and manage
            your business in minutes.
          </p>
          <div className="bottom__section-button">
            {" "}
            <button>Get Started</button>
          </div>
        </div>

        {/* <div>
          {" "}
          <div className="bottomsectionphoneimg-container">
            {" "}
            <img
              src={bottomimg1}
              alt="bottomsectionphoneimg"
              className="bottomsectionphoneimg"
            />
            <img
              src={bottomimg2}
              alt="bottomsectionlaptopimg"
              className="bottomsectionlaptopimg"
            />
          </div>

        </div> */}

        <div className="bottom__section-images">
          <img src={bottomimg1} alt="phoneimg" className="phoneimg" />
          <img src={bottomimg2} alt="laptopimg" className="laptopimg" />
        </div>
      </section>
    </div>
  )
}

export default LandingPage
