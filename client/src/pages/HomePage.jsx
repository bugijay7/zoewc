import React from 'react'
import HomeHero from '../components/Home/HomeHero'
import EventsPreview from '../components/Home/EventsPreview'
import AboutPreview from '../components/Home/AboutPreview.jsx'
import ProgrammsPreview from '../components/Home/ProgramsPreview.jsx'
import SchoolPreview from '../components/Home/SchoolPreview.jsx'
import YouthPreview from '../components/Home/YouthPreview.jsx'
import ServicesPreview from '../components/Home/ServicesPreview.jsx'
import ConnectPreview from '../components/Home/ConnectPreview.jsx'
import LatestSermon from '../components/Home/LatestSermon.jsx'

function HomePage() {
  return (
    <div>
      <HomeHero />
      <section data-aos="fade-up"><AboutPreview /></section>
      <section data-aos="zoom-in"><ProgrammsPreview /></section>
      <section data-aos="fade-right"><SchoolPreview /></section>
      <section data-aos="fade-left"><EventsPreview /></section>
      <section data-aos="flip-up"><YouthPreview /></section>
      <section data-aos="fade-up"><LatestSermon /></section>

    </div>
  )
}

export default HomePage