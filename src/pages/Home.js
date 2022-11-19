import React from 'react'
import Header from "../Component/Header/Header"
import Navigation from '../Component/navigation/Navigation'
import About from "../Component/About/About"
import Experience from "../Component/Experience/Experience"
import Services from "../Component/Services/Services"
import Contact from "../Component/Contact/Contact"
import Footer from "../Component/Footer/Footer"


const Home = () => {
  return (
    <>
      <Header/>
      <Navigation/>
      <About/>
      <Experience/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home