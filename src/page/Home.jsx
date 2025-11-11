import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import About from '../components/About'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Footer from '../components/Footer'
import FooterB from '../components/FooterB'

const Home = () => {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Footer></Footer>
      <FooterB></FooterB>
    </>
  )
}

export default Home