import React from 'react'
import './footer.css'
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Usman Asif</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com"><FiFacebook /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
        <a href="https://www.twitter.com"><FiTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Usman Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}
export default Footer
