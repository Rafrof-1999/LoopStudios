/* eslint-disable jsx-a11y/anchor-is-valid */
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
            <li><a><FaFacebookSquare className='icon'/></a></li>
            <li><a><FaTwitterSquare className='icon'/></a></li>
            <li><a><FaInstagramSquare className='icon'/></a></li>
            <li><a><FaPinterestSquare className='icon'/></a></li>
            </ul>

            </div>

        </div>
        <div className="fbottom">
            <div className="fbleft">
                <ul>
                <li><a>About</a></li>
                <li><a>Careers</a></li>
                <li><a>Events</a></li>
                <li><a>Products</a></li>
                <li><a>Support</a></li>

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
