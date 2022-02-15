import React from 'react'
import './singleCreation.css'

export default function SingleCreation({img,header}) {
  return (
    <div className="item">
    <img className='image' src={img} alt="" />
    <p className='subtitle'>{header}</p>
  </div>

  )
}
