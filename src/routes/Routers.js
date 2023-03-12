import React from "react"
// import { Routes, Route, Navigate } from "react-router-dom"

import { Route, Routes, Navigate } from "react-router-dom"

import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import SignInBusiness from "../components/pages/BusinessAcct/SignInBusiness/SignInBusiness"
import SignupBusinessStep1 from "../components/pages/BusinessAcct/SignupBusiness/SignupBusinessStep1"
import SignupBusinessStep2 from "../components/pages/BusinessAcct/SignupBusiness/SignupBusinessStep2"
import SignupBusinessStep3 from "../components/pages/BusinessAcct/SignupBusiness/SignupBusinessStep3"
import LandingPage from "../components/pages/LandingPage/LandingPage"
import MasterAuth from "../components/pages/MasterAuth/MasterAuth"
import NewUserSignUp from "../components/pages/PersonalAcct/CreateNewUser/NewUserSignUp"
import ForgotPassword from "../components/pages/PersonalAcct/ForgotPassword/ForgotPassword"
import SIgnIn from "../components/pages/PersonalAcct/SignIn/SIgnIn"
import Confirmation from "../components/pages/PersonalAcct/SignUp/Confirmation/Confirmation"
import FreeReceipt from "../components/pages/PersonalAcct/SignUp/FreeReceipt"
import SignUp from "../components/pages/PersonalAcct/SignUp/FreeReceipt"
import UpdatePassword from "../components/pages/PersonalAcct/UpdatePassword/UpdatePassword"

function Routers() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/signin/auth" element={<MasterAuth />} />
        {/* rename the signin as create free invoice */}
        <Route path="/free" element={<FreeReceipt />} />
        <Route path="/signup/personal" element={<NewUserSignUp />} />
        <Route path="/signin/personal" element={<SIgnIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />
        <Route path="/signup/business/1" element={<SignupBusinessStep1 />} />
        <Route path="/signup/business/2" element={<SignupBusinessStep2 />} />
        <Route path="/signup/business/3" element={<SignupBusinessStep3 />} />
        <Route path="/signin/business" element={<SignInBusiness />} />
      </Routes>
      <Footer />
      {/* <Header />
      <Footer />

      <Confirmation /> */}
    </div>
  )
}

export default Routers
