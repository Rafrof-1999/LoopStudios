import React from 'react'
import './footer.css'
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaInstagramSquare } from 'react-icons/fa';
export default function Footer() {
  return (
    <div className='fcontainer'>
        <div className="ftop">
            <div className="ftleft">
            <h2>loopstudios</h2>

            </div>

            <div className="ftright">
                <ul>
            <li><a href=""><FaFacebookSquare className='icon'/></a></li>
            <li><a href=""><FaTwitterSquare className='icon'/></a></li>
            <li><a href=""><FaInstagramSquare className='icon'/></a></li>
            <li><a href=""><FaPinterestSquare className='icon'/></a></li>
            </ul>

            </div>

        </div>
        <div className="fbottom">
            <div className="fbleft">
                <ul>
                <li><a href="">About</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Events</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Support</a></li>

                </ul>

            </div>
            <div className="fbright">
                <h3>
                © 2022 Loopstudios. All rights reserved.
                </h3>

            </div>

        </div>
        
    </div>
  )
}
