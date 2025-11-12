import React from 'react'
import HomeHero from '../components/Home/HomeHero'
import EventsPreview from '../components/Home/EventsPreview'
import LatestSermon from '../components/Home/LatestSermon.jsx'
import AboutConnectSection from '../components/Home/AboutConnectionSection.jsx'
import SchoolYouthSection from '../components/Home/SchoolYouthSection.jsx'
import EventsProgrammsPreview from '../components/Home/EventsProgrammsPreview.jsx'
import MissionVisionPreview from '../components/Home/MissionVisionPreview.jsx'

function HomePage() {
  return (
    <div>
      <HomeHero />
      <section data-aos="fade-up"><MissionVisionPreview /></section>
      <section data-aos="fade-up"><AboutConnectSection /></section>
      <section data-aos="zoom-in"><EventsProgrammsPreview /></section>
      <section data-aos="fade-right"><SchoolYouthSection /></section>
      <section data-aos="fade-up"><LatestSermon /></section>

    </div>
  )
}

export default HomePage