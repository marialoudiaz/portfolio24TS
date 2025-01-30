'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useData } from '../../app/context/DataContext';
import Image from 'next/image';
import logo from '../../public/logo/logo-nav.png';
import { MenuIcon, X } from 'lucide-react';
import '../../styles/App.scss';

function MobileHeader({ isOpen, toggleMenu, infos, onHover, onLeave, hoveredLink }) {

  const router = useRouter();
  const { indepArray } = useData();
  const header = infos;
  const Lang = indepArray[0].lang;
  
  const navLinks = [
    { href: '#Services', label: header[0], id: 'service', route:'/homepage/#Services' },
    { href: '#Projets', label: header[1], id: 'projets', route:'/projets', langz: Lang },
    { href: '#Contact', label: 'Contact', id: 'contact', route:'/homepage/#Contact'}
  ];

  return (
    <>
      <div className='menu-button'>
        {isOpen ? 
        (
          <X style={{ color: 'white' }} size={32} onClick={toggleMenu} />
        ) 
        
        : 
        
        (
          <div className='navbar-container-mobile'>
            <div className='navbar-left' onClick={() => router.push('/homepage')}>
              <Image
                src={logo}
                width={200}
                height={60}
                alt="logo"
              />
            </div>
            <div onClick={toggleMenu}>
              <MenuIcon size={32} />
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <div className='mobile-navbar'>
          <div className='mobile-navbar-container'>

            <div onClick={() => { router.push('/homepage'); toggleMenu(); }}>
              <Image
                className='logo'
                src={logo}
                width={300}
                height={60}
                alt="logo"
                
              />
            </div>

            <div className='navbar-full-items'>
              {navLinks.map(link => (
                <div 
                  key={link.id} 
                  className='button-navbar'
                  onClick={() => { router.push(`${link.route}`); toggleMenu(); }}
                >
                  <p
                    className={hoveredLink === link.id ? 'hovered-link' : ''}
                    onMouseEnter={() => onHover(link.id)}
                    onMouseLeave={onLeave}
                  >
                    {link.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileHeader;
