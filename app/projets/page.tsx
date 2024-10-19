'use client'
import React, { useRef, useState, useEffect } from 'react';
import '../styles/App.scss';
import '../globals.css';
import { useData } from '@/app/context/DataContext'; // Importer le contexte
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion, useTransform } from 'framer-motion';

// Déclaration des types pour les composants ou projets
interface Project {
  id: number;
  image: string;
  video: string;
  baseline: string[];
  text: string[];
  text2: string[];
  title: string[];
}
// Typage des `infosComposants` récupérés via la `location`
interface InfosComposants {
  Lang: 'EN' | 'FR';
  ids: number;
}

const Projets: React.FC = () => {

  const { indepArray} = useData(); // Récupérer les données du contexte

  const gridContainerRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const imgContainerRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [imageSource, setImageSource] = useState<string | null>(null);
  const [videoSource, setVideoSource] = useState<string | null>(null);

  const handleHover = () => {
    setImageSource('next'); // Remplacez 'next' par l'image correspondante
  };
  const handleHoverOut = () => {
    setImageSource('prev'); // Remplacez 'prev' par l'image correspondante
  };

  const navigate = useNavigate();
  const location = useLocation();

  // Récupération des infos du `location.state`
  const { infosComposants } = location.state as { infosComposants: InfosComposants } || { infosComposants: null };

  const Lang = infosComposants ? infosComposants.Lang : 'defaultLang';
  const variableENorFr = [
    ['My projects', 'Discover', 'Previous', 'scroll right to learn more', 'Discover my other projects'],
    ['Mes projets', 'Découvrir', 'Précédent', 'scroller à droite pour en apprendre +', 'Découvrir mes autres projets'],
  ];
  const isEnglish = Lang === 'EN';
  const textVariables = isEnglish ? variableENorFr[0] : variableENorFr[1];

  // Gestion du carousel
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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

  const customStyles = {
    fontSize: '1.5rem',
    padding: '1em',
    textAlign: 'left',
  };
  const imgStyle = {
    display: 'flex',
    flexWrap: 'nowrap',
    margin: '.2rem 0rem 0rem .3rem',
    width: '50px',
    height: 'auto',
    transition: 'transform 2s ease',
  };
  // Déclaration d'un tableau de projets (vide dans cet exemple)
  const projectsArr: Project[] = [];

  const handleDiscover = (projectId: number) => {
    const idx = infosComposants?.ids;
    const projectDescription = projectsArr.find((project) => project.id === projectId);
    if (projectDescription && idx !== undefined) {
      navigate(`/projet/${idx}`, { state: { projectDescription, Lang } });
    }
  };

  // Gestion du texte complet sur mobile
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [showFullText, setShowFullText] = useState<boolean>(false);

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

  return (
    <div className='section'>
      <h2>{textVariables[0]}</h2>
      <div id='projets'>
        <div className='grid-container-projets' ref={gridContainerRef}>
          {projectsArr.map((project, index) => (
            <div className='project-wrapper' key={index} style={{ marginBottom: '2rem' }}>
              <div className='projectImgContainer' ref={(el) => (imgContainerRef.current[index] = el)} onClick={() => { setCurrentIndex(index); handleNext(index); }}>
                <video className='projectHoverVideo' autoPlay loop muted playsInline>
                  <source src={project.video} type='video/mp4' />
                </video>

                {project.image.includes('.mp4') ? (
                  <video className='projectImg' autoPlay loop muted playsInline>
                    <source src={project.image} type='video/mp4' />
                  </video>
                ) : (
                  <div className='projectImg' style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
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
                  <div className='btn-black en-savoir-plus' onClick={toggleFullText} style={{ marginLeft: '3rem' }}>
                    <p>{showFullText ? 'Afficher moins' : 'En savoir plus'}</p>
                  </div>
                )}

                <div className='flex-wrap' style={{ flexWrap: 'nowrap' }}>
                  <div className='btn-black' style={{ marginLeft: '3rem' }} onClick={() => handleDiscover(project.id)}>
                    <p>{textVariables[1]}</p>
                  </div>
                  <div className='btn-black' onClick={() => { setCurrentIndex(index); handlePrev(index); }}>
                    <p>{textVariables[2]}</p>
                  </div>
                </div>
              </div>

              <div className='project-details'>
                <p style={{ fontSize: '1.5rem' }}>{project.title[isEnglish ? 0 : 1]}</p>
                <div className='carousel-btn' style={{ marginLeft: '1rem', marginBottom: '.2rem' }} onClick={() => { setCurrentIndex(index); handleNext(index); }}>
                  <img src={imageSource ?? ''} alt='icon' onMouseOver={handleHover} onMouseOut={handleHoverOut} style={imgStyle} />
                </div>
                <p style={{ color: 'black' }}>{textVariables[3]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='social'>
          <div className='btn-black' onClick={() => window.open('https://www.behance.net/mariadiaz116', '_blank', 'noreferrer')}>
            <p>{textVariables[4]}</p>
          </div>
          <div className='social'>
            <button className='social-button' onClick={() => window.open('https://www.linkedin.com/in/maria-lou-diaz-1b7ba8143/', '_blank', 'noreferrer')}>
              <FontAwesomeIcon className='svgIcon' icon={faLinkedinIn} style={{ color: 'white' }} />
            </button>
            <button className='social-button' onClick={() => window.open('https://github.com/marialoudiaz', '_blank', 'noreferrer')}>
              <FontAwesomeIcon className='svgIcon' icon={faGithub} style={{ color: 'white' }} />
            </button>
            <button className='social-button' onClick={() => window.open('https://www.instagram.com/marialoudiaz/', '_blank', 'noreferrer')}>
              <FontAwesomeIcon className='svgIcon' icon={faInstagram} style={{ color: 'white' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projets;
