'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '../../styles/App.scss';
import '../../globals.css';
import Header from '../../components/navbar/header';

const Projets = () => {
  const gridContainerRef = useRef(null);
  const imgContainerRef = useRef([]);
  const { indepArray } = useData();
  const router = useRouter();

  // Set default values for all Hooks
  const [imageSource, setImageSource] = useState('/icons/interface/icon-eye-1.png');

  // Redirect if `indepArray` is not defined
  useEffect(() => {
    if (!indepArray) {
      router.push('/');
    }
  }, [indepArray, router]);
  if (!indepArray) {
    return <div>Loading...</div>;
  }

  // Determine language settings
  const isEnglish = indepArray[0].Lang === 'EN';
  const variableENorFr = [
    ['My projects'],
    ['Mes projets']
  ];
  const textVariables = isEnglish ? variableENorFr[0] : variableENorFr[1];
  const prev = '/icons/interface/icon-eye-1.png';
  const next = '/icons/interface/icon-eye-2.png';

// Menu des projets
  const projectsArr = [
      // onsight
      {
        id: 5,
        title: 'Onsight',
        img: '/projets/os/os-img.png',
        video: '/projets/os/video-onsight.mp4',
      },
      // pile-poele
      {
        id: 6,
        title: 'Pile-Poële',
        img: '/projets/pp/pp-img.png',
        video: '/projets/pp/video_type_hp.mp4',
      },
      // topographies
      {
        id: 7,
        title: 'Topographies',
        img: '/projets/topos/topos-img.png',
        video: '/projets/topos/topos-video.mp4',
      }, 
      //un endroit où aller
      {
        id: 8,
        title: "Un endroit où aller",
        img: '/projets/1eoa/1eoa_2.jpg',
        video: '/projets/1eoa/1eoa-hover.mp4',
      }, 
      //memoire
      {
        id: 9,
        title: "En faveur d'une ...",
        img: '/projets/memoire/memoire1.jpg',
        video: '/projets/memoire/memoire-hover.mp4',
      }, 
  ]; 
  // Functions to handle hover effects and toggling text
  const handleHover = (id:any) => setImageSource(next);
  const handleHoverOut = (id:any) => setImageSource(prev);
  // Function to navigate to project details
  const handleDiscover = (projectId:any) => router.push(`/projet/${projectId}`);

  return (
    <>
      <div className='section' id='projets' style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop: '7rem' }}>
        <Header />
        <h2>{textVariables[0]}</h2>

        <div>
          <div className='grid-container-projets-all' ref={gridContainerRef}>
           
            {projectsArr.map((project, index) => (
              <div 
                className='project-wrapper-all' 
                key={index} 
                onClick={() => handleDiscover(project.id)}
                style={{ marginBottom: '2rem' }}
              >
                <div className='projectImgContainerAll' 
                    ref={(el) => {imgContainerRef.current[index] = el}} 
                    onClick={() => handleDiscover(project.id)}
                >
                  <video className='projectHoverVideoAll' autoPlay loop muted playsInline>
                    <source src={project.video} type='video/mp4' />
                  </video>

                  {project.img.includes('.mp4') ? (
                    <video className='projectImg' autoPlay loop muted playsInline>
                      <source src={`${project.img}`} type='video/mp4' />
                    </video>
                  ) : (
                    <div
                      className='projectImgAll'
                      style={{
                        backgroundImage: `url(${project.img})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                  )}
                </div>

                <div className='flex-center'>
                  <p className='projet-p-all'>{project.title}</p>
                  <div className='carousel-btn-all' style={{ marginLeft: '1rem', marginBottom: '.2rem' }} onClick={()=>handleHover(project.id)}>
                    <Image
                      src={imageSource ?? ''}
                      alt='icon'
                      onMouseOver={()=>handleHover(project.id)}
                      onMouseOut={()=>handleHoverOut(project.id)}
                      width={100}
                      height={0}
                      onClick={() => handleDiscover(project.id)}
                      style={{ display: 'flex', width: '40px', margin: '.2rem 0rem 0rem .3rem', transition: 'transform 2s ease' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

      </div>
    </div>
    </>
  );
};

export default Projets;
