import React from 'react'
import CreationList from '../CreationList/CreationList'
import './creation.css'


export default function Creation() {
  return (
    <div className='first'>
        <div className="top">
            <div className="lefty">
                <h2>OUR CREATIONS</h2>

            </div>
            <div className="righty">
                <button>SEE ALL</button>

            </div>

        </div>
        <CreationList/>

    </div>
  )
}
