import React from 'react'
import HomeHero from '../components/Home/HomeHero'
import EventsPreview from '../components/Home/EventsPreview'
import AboutPreview from '../components/Home/AboutPreview.jsx'
import ProgrammsPreview from '../components/Home/ProgramsPreview.jsx'
import SchoolPreview from '../components/Home/SchoolPreview.jsx'
import YouthPreview from '../components/Home/YouthPreview.jsx'
import ServicesPreview from '../components/Home/ServicesPreview.jsx'
import ConnectPreview from '../components/Home/ConnectPreview.jsx'

function HomePage() {
  return (
    <div>
      <HomeHero />
      <AboutPreview />
      <ProgrammsPreview />
       <SchoolPreview />
      <EventsPreview />
       <YouthPreview />
       <ConnectPreview />
       <ServicesPreview />
    </div>
  )
}

export default HomePage