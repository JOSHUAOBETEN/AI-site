import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'
import { footerLinks } from '../../constants';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding' id='footer'>
        <div className='gpt3__footer-heading'>
          <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        </div>

        <div className='gpt3__footer-btn'>
          <p>Request Early Access</p>
        </div>

        <div className='gpt3__footer-links'>
          <div className='gpt3__footer-links_logo'>
            <img src={gpt3Logo} alt="logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className='gpt3__footer-links_div'>
            {footerLinks.map((footerLink) =>
            <div className='gpt3__footer-links_div-content' key={footerLink.key}>
              <h4>{footerLink.title}</h4>,
              <ul>
                {footerLink.links.map((link, index) =>
                <li key={link.name}>{link.name}</li>  
                )}
              </ul>
            </div>
            )}
          </div>
        </div>

        <div className='gpt3__footer-copyright'>
          <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer