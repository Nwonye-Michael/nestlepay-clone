import React from "react"
import "./index.css"

import { BrowserRouter as Router } from "react-router-dom"

import LandingPage from "./components/pages/LandingPage/LandingPage"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

import MasterAuth from "./components/pages/MasterAuth/MasterAuth"
import SignUp from "./components/pages/PersonalAcct/SignUp/FreeReceipt"
import Confirmation from "./components/pages/PersonalAcct/SignUp/Confirmation/Confirmation"
import SIgnIn from "./components/pages/PersonalAcct/SignIn/SIgnIn"
import ForgotPassword from "./components/pages/PersonalAcct/ForgotPassword/ForgotPassword"
import NewUserSignUp from "./components/pages/PersonalAcct/CreateNewUser/NewUserSignUp"
import UpdatePassword from "./components/pages/PersonalAcct/UpdatePassword/UpdatePassword"

import SignupBusinessStep1 from "./components/pages/BusinessAcct/SignupBusiness/SignupBusinessStep1"
import SignupBusinessStep2 from "./components/pages/BusinessAcct/SignupBusiness/SignupBusinessStep2"
import SignupBusinessStep3 from "./components/pages/BusinessAcct/SignupBusiness/SignupBusinessStep3"
import SignInBusiness from "./components/pages/BusinessAcct/SignInBusiness/SignInBusiness"
import Routers from "./routes/Routers"
import FreeReceipt from "./components/pages/PersonalAcct/SignUp/FreeReceipt"

function App() {
  return (
    <div className="App">
      {/* <Header />
      <LandingPage />

      <Footer /> */}
      {/* <MasterAuth /> */}
      {/* <FreeReceipt /> */}
      {/* <Confirmation /> */}
      {/* <SIgnIn /> */}
      {/* <ForgotPassword /> */}
      {/* <NewUserSignUp /> */}
      {/* <UpdatePassword /> */}
      {/* <SignupBusinessStep1 /> */}
      {/* <SignupBusinessStep2 /> */}
      {/* <SignupBusinessStep3 /> */}
      {/* <SignInBusiness /> */}

      {/* <Header /> */}

      <Router>
        <Routers />
      </Router>

      {/* <Footer /> */}
    </div>
  )
}

export default App
