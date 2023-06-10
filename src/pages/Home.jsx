import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Dashboard from '../components/Dashboard/Dashboard'
import Rightbar from '../components/Rightbar/Rightbar'


const Home = () => {
  return (
    <div className="Home">
      <Navbar/>
      <div className="SideMidRight">
        <Sidebar/>
        <Dashboard/>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Home