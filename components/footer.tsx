// "use client";
import React from 'react';
import '../styles/App.scss';

interface FooterProps {
  infos: {
    location: string[];
  };
}
const Footer: React.FC<FooterProps> = ({infos}) => {

  return(
      <>
        <div className='footer'>
          <div>
            <p className="footer-p">{infos.location[0]} {infos.location[1]}</p>
          </div>
        </div>
      </>
  )
  };

export default Footer;
