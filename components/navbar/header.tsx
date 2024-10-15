'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useData } from '../../app/context/DataContext';
import '../../styles/App.scss';
import Image from 'next/image';
import logo from '../../public/logo/logo-nav.png';
import Link from "next/link";
import MobileNavbar from '../navbar/mobileHeader';


interface HeaderProps {
  infos: {
    header: string[]
  }
}

const Header: React.FC<HeaderProps> = ({infos}) => {

//Variables
  const router = useRouter();
  const { data } = useData();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
//Fonctions
  const handleClick = () => {
    if (data && data.length > 0 && data[0]?.ids) {
      router.push(`/homepage/${data[0].ids}`);
      window.scrollTo(0, 0);
    } else {
      console.error('Stored info or ID is undefined');
    }
  };
  const onHover = (link) => {
    setHoveredLink(link);
  };
  const onLeave = () => {
    setHoveredLink(null);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar desktop */}
      <div className="navbar hidden md:block"> {/* Media query via Tailwind CSS or your CSS file */}
        <div className='navbar-container'>
          <div className='navbar-left' onClick={handleClick}>
            <Image src={logo} width={220} height={120} alt="logo" />
          </div>
          <div className='navbar-right'>
            <Link href='#Services' className='button-navbar'>
              <p
                className={hoveredLink === 'service' ? 'hovered-link' : ''}
                onMouseEnter={() => onHover('service')}
                onMouseLeave={onLeave}
              >
                {infos.header[0]}
              </p>
            </Link>
            <Link href='#Source' className='button-navbar'>
              <p
                className={hoveredLink === 'source' ? 'hovered-link' : ''}
                onMouseEnter={() => onHover('source')}
                onMouseLeave={onLeave}
              >
                {infos.header[1]}
              </p>
            </Link>
            {/* <Link href='#Source' className='button-navbar'>
              <p
                className={hoveredLink === 'source' ? 'hovered-link' : ''}
                onMouseEnter={() => onHover('source')}
                onMouseLeave={onLeave}
              >
                La Source
              </p>
            </Link> */}
            <Link href='#Contact' className='button-navbar' id='contact-btn'>
              <p
                className={hoveredLink === 'contact' ? 'hovered-link' : ''}
                onMouseEnter={() => onHover('contact')}
                onMouseLeave={onLeave}
              >
                Contact
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar mobile */}
      <div className="md:hidden"> {/* Cache sur les écrans >= 768px */}
        <MobileNavbar isOpen={isOpen} infos={infos.header} toggleMenu={toggleMenu} />
      </div>
    </>
  );
};

export default Header;
