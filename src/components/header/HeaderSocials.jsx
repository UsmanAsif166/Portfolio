import React from 'react'
import {BsLinkedin, BsDribbble} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a rel="noreferrer" href="https://www.linkedin.com/in/usman-asif-32b24312a/" target='_blank'><BsLinkedin /></a>
        <a rel="noreferrer" href="https://github.com/Acidier" target='_blank'><FaGithub /></a>
        <a rel="noreferrer" href="https://dribbble.com/Usman166" target='_blank'><BsDribbble /></a>
    </div>
  )
}

export default HeaderSocials