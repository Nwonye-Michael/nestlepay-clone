import React from "react"
import "./slick.css"
import "./slick-theme.css"
import "./SimpleSlider.css"

import img1 from "../../assets/images/Sliderphoneimg1.png"

import img2 from "../../assets/images/Sliderphoneimg2.png"
import img3 from "../../assets/images/Sliderphoneimg3.png"
import img4 from "../../assets/images/Sliderphoneimg4.png"
import img5 from "../../assets/images/Sliderphoneimg5.png"
import img6 from "../../assets/images/Sliderphoneimg6.png"
import img7 from "../../assets/images/Sliderphoneimg7.png"
import img8 from "../../assets/images/Sliderphoneimg8.png"
import img9 from "../../assets/images/Sliderphoneimg9.png"
import img10 from "../../assets/images/Sliderphoneimg10.png"

import Slider from "react-slick"

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    // autoplay: true,
  }

  const sliderInfo = [
    {
      id: "1",
      title1: "Effortlessly Track Bills and Time",
      title2: "",
      para1: "Follow up on customers with automated payment",
      para2: "reminders and keep track of invoice status so you’ll",
      para3: "never leave money off the table again",
      img: img1,
    },
    {
      id: "2",
      title1: "Effortlessly Track Bills and Time",
      title2: "",
      para1: "Follow up on customers with automated payment",
      para2: "reminders and keep track of invoice status so you’ll",
      para3: "never leave money off the table again",
      img: img2,
    },
    {
      id: "3",
      title1: "Create Free Invoice",

      para1: "Receive payments in one click by creating a free",
      para2: "invoice template for you business or for your Job as",
      para3: "a Freelancer.",
      img: img3,
    },
    {
      id: "4",
      title1: "Create Free Invoice",

      para1: "Receive payments in one click by creating a free",
      para2: "invoice template for you business or for your Job as",
      para3: "a Freelancer.",
      img: img4,
    },
    {
      id: "5",
      title1: "Create Free Invoice",

      para1: "Receive payments in one click by creating a free",
      para2: "invoice template for you business or for your Job as",
      para3: "a Freelancer.",
      img: img5,
    },
    {
      id: "6",
      title1: "Assign Roles and Users",

      para1: "Ease work within your organization by assigning users and",
      para2: "roles. Empower your members to manage transactions and",
      para3: "invoices without sharing the username and password.",
      img: img6,
    },
    {
      id: "7",
      title1: "Assign Roles and Users",

      para1: "Ease work within your organization by assigning users and",
      para2: "roles. Empower your members to manage transactions and",
      para3: "invoices without sharing the username and password.",
      img: img7,
    },
    {
      id: "8",
      title1: "Assign Roles and Users",

      para1: "Ease work within your organization by assigning users and",
      para2: "roles. Empower your members to manage transactions and",
      para3: "invoices without sharing the username and password.",
      img: img8,
    },
    {
      id: "9",
      title1: "Everything You Need to Secure",
      title2: "Your Cashflow",
      para1: "Follow up on customers with automated payment",
      para2: "reminders and keep track of invoice status so you’ll",
      para3: "never leave money off the table again.",
      img: img9,
    },
    {
      id: "10",
      title1: "Everything You Need to Secure",
      title2: "Your Cashflow",
      para1: "Follow up on customers with automated payment",
      para2: "reminders and keep track of invoice status so you’ll",
      para3: "never leave money off the table again.",
      img: img10,
    },
  ]

  return (
    <div className="slider-container">
      {/* <div className="slide__content">
        <div className="slider__content-text">
          <h4>Effortlessly Track Bills and Time</h4>
          <h4 className="second-title"></h4>
          <p>Follow up on customers with automated payment</p>
          <p>reminders and keep track of invoice status so you’ll</p>
          <p>never leave money off the table again.</p>
        </div>
        <div className="slider__content-img">
          <img src={img1} alt="sliderphoneimg" />
        </div>
      </div> */}

      <Slider {...settings}>
        {sliderInfo.map((item) => {
          return (
            <div>
              <div className="slide__content" key={item.id}>
                <div className="slider__content-text">
                  <h4>{item.title1}</h4>
                  {item.title2 && (
                    <h4 className="second-title">{item.title2}</h4>
                  )}
                  <p>{item.para1}</p>
                  <p>{item.para2}</p>
                  <p>{item.para3}</p>
                </div>
                <div className="slider__content-img">
                  <img src={item.img} alt="sliderphoneimg omo " />
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default SimpleSlider
