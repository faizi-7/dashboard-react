import React from 'react'
import './dashcard.css'
import { Image } from 'antd'

const DashCard = (props) => {
  return (
    <div className='card'>
        <div className='top-card'>
            <Image src={props.image}/>
            <span>Today: {props.today}</span>
        </div>
        <span className='card-no'>{props.cardNo}</span>
        <span className='card-sub'>{props.cardTitle}</span>
    </div>
  )
}

export default DashCard