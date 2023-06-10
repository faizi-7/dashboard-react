import React from 'react'
import AppCalendar from './AppCalender'
import RightTimeline from './RightTimeline'

const Rightbar = () => {
  return (
    <div className='Rightbar'>
      <div className="calender">

        <AppCalendar/>  
      </div>
      <div className="timelineTitle">
        <div className="timelineHeading">Recent Activity</div>
        <span>View More</span>
      </div>
      <div className="timeline">
        <RightTimeline/>
      </div>
    </div>
  )
}

export default Rightbar