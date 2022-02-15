import React from 'react'
import "./intro.css"

export default function Intro() {
  return (
    <div className='container'>
        <div className='topbar'>
            <div className='left'>
                <h2>loopstudios</h2>

            </div>
            <div className='right'>
                <ul className='sections'>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Support</a></li>
                </ul>

            </div>
        </div>
        <div className="box">
            <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>

        </div>

    </div>
  )
}
