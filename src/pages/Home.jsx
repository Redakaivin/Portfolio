import React from 'react'
import NavBar from '../components/NavBar'
import { StarBackground } from '../components/StarBackground'
import {HeroSection} from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import {SkillsSection} from '../components/SkillsSection'
const Home = () => {
  return (
    <div>
        <NavBar/>
        <StarBackground/>
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
        </main>
    </div>
  )
}

export default Home
