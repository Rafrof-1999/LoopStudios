import React from 'react'
import './creationList.css'
import SingleCreation from '../singleCreation/SingleCreation'
import Earth from '../../images/space-background-with-fictional-planets.jpg'
import Arcade from '../../images/image-night-arcade.a5acf9d0.jpg'
import Soccer from '../../images/image-soccer-team.24ac0872.jpg'
import Grid from '../../images/image-grid.043c26ef.jpg'
import Vr from '../../images/image-from-above.f316f3f3.jpg'
import Pocket from '../../images/image-pocket-borealis.0b89db1f.jpg'
import The from '../../images/image-curiosity.40d51f38.jpg'
import Fisheye from '../../images/image-fisheye.8bb3f74e.jpg'


export default function CreationList() {
  return (
      <div className='group'>
    <SingleCreation img= {Earth} header="Deep Earth"/>
    <SingleCreation img= {Arcade} header="Night Arcade"/>
    <SingleCreation img= {Soccer} header="Soccor Team VR"/>
    <SingleCreation img= {Grid} header="The Grid"/>
    <SingleCreation img= {Vr} header="From up above vr"/>
    <SingleCreation img= {Pocket} header="pocket borealis"/>
    <SingleCreation img= {The} header="the curiosity"/>
    <SingleCreation img= {Fisheye} header="make it fisheye"/>
    </div>
  )
}
