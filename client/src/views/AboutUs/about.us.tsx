import React from 'react'
import Footer from '../../components/Footer/footer.component'
import Header from '../../components/Header/header.component'
import '../AboutUs/about.us.style.scss'
import AboutUsHandling from './about.us.handling'
import AboutUsProject from './about.us.project'
import AboutUsSolution from './about.us.solution'
import AboutUsProTeam from './about.us.team'
import AboutUsMotivation from './about.us.motivation'
import AboutUsService from './about.us.services'
const AboutUs = () => {
  return (
    <div className='aboutUs' >
      <Header/>
      <AboutUsSolution/>
      <AboutUsProTeam/>
      <AboutUsHandling/>
      <AboutUsProject/>
      <AboutUsMotivation/>
      <AboutUsService/>
      <Footer/>
    </div>
  )
}

export default AboutUs