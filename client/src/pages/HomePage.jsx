import React from 'react'
import HomeHero from '../components/Home/HomeHero'
import AboutPreview from '../components/Home/AboutPreview.jsx'
import LatestSermon from '../components/Home/LatestSermon.jsx'
import SchoolYouthSection from '../components/Home/SchoolYouthSection.jsx'
import EventsProgrammsPreview from '../components/Home/EventsProgrammsPreview.jsx'
import MissionVisionPreview from '../components/Home/MissionVisionPreview.jsx'
import ConnectPreview from '../components/Home/ConnectPreview.jsx'

function HomePage() {
  return (
    <div>
      <HomeHero />
      <section data-aos="fade-up"><AboutPreview /></section>
      <section data-aos="fade-up"><MissionVisionPreview /></section>
      <section data-aos="zoom-in"><EventsProgrammsPreview /></section>
      <section data-aos="fade-right"><SchoolYouthSection /></section>
      <section data-aos="fade-up"><LatestSermon /></section>
       <section data-aos="fade-up"><ConnectPreview /></section>

    </div>
  )
}

export default HomePage