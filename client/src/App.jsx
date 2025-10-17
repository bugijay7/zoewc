import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import EventsPage from './pages/EventsPage'
import Sermons from './pages/Sermons'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import DonationPage from './pages/DonationPage' 
import DepartmentsPage from './pages/DepartmentsPage'
import Programs from './pages/Programs'
import LiveStream from './pages/LiveStream'
import NewMembers from './pages/NewMembers'
import Services from './pages/Services'

import TeenDepartments from './pages/departments/main/teensDepartment'
import MenDepartment from "./pages/departments/main/menDepartment"
import WomenDepartment from "./pages/departments/main/womenDepartment"
import YouthDepartment from "./pages/departments/main/youthDepartment"
import SundaySchool from "./pages/departments/main/sundaySchool"

import MainDepartment from './pages/departments/mainDepartments'
import SupportiveDepartment from './pages/departments/supportiveDepartments'

import Anakazo from './pages/departments/supportive/Anakazo'
import Hospitality from './pages/departments/supportive/Hospitality'
import IntercessoryDept from './pages/departments/supportive/IntercessoryDept'
import MediaDept from './pages/departments/supportive/MediaDept'
import PraiseAndWorship from './pages/departments/supportive/PraiseAndWorship'
import Ushering from './pages/departments/supportive/Ushering'

import MainEvent from './pages/Events/MainEvent'
import EventList from './pages/Events/EventList'
import EventDetails from './pages/Events/EventDetails'

import KnowUs from './pages/About/KnowUs'
import History from './pages/About/History'
import Culture from './pages/About/Culture'
import Impact from './pages/About/Impact'
import Leadership from './pages/About/Leadership'
import FaithStatement from './pages/About/FaithStatement'
import Anthem from './pages/About/Anthem'




import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Admin/Login'
import CreateEvent from './pages/Admin/Dashboard/CreateEvent'
import ManageEvent from './pages/Admin/Dashboard/ManageEvent'
import AdminDashboard from './pages/AdminDashboard'
import ManageSermons from './pages/Admin/Dashboard/ManageSermons'
import CreateSermons from './pages/Admin/Dashboard/CreateSermons'

import AdminLayout from './layout/AdminLayout'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/live" element={<LiveStream />} />
        <Route path="/services" element={<Services />} />

        { /* departments Routes */ }
        <Route path="/departments/main" element={<MainDepartment />} />
        <Route path="/departments/supportive" element={<SupportiveDepartment />} />


        { /* main Departments Routes */ }
        <Route path="/departments/main/men" element={<MenDepartment />} />
        <Route path="/departments/main/women" element={<WomenDepartment />} />
        <Route path="/departments/main/youth" element={<YouthDepartment />} />
        <Route path="/departments/main/sundaySchool" element={<SundaySchool />} />
        <Route path="/departments/main/teen" element={<TeenDepartments />} />

        { /* supportive Departments Routes */ }
        <Route path="/departments/supportive/anakazo" element={<Anakazo />} />
        <Route path="/departments/supportive/hospitality" element={<Hospitality />} />
        <Route path="/departments/supportive/intercessory" element={<IntercessoryDept />} />
        <Route path="/departments/supportive/media" element={<MediaDept />} />
        <Route path="/departments/supportive/praiseAndWorship" element={<PraiseAndWorship />} />
        <Route path="/departments/supportive/ushering" element={<Ushering />} />


      { /* Event Routes*/ }
      <Route path="/events/mainEvent" element={<MainEvent />} />
      <Route path="/events/eventList" element={<EventList />} />
      <Route path="/events/eventDetails" element={<EventDetails />} /> 

      { /* About Routes */}
      <Route path="/about/knowUs" element={<KnowUs />} />
      <Route path="/about/history" element={<History />} />
      <Route path="/about/culture" element={<Culture />} />
      <Route path="/about/impact" element={<Impact />} /> 
      <Route path="/about/leadership" element={<Leadership />} />
      <Route path="/about/faithStatement" element={<FaithStatement />} />
      <Route path="/about/anthem" element={<Anthem />} />

      { /* New Members Route */}
      <Route path="/new" element={<NewMembers />} />

     {/* 🔹 Admin Login (no navbar) */}
        <Route path="/login" element={<Login />} />

        {/* 🔹 Admin Dashboard Routes (with AdminNavbar) */}
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/dashboard/create-event" element={<CreateEvent />} />
          <Route path="/dashboard/manage-events" element={<ManageEvent />} />
          <Route path="/dashboard/create-sermon" element={<CreateSermons />} />
          <Route path="/dashboard/manage-sermons" element={<ManageSermons />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
