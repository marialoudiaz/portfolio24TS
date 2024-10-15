'use client';
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import logo from '../../public/logo/logo-nav.png';
import { MenuIcon, X} from 'lucide-react';
import '../../styles/App.scss'

function mobileHeader({isOpen, toggleMenu, infos}) {
  let header = infos;

  return (
    <>
        <div className='menu-button' onClick={toggleMenu}>
          {isOpen ? 
          <X style={{color:'white'}} size={32}/>   
          : 
           <>
          <div className='navbar-container-mobile'>
            <div className='navbar-left'>
              <Image src={logo} width={200} height={60} alt="logo" />
            </div>
            <div>
              <MenuIcon size={32}/> 
            </div>
          </div>
          </>
          }
        </div>


        {isOpen && (
          <div className='mobile-navbar'>

            <div className='mobile-navbar-container'>

              <div>
                <Image
                  className='logo'
                  src={logo}
                  width={300}
                  height={60}
                  alt="logo"
                />
              </div>

            <div className='navbar-full-items'>
              <Link href='#Services' className='mobile-button-navbar'>
                <p id='#Service'>{header[0]}</p>
              </Link>
              <Link href='#Services' className='mobile-button-navbar'>
                <p id='#Service'>{header[1]}</p>
              </Link>
              {/* <Link href='#Source' className='mobile-button-navbar'>
                <p id='#Sourc'>La Source</p>
              </Link> */}
              <Link href='#Contact' className='mobile-button-navbar'>
                <p id='#Contac'>Contact</p>
              </Link>
            </div>

            </div>
      </div>
      )}
    </>
  );
}
export default mobileHeader