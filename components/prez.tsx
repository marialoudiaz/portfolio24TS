'use client';
import React from 'react';
import Marquee from "react-fast-marquee";
import '../styles/App.scss';
import '../globals.css';
import { useData } from '@/app/context/DataContext'; // Import du contexte
import { useRouter} from 'next/navigation';
import Services from '../components/services';
import {Accordion, AccordionItem} from "@nextui-org/react";


const Prez: React.FC = () => {

  const router = useRouter();
  const { indepArray } = useData(); 
  if (!indepArray || !indepArray[0].presentation || !indepArray[0].expertise || !indepArray[0].cta) {
    return <div>Loading...</div>;
  }
  const { expertise, presentation = [], cta, accordion } = indepArray[0];

  return (
    <>
      <div className='text-homepage'>
        <div className='name'>
        <h1 style={{ color: '#00000000'}}> Maria Lou Diaz | Art Director • Specialized in branding</h1>
        </div>

        <div className='prez'>
            <h4 id='p-hp'> {presentation[0]}</h4>
            <p id='prez-txt'> {presentation[1]}</p>

            <button className='btn-transp' style={{ margin: '2rem auto' }}  onClick={() => router.push('/homepage/#Contact')}>
              <div>
                <svg
                    className="icon-transp"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label='Arrow Icon'
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-white group-hover:fill-gray-400"
                    ></path>
                </svg>
                <p className='btn-transp-p' style={{ color: 'white' }}>
                  {cta[1]}
                </p>
              </div>
            </button>
        </div>

        <Marquee speed={30} style={{ borderTop: '1px solid white', borderBottom: '1px solid white', padding: '1rem' }}>
          <h3 className='syne-bold' style={{ textTransform: 'uppercase'}}>
            {expertise + ' '}
          </h3>
        </Marquee>
      </div>

    <div className='flex-wrap'>
      <Services />
      <div className='flex-wrap' style={{margin:'2rem 0rem', padding:'0rem 1rem'}}>
        <h3>{accordion[1]}</h3>
        <Accordion
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
          >
          <AccordionItem key="1" aria-label={accordion[3]} title={accordion[3]} className='accordion-title'>
            <p>{accordion[4]}</p>
          </AccordionItem>
          <AccordionItem key="2" aria-label={accordion[5]} title={accordion[5]}  className='accordion-title' style={{marginTop:'1rem'}}>
            <p>{accordion[6]}</p>
          </AccordionItem>
        </Accordion>
        <button className='btn-transp-dark' style={{ margin: '2rem auto' }} onClick={() => router.push('/projets')}>
              <div>
                <svg
                    className="icon-transp"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label='Arrow Icon'
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-white group-hover:fill-gray-400"
                    ></path>
                </svg>
                <p className='btn-transp-p' style={{color:'white'}}>{cta[2]}</p>
              </div>
        </button>
      </div>
    </div>

    </>
  );
}

export default Prez;
