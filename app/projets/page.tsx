'use client'
import React, { useRef, useState, useEffect } from 'react';
import { useData } from '../context/DataContext'; // Importer le contexte
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../styles/App.scss';
import '../../globals.css';
import Header from '../../components/navbar/header';
import '../../styles/App.scss';


const Projets = () => {

    const { indepArray } = useData();
    const router = useRouter();
    useEffect(()=>{
      if (!indepArray){
        router.push('/');
      }
    }, [indepArray])

      //Determiner la langue et affiche en fonction
      const isEnglish = indepArray[0].lang === 'EN';
      const variableENorFr = [
        ['My projects', 'Discover', 'Previous', 'scroll right to learn more', 'Discover my other projects'],
        ['Mes projets', 'Découvrir', 'Précédent', 'scroller à droite pour en apprendre +', 'Découvrir mes autres projets'],];
      const textVariables = isEnglish ? variableENorFr[0] : variableENorFr[1];
      const prev = '/icons/interface/icon-eye-1.png';
      const next= '/icons/interface/icon-eye-2.png';
    //Variables
      const gridContainerRef = useRef<HTMLDivElement>(null);
      const descriptionRef = useRef<HTMLDivElement>(null);
      const imgContainerRef = useRef<(HTMLDivElement | null)[]>([]);
      const [imageSource, setImageSource] = useState(prev);
      const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1024);
      const [showFullText, setShowFullText] = useState<boolean>(false);

    // Menu des projets
      const projectsArr = [
        //os
        {
          id: 1,
          img: '/projets/os/os-img.png',
          video: '/projets/os/video-onsight-hover.mp4',
          title: ["OnSight","OnSight"],
          baseline: ['An app to keep an eye on your films, on sight','Une application mobile pour garder un oeil sur tes films'],
          text:[
            "OnSight is an application that allows you to search for any movie or TV series and add it to a list that you can regularly update based on new releases or your preferences.",
            "OnSight est une application qui vous permet de rechercher n'importe quel film ou série et de l'ajouter à une liste que vous pouvez régulièrement mettre à jour en fonction des nouvelles sorties ou de vos préférences. ",
          ],      
          text2:[
            "Immerse yourself in a retro universe inspired by the 80s, where each interaction takes you into cinematic history. With OnSight, you can easily manage your movies and series to watch all while enjoying a captivating vintage design. Available on iOS.",
            "Plongez dans un univers graphique rétro inspiré des années 80, où chaque interaction vous fait voyager. Avec OnSight, vous pouvez facilement gérer vos films et séries à regarder tout en savourant un design vintage captivant. Découvrez l'application sur iOS."
          ],
          link: ['Discover',"Découvrir"],
          onClick: ['https://apps.apple.com/fr/app/movies-on-sight/id6450311314', '_blank']
        },
        //pl
        {
          id: 2,
          img: '/projets/pl/pl-img.jpg',
          video: '/projets/pl/pl-video-hover.mp4',
          title: ["Pascale Laffon","Pascale Laffon"],
          baseline: ['Micropracy','La micropraxie'],
          text:["Pascale Laffon is a showcase website dedicated to her work as a micropractitioner. Explore her gentle and unique universe", "Pascale Laffon est un site vitrine dédié à son activité de micropraticienne. Explorez son univers doux et unique"],
          text2:["as well as her practice of holistic medicine through refined graphic design and intuitive experience.","ainsi que sa pratique de la médecine holistique à travers un design graphique raffiné et une expérience intuitive."],
          link: ['Discover',"Découvrir"],
          onClick: ['https://pascale-laffon.fr', '_blank']
        },
        //pilepoele
        {
          id: 3,
          img: '/projets/pp/pp-img.png',
          video: '/projets/pp/video_type.mp4',
          title: ["Pile-Poële (On thyme)","Pile-Poële"],
          baseline: [
                    "Promoting an inclusive humanism focused on cuisine",
                    "Promouvoir un humanisme inclusif axé sur la cuisine"
                    ],
          text:["Pile-Poële is a gender-inclusive typeface focused on cooking created as part of a master's research project at the University of Toulouse Jean Jaurès in 2021. It promotes gender parity and allows for the replacement of words referring to tools, utensils and food with pictograms.",
                "Pile-Poële est une fonte de caractères inclusive basée sur la cuisine, créée dans le cadre d'une recherche de master à l'Université Toulouse Jean Jaurès en 2021. Elle favorise la parité des genres et permet de remplacer les mots désignant des outils, ustensiles et aliments par des pictogrammes."],      
          text2:[
                "The project aims to facilitate universal and intercultural culinary communication. While gender inclusivity is integrated it is not the main focus but rather an inherent aspect of the communication.",
                "Le projet vise à faciliter une communication culinaire universelle et interculturelle. Bien que l'inclusivité des genres soit intégrée, ce n'est pas l'objectif principal du projet mais un aspect évident & crucial de la communication."
                ],
          link: ['Discover',"Découvrir"],
          onClick: ['', '_blank']      
        },
        //vb
        {
          id: 4,
          img: '/projets/vb/vb-img.jpg',
          video: '/projets/vb/vb-video-hover.mp4',
          title: ["VB Avocats","VB Avocats"],
          baseline: ["Modernize a graphic identity","Moderniser une identité graphique"],
          text:[
                "VB Avocats, formerly Valette & Berthelsen, sought to revitalize their graphic identity while preserving the firm's essence.",
                "VB Avocats, anciennement Valette & Berthelsen, ont souhaité revitaliser leur identité graphique tout en préservant l'essence du cabinet."
              ],      
          text2:[
                "The redesign aimed to bring new dynamism while respecting the company's values and history. This included a revamp of the logo, stationery and signage elements.",
                "La refonte visait à insuffler un nouveau dynamisme tout en respectant les valeurs et l'histoire de l'entreprise. Cela comprenait une refonte du logo, de la papeterie & de la signalétique."
                ],
          link: ['discover',"découvrir"],
          onClick: ['https://www.vb-avocats.fr', '_blank']      
        },
        //dessin
        {
          id: 5,
          img: '/projets/topos/topos-img.png',
          video: '/projets/topos/topos-video-hover.mp4',
          title: ["Topographies",'Topographies'],
          baseline: 
          [
            "Designing the city through its ornamentation",
            "Dessiner la ville par ses ornementations"
          ],
          text:
          [
            "Topographies is an artistic exploration of the city of Nîmes through its architectural ornaments.",
            "Topographies est une exploration artistique de la ville de Nîmes à travers ses ornements architecturaux."
          ],
          text2:
          [
            "This project aims to visually map the city through detailed drawings and unique urban patterns identifiable on various facades and door fronts.",
            "Ce projet vise à cartographier visuellement la ville à travers des dessins détaillés et des motifs urbains uniques identifiables sur les différentes façades et devantures de portes."
          ],
          link: ['Discover',"Découvrir"],
          onClick: ['', '_blank']
        },
      ]; 
    //Lancer vidéos de survol
      const handleHover = () => {
        setImageSource(next); // Remplacez 'next' par l'image correspondante
      };
      const handleHoverOut = () => {
        setImageSource(prev); // Remplacez 'prev' par l'image correspondante
      };
    // Gestion du carousel des projets
      const handleDiscover = (projectId: number) => {
        router.push(`/projet/${projectId}`)
      };
      const handleNext = (index: number) => {
        const descriptionElements = document.querySelectorAll('.project-description');
        const descriptionElement = descriptionElements[index] as HTMLElement;
        if (descriptionElement) {
          descriptionElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const handlePrev = (index: number) => {
        const descriptionElements = document.querySelectorAll('.projectImgContainer');
        const descriptionElement = descriptionElements[index] as HTMLElement;
        if (descriptionElement) {
          descriptionElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
    // Afficher plus ou moins de texte / Version mobile
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      const toggleFullText = () => {
        setShowFullText(!showFullText);
      };
      useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
       // Redir si pas datas

  return (
    <>
    
    <div className='section' id='projets' style={{marginTop:'0rem'}}>
    <Header />
      <h2>{textVariables[0]}</h2>

      <div id='projets'>
          <div className='grid-container-projets' ref={gridContainerRef}>
            
            {projectsArr.map((project, index) => (
            <div className='project-wrapper' key={index} style={{ marginBottom: '2rem' }}>
                <div className='projectImgContainer' ref={(el) => (imgContainerRef.current[index] = el)} onClick={() => { setCurrentIndex(index); handleNext(index); }}>
                  <video className='projectHoverVideo' autoPlay loop muted playsInline>
                    <source src={project.video} type='video/mp4' />
                  </video>

                  {project.img.includes('.mp4') ? 
                  (
                    <video className='projectImg' autoPlay loop muted playsInline>
                      <source src={`${project.img}`} type='video/mp4' />
                    </video>
                  ) : 
                  (
                    <div className='projectImg' style={{ backgroundImage: `url(${project.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                  )}
                </div>

                <div className='project-description' ref={descriptionRef}>
                  <h2 className='project-title'>{project.baseline[isEnglish ? 0 : 1]}</h2>
                  <p className='project-txt short-text' style={{ paddingLeft: '3rem', paddingRight: '2rem' }}>
                    {isMobile && !showFullText
                      ? `${project.text[isEnglish ? 0 : 1].slice(0, 200)}...`
                      : project.text[isEnglish ? 0 : 1]}
                  </p>
                  <p className={`project-txt full-text ${isMobile && showFullText ? 'show' : ''}`} style={{ paddingLeft: '3rem', paddingRight: '2rem' }}>
                    {project.text2[isEnglish ? 0 : 1]}
                  </p>
                  {isMobile && (
                    <div className='btn-black en-savoir-plus' onClick={toggleFullText} style={{ marginLeft: '3rem'}}>
                      <p>{showFullText ? 'Afficher moins' : 'En savoir plus'}</p>
                    </div>
                  )}

                  <div className='inline-flex'>
                    <button className='btn-transp-dark' style={{ marginLeft: '2rem' }} onClick={() => handleDiscover(project.id)}>
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
                        {textVariables[1]}
                        </p>
                      </div>
                    </button>
                    <button className='btn-transp-dark' style={{ marginLeft: '2rem' }} onClick={() => {setCurrentIndex(index); handlePrev(index)}}>
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
                        {textVariables[2]}
                        </p>
                      </div>
                    </button>            
                  </div>
                </div>
                
                <div className='flex-center'>
                  <p>{project.title[isEnglish ? 0 : 1]}</p>
                  <div className='carousel-btn' style={{ marginLeft: '1rem', marginBottom: '.2rem' }} onClick={() => { setCurrentIndex(index); handleNext(index); }}>
                    <Image 
                      src={imageSource ?? ''} 
                      alt='icon' 
                      onMouseOver={handleHover}
                      onMouseOut={handleHoverOut} 
                      width={100} 
                      height={0}
                      style={{display: 'flex', width:'40px', flexWrap: 'nowrap', margin: '.2rem 0rem 0rem .3rem',transition: 'transform 2s ease'}} 
                    />
                  </div>
                  <p style={{ color: 'black' }}>{textVariables[3]}</p>
                </div>
              </div>
            ))}
          </div>


          <div className='center'>
            <button 
              className='btn-transp-dark' 
              style={{ marginLeft: '1rem' }} 
              onClick={() => window.open('https://www.behance.net/mariadiaz116', '_blank', 'noreferrer')}
            >
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
                        {textVariables[4]}
                        </p>
                      </div>
            </button>
            <div
                className="btn-transp-rs"
                onClick={() => window.open('https://www.linkedin.com/in/maria-lou-diaz-1b7ba8143/', '_blank', 'noreferrer')}
            >
              <div>
                <FontAwesomeIcon className='icon-transp-big' icon={faLinkedinIn} />
              </div>
            </div>
            <div
                className="btn-transp-rs"
                onClick={() => window.open('https://www.linkedin.com/in/maria-lou-diaz-1b7ba8143/', '_blank', 'noreferrer')}
            >
              <div>
                <FontAwesomeIcon className='icon-transp-big' icon={faGithub} />
              </div>
            </div>
            <div
                className="btn-transp-rs"
                onClick={() => window.open('https://www.linkedin.com/in/maria-lou-diaz-1b7ba8143/', '_blank', 'noreferrer')}
            >
              <div>
                <FontAwesomeIcon className='icon-transp-big' icon={faInstagram} />
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default Projets;
