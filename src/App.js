import React from "react"
import "./index.css"

import LandingPage from "./components/pages/LandingPage/LandingPage"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import PageTemp from "./UI/PagesTemp/PageTemp"

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />

      <Footer />

      {/* <PageTemp /> */}
    </div>
  )
}

export default App
