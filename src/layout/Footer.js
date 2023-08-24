import React from 'react';
import './Footer.css';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa6';

function Footer() {
  return (
    <footer className='footer'>
        <ul className='social-list'>
            <li>
                <FaFacebook/>
            </li>
            <li>
                <FaInstagram/>
            </li>
            <li>
                <FaLinkedin/>
            </li>
        </ul>
        <p className='copy-right'>
            <span>Costs</span> &copy; 2023
            </p>
    </footer>
  )
}

export default Footer