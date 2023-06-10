import React from 'react'
import DashCard from '../DashCard/DashCard'
import CardA from '../../assets/carda.png'
import CardB from '../../assets/cardb.png'
import CardC from '../../assets/cardc.png'
import CardD from '../../assets/cardd.png'
import Chart from '../Chart/Chart'


const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <div className='cards'>
        <DashCard  image= {CardA} cardNo= {2} today= {2} cardTitle= "Goods Received"/>
        <DashCard  image= {CardB} cardNo= {0} today= "null" cardTitle= "Putaway"/>
        <DashCard  image= {CardC} cardNo= {0} today= "null" cardTitle= "Sales Order"/>
        <DashCard  image= {CardD} cardNo= {0} today= "null" cardTitle= "Pick"/>
      </div>
      <div className="charts">
        <Chart/>
        <Chart/>
      </div>
    </div>
  )
}



export default Dashboard