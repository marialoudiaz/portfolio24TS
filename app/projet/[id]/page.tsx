'use client'
import React from 'react';
import {useState, useEffect} from 'react';
import { useData } from '@/app/context/DataContext'; // Importer le contexte
import { useRouter, useParams } from 'next/navigation';
import '../../../styles/App.scss';
import '../../../globals.css';
import Image from 'next/image';
import Header from '../../../components/navbar/header';
import { FiArrowDownRight } from "react-icons/fi";
import '../../../styles/App.scss';



function Projet() {

  // Recup lang via context glob
    const router = useRouter();
    const { indepArray } = useData();
    const { id } = useParams(); // id dans lurl (dynamiquement)
    const descriptionprojectsArr = [
      // onsight
      {
        id: 1,
        client: 'Maria Lou Diaz',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/os/video-onsight-hover.mp4',
        videoMobile: '/projets/os/video-onsight-hover.mp4', //'/projets/os/video-onsight.mp4'
        image: '/projets/os/os-img.png',
        title: 'Onsight',
        baseline: [
          "L'appli qui vous donne envie de prendre votre dose quotidienne de cinéma",
          'The app that helps you remember to take your daily dose of cinema.',
        ],
        infos: [['2023','Application mobile', 'IOS','Cinéma/série'],['2023','App', 'IOS','Cinema/serie']],
        categories: 
        [
          ['Conception graphique','Expérience utilisateur','Application mobile','Maintenance'],
          ['Graphic design', 'User experience', 'Mobile application', 'Maintenance']
        ],
        onClick: ['https://apps.apple.com/fr/app/movies-on-sight/id6450311314', '_blank'],
        besoins:[["Découvrez OnSight, l'application mobile de prise de notes ultime pour les cinéphiles et amateurs de séries. Plongez dans un univers graphique  aux allures rétro où chaque interaction vous transporte dans le passé. Avec OnSight, vous pouvez facilement ajouter et supprimer des films et séries de votre liste, tout en profitant d'un design vintage captivant."],["Discover OnSight, the ultimate note-taking mobile app for movie and series enthusiasts. Immerse yourself in a retro graphical universe reminiscent of the 80s, where every interaction takes you back in time. With OnSight, you can easily add and remove movies and series from your watchlist, all while enjoying a captivating vintage design."]],
        technologies: ['React native', 'After effects', 'Illustrator'],
        sections: 
        [
          {
          subtitle: ['Repenser la prise de notes avec style', 'Rethinking Note-Taking with Style'],
          text: [
            "'OnSight' c'est l'idée de créer une application mobile pour garder en mémoire ses films et séries préférés en ajoutant une composante nostalgique. OnSight plonge les utilisateurs dans une ambiance vintage tout en leur offrant une plateforme élégante et intuitive pour créer et gérer leur liste de films et séries préférés. Inspirée par l'esthétique des années 80 et 90, l'interface se distingue par des tons bleus : calmes mais profonds & des fonts rétro. Les utilisateurs peuvent ajouter autant de titres qu'ils le souhaitent. Les films & séries s'ajoutent et s'empilent sous la forme de pilules comme pour rappeler à l'utilisateur de prendre sa dose quotidienne de cinéma - rendant ainsi la gestion de sa vidéothèque plus ludique.",
            "OnSight is about creating a simple mobile app to keep track of your favorite movies and series. The idea was to rethink the aesthetics to add a nostalgic component. OnSight immerses users in a vintage atmosphere while offering an elegant and intuitive platform to create and manage their list of favorite movies and series. Inspired by the aesthetics of the 80s and 90s, the interface features calm yet deep blue tones and retro fonts. Users can add as many titles as they wish. Movies and series are added and stacked in the form of pills, reminding users to take their daily dose of cinema, making the management of their video library more playful."
          ],
          image: '/projets/os/os-section1.jpg',
          },
          {
          subtitle: ['Donner vie à l’identité graphique', 'Giving birth to the graphic identity'],
          text: [
            "Créer une identité forte pour OnSight, c'était aussi imaginer un logotype distinctif et son animation. Le logotype devait capturer l'essence de l'esthétique vintage de l'application tout en restant moderne et reconnaissable. L'animation a été conçue pour donner vie au logo, ajoutant un élément dynamique qui améliore l'expérience utilisateur. Ensemble, le logotype et son animation créent une identité de marque cohérente et mémorable, reflétant le caractère unique d'OnSight.",
            "Creating a strong identity for OnSight also meant envisioning a distinctive logotype and its animation. The logotype needed to capture the essence of the app's vintage aesthetic while remaining modern and recognizable. The animation was designed to bring the logo to life, adding a dynamic element that enhances the user experience. Together, the logotype and its animation create a cohesive and memorable brand identity that reflects the unique character of OnSight.",
          ],
          video: '/projets/os/os-section2.mp4',
          },
        ],
        sectionsImg: 
        [
          ['/projets/os/os-sectionimg1.jpg'],
          ['/projets/os/os-sectionimg2.jpg']
        ]
      },
      // pascale
      {
        id: 2,
        client: 'Pascale Laffon',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/pl/pl_video.mp4',
        videoMobile: '/projets/pl/pl_video.mp4',
        image: '/projets/pl/pl-img.jpg',
        title: 'Pascale Laffon',
        baseline:["Invincible est la douceur","Invincible is gentleness"],
        infos: [['2024', 'Site vitrine', 'Médecine holistique'],['2024', 'Showcase website', 'Holistic medicine']],
        categories: 
        [
          ['UI/UX', 'Intégration', 'Charte graphique', 'SEO', 'Hébergement', 'Maintenance', 'Motion', 'Captations vidéos & photos'],
          ['UI/UX', 'Coding', 'Graphic charter', 'SEO', 'Hosting', 'Maintenance', 'Motion, Video & photo']
        ],
        onClick: ['https:/www.pascalelaffon.fr', '_blank'],
        besoins:[
          ["Pascale Laffon, micropracteur de longue date, se lance désormais en tant qu'auto-entrepreneur. Pour valoriser au mieux ses services et refléter fidèlement son univers, la création d'un site vitrine s'impose comme une nécessité. Dans cette optique, j'ai entrepris de repenser sa charte graphique (incluant le logotype et l'iconographie) et de développer un site vitrine à même de transmettre l'essence de son activité."],
          ["Pascale Laffon, a long-time micropractor is now launching as a sole proprietor. To showcase her services effectively and accurately reflect her universe, creating a showcase website is essential. With this goal in mind, I have undertaken to redesign her visual identity (including logo and iconography) and develop a showcase website that will perfectly convey the essence of her business."]],
        technologies: [
          ['Ink', 'Illustrator', 'Photoshop', 'Premiere Pro', 'After Effects', 'Figma', 'React'],
          ['Encre', 'Illustrator', 'Photoshop', 'Premiere Pro', 'After Effects', 'Figma', 'React']
        ],
        sections: 
        [
          {title:'Pascale Laffon',
          categories: [
          ['Typographie', 'Iconographie', 'Charte graphique'],
          ['Typography', 'Iconography', 'Graphic charter'],
          ],
          subtitle: ['Une police d’écriture signature', 'A signature font'],
          text: [
            "L’encre de chine comme symbole d’élégance et de finesse. Raconter graphiquement la pratique de la micropraxie, c’était parvenir à parler d’un univers doux, calme mais puissant. Ainsi l’encre de chine s’est révélée comme étant le médium le plus à même de nous transporter dans l’univers de Pascale Laffon. Un titre, une signature pour faire du nom de son entreprise un concept.",
            "Chinese ink as a symbol of elegance and refinement. Graphically depicting the practice of micropraxis meant conveying a gentle, calm yet powerful universe. Thus, Chinese ink emerged as the medium best suited to transport us into Pascale Laffon's world. A title, a signature, to transform the name of her business into a concept."
          ],
          imageEN: '/projets/pl/pl-section1en.png',
          image: '/projets/pl/pl-section1.png'
          },

          {title:'Pascale Laffon',
          categories: [
              ['Illustration','Charte graphique'],
              ['Illustration','Graphic charter']
              ],
          subtitle: ['L’illustration comme première impression', 'Portrait as a first impression'],
          text: [
            "Tirer le portrait de Pascale et de son cabinet permettent d’aller à la rencontre du patient avant même qu’il prenne rendez-vous. Cette approche rend l'expérience vivante et chaleureuse, invitant ainsi les patients à entrer dans l'univers de Pascale et à établir une connexion personnelle dès le début - nous invitant dans son univers.",
            "Capturing portraits of Pascale and her practice allows potential patients to get acquainted even before scheduling an appointment. This approach brings a lively and welcoming feel, inviting patients into Pascale's world and creating a warm, personal connection from the start.",
          ],
          image: '/projets/pl/pl-section2.png',
          },

          {title:'Pascale Laffon',
            categories: [
              ['Illustration', 'Iconographie', 'Charte graphique', 'Motion'],
              ['Illustration', 'Iconography', 'Graphic charter', 'Motion']
            ],
            subtitle: [' Penser une iconographie unique', 'Creating a unique iconography'],
            text: [
              "Pour immerger encore davantage les utilisateurs dans l'univers unique de Pascale, il est apparu évident de créer une iconographie exclusive. En concevant des pictogrammes spécialement imaginés pour illustrer la pratique de la micropraxie, nous avons pu raconter son histoire de manière authentique et engageante.",
              "To further immerse users in Pascale's unique world, it became clear that creating an exclusive iconography was essential. By designing custom pictograms that vividly narrate the practice of micropraxis, we were able to tell her story in an authentic and engaging way.",
            ],
            image: '/projets/pl/pl-section3.png',
            },

            {title:'Pascale Laffon',
              categories: [
                ['Illustration', 'Iconographie', 'Charte graphique', 'Motion'],
                ['Illustration', 'Iconography', 'Graphic charter', 'Motion']
              ],
              subtitle: ['Less is more', 'Less is more'],
              text: [
                "Afin de cristalliser, cette refonte, en dernier lieu, il est apparu essentiel de simplifier le logotype déjà existant de Pascale Laffon et de l’animer.",
                "To finalize this redesign, it became essential to simplify Pascale Laffon's existing logotype and animate it.",
              ],
              video: '/projets/pl/pl-section4.mp4',
              },
        ],
      },
      // pile-poele
      {
        id: 3,
        client: 'Maria Lou Diaz',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/pp/video_type_hp.mp4', //video dintro
        videoMobile: '/projets/pp/video_type.mp4',
        image: '/projets/pp/pp-img.png',
        title: 'Pile-Poële',
        baseline: ["Ouvrez-vous au monde par la cuisine.", 'Open Up to the World Through Cuisine'],
        infos: [
          ['2021>2024', 'Police d’écriture', 'Cuisine'],
          ['2021>2024', 'Font', 'Cuisine']
        ],
        categories: 
        [
          ['Typographie', 'Recherche'],
          ['Typography', 'Research'],
        ],
        // onClick: ['https:/www.pascalelaffon.fr', '_blank'],
        besoins:[
          ["Promouvoir un humanisme inclusif axé sur la cuisine. Pile-Poële est une fonte de caractères gender-inclusive avec un set de glyphes pictographiques centré autour de la cuisine. Elle prend forme dans le cadre d’une recherche de master autour de la constitution d’un système langagier basé sur la cuisine à l’Université Toulouse Jean Jaurès à Toulouse en 2021. Cette police propose une palette de caractères qui favorise la parité des genres tout en permettant dans son code de remplacer les mots désignant outils, ustensiles et aliments par leurs symboles pictographiques. Le signe alphabétique ou pictographique vient s’inscrire dans la recherche d’une transmission interculturelle culinaire. Le but premier est de permettre une forme de communication davantage universelle autour de la cuisine. Pile-Poële possède également des ligatures non-binaires. Toutefois, ici, la notion d’inclusivité des genres n’est pas le point central du projet mais devient annexe, comme une évidence dans la communication."],
          ["Promoting an inclusive humanism focused on cuisine. Pile-Poële is a gender-inclusive typeface with a set of pictographic glyphs centered around cuisine. It was developed as part of a master's research project on creating a language system based on cuisine at the University of Toulouse Jean Jaurès in Toulouse in 2021.This font offers a character set that promotes gender parity while allowing for the replacement of words denoting tools, utensils, and food with their pictographic symbols within its code. The alphabetic or pictographic symbols are part of a broader effort to achieve intercultural culinary communication. The primary goal is to enable a more universal form of communication around cuisine. Pile-Poële also features non-binary ligatures. However, in this context, gender inclusivity is not the project's central focus but rather an inherent aspect of communication."],
        ],
        technologies:
        [
          ['Dessin', 'Illustrator','Fontlab'],
          ['Drawing', 'Illustrator', 'FontLab'],
        ],
        sections:
        [
          {title:'Pile-Poële',
          subtitle: ['Le dessin des caractères', 'The design of characters'],
          text: [
            "Écrire une recette se fait dans la plupart des cas, sur un bout de papier, à la main et de manière plutôt rapide. Pile-Poële dans son dessin tente de réunir cet aspect cursif de l’écriture propre à la prise de note manuscrite et le besoin de structure et de discipline de la discipline culinaire. L'exagération du type où les ligatures se dessinent naturellement ouvre de nouvelles perspectives typographiques et sociétales en facilitant la création de nouveaux glyphes. Les pictogrammes sont minimalistes dans un souci de les rendre simples à re-dessiner manuellement et facilement ré-appropriables. Toujours dans cette volonté d’inclusivité et d’accessibilité, les pictogrammes dessinent une cuisine universelle avec des ustensiles issus de la gastronomie mais également des cuisines familiales méditerranéennes (faitout, panier d’osier, pot de yaourt, etc). La cuisine à dessiner devient ainsi universelle et humaine. Au-delà des ustensiles et aliments, les systèmes métriques se représentent aussi humainement que possible : par la main (pincée, poignée, etc).",
            "Writing a recipe is typically done on a piece of paper, by hand, and often quickly. Pile-Poële's design seeks to merge the cursive aspect of handwritten notes with the structured and disciplined nature of culinary practice. The exaggeration of typefaces where ligatures naturally emerge opens up new typographic and societal perspectives by facilitating the creation of new glyphs. The pictograms are minimalist, designed to be easy to redraw manually and readily reappropriated. In the spirit of inclusivity and accessibility, the pictograms depict a universal cuisine, featuring utensils from gastronomy as well as Mediterranean family kitchens (such as a stew pot, wicker basket, yogurt pot, etc.). Thus, the cuisine depicted becomes universal and human. Beyond utensils and food items, metric systems are represented as humanely as possible: by hand (pinch, handful, etc.)."
          ],
          image: '/projets/pp/pp-section1.jpg',
          },

          {title:'Pile-Poële',
          subtitle: ['Améliorations du projet', 'Project Improvements'],
          text: [
            "Ce fut ma première tentative d’une réponse typographique à ce questionnement. Elle reste pour le moment probablement trop mécanique dans sa forme et insuffisamment inclusive d'un point de vue culturel. Pour pallier cet aspect mécanique du glyphe et des caractères, j’envisage également une variante cursive de la fonte. Parmi les autres améliorations à venir, il y aura le dessin des capitales et l’élargissement du set de glyphes pictographiques. Il me semble nécessaire de proposer un dessin des glyphes plus coloré afin de rendre davantage compte de l’aspect sensoriel et vivant propre à la cuisine. Pour l'instant, les pictogrammes sont principalement euro-centrés. L’idée serait donc de proposer l’intégralité des ustensiles et aliments existants mondialement afin que l’inclusivité devienne totale. En ce qui concerne les ligatures gender-inclusive disponibles, elles sont également incomplètes. Ce projet est encore en construction car l’idée d’une communication par le pictogramme est un réel challenge au vu de la pluralité des cultures et des langues existantes. En tant que personne européenne, ce qui pourrait me sembler comme une réponse satisfaisante à un système langagier universel, ne l’est pas forcément pour une personne issue d’une culture différente de la mienne. Communiquer autour de la cuisine ne nécessite pas seulement la traduction des ustensiles et aliments. Une multitude d’autres paramètres essentiels sont nécessaires à la transmission d’une recette, d’une technique ou d’un savoir-faire. Pile-Poële reste donc un début de réflexion à cette question très vaste de la sauvegarde du patrimoine culinaire populaire humain. Elle reste un début de réponse typographique toujours en construction.",
            "This was my first attempt at a typographic response to this question. At the moment, it may still be too mechanical in form and insufficiently inclusive from a cultural perspective. To address the mechanical aspect of the glyph and characters, I am also considering a cursive variant of the font. Among other forthcoming improvements, there will be the design of uppercase letters and the expansion of the set of pictographic glyphs. It seems necessary to offer a more colorful design of the glyphs to better convey the sensory and lively aspect inherent to cuisine. Currently, the pictograms are mainly Euro-centric. The idea, therefore, is to include all utensils and foods existing globally to achieve total inclusivity. Regarding the available gender-inclusive ligatures, they are also incomplete. This project is still under construction because the concept of communication through pictograms is a real challenge given the diversity of cultures and languages. As a European, what may seem like a satisfactory response to a universal language system may not necessarily be so for someone from a different culture than mine. Communicating about cuisine requires not only the translation of utensils and food items but also numerous other essential parameters for transmitting a recipe, technique, or expertise. Therefore, Pile-Poële remains the beginning of reflection on this very broad question of preserving human culinary heritage. It is an initial typographic response still under development.",
          ],
          image: '/projets/pp/pp-section2.png',
          },

          {title:'Pile-Poële',
            subtitle: ['Publications', 'Publications'],
            text: [
              "Pile-Poele a été ajouté à l’invetaire créé par le collectif Bye-Bye Binary de 2017 à 2023.",
              "Pile-Poële was added to the inventory created by the Bye-Bye Binary collective from 2017 to 2023.",
            ],
            image: '/projets/pp/pp-section3.jpg',
            },
        ],
        sectionsImg:
        [
          ['/projets/pp/pp-section4.png', '/projets/pp/pp-section5.png'],
          ['/projets/pp/pp-section4.png', '/projets/pp/pp-section5.png'],
        ]
        
      },
      //vb
      {
        id: 4,
        client: 'Valette & Berthelsen Avocats',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/vb/vb-video.mp4', //video dintro
        videoMobile: '/projets/vb/vb-video.mp4',
        image: '/projets/vb/vb-img.jpg',
        title: 'VB Avocats',
        baseline:["Redéfinir l'excellence juridique","Redefining Legal Excellence"],
        infos: [
          ['2024', 'Identité graphique', 'Cabinet d’avocats', 'Réalisé chez Cible Publicité'],
          ['2024', 'Graphic identity', 'Law firm', 'Designed at Cible Publicité']
        ],
        categories: 
        [
          ['Charte graphique', 'Logotype', 'Papeterie', 'Signalétique'],
          ['Graphic charter', 'Logotype', 'Stationery', 'Signage'],
        ],
        onClick: ['https:/www.avocats-vb.fr', '_blank'],
        besoins:[
          ["VB Avocats, anciennement Valette & Berthelsen, ont exprimé le désir de revitaliser leur identité graphique tout en préservant l'essence même du cabinet. La refonte visait à insuffler un nouveau dynamisme tout en respectant les valeurs et l'histoire de l'entreprise. Il a donc été donc été question d'entreprendre une refonte du logotype, des éléments de papeterie et de signalétique."],
          ["VB Avocats, formerly known as Valette & Berthelsen, sought a redesign of their graphic identity. The goal was to breathe new life into their brand without compromising the essence of the firm. Therefore, I undertook a redesign of the logo, stationery elements, and signage."],
        ],
        technologies:
        [
          ['Photoshop', 'Ilustrator', 'Indesign'],
          ['Photoshop', 'Ilustrator', 'Indesign'],
        ],
        sectionsImg:
        [
          ['/projets/vb/vb-section1aen.png','/projets/vb/vb-section2b.jpg','/projets/vb/vb-section1en.png','/projets/vb/vb-section2d.jpg','/projets/vb/vb-img.jpg','/projets/vb/vb-section2c.jpg'],
          ['/projets/vb/vb-section1afr.png','/projets/vb/vb-section2b.jpg','/projets/vb/vb-section1fr.png','/projets/vb/vb-section2d.jpg','/projets/vb/vb-img.jpg','/projets/vb/vb-section2c.jpg'],  
        ]
      },
      //topographies
      {
        id: 5,
        client: 'Maria Lou Diaz',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/topos/topos-video.mp4', //https://www.facebook.com/watch/?v=829436065704861  
        videoMobile: '/projets/topos/topos-video.mp4',
        image: '/projets/topos/topos-img.png',
        title: "Topographies",
        baseline:["Qui a dit que l'ornement était un crime ?","Who said ornament was a crime ?"],
        infos: [
          ['2019', 'Édition', 'Dessins aux charbons'],
          ['2019', 'Publication', 'Charcoal drawings']
        ],
        categories: 
        [
          ['Édition', 'Dessin'],
          ['Publication', 'Drawing'],
        ],
        besoins:[
          ["Topographies est une exploration artistique de la ville de Nîmes à travers ses ornements architecturaux, mettant en lumière les dessins complexes et l'importance historique de chaque détail. Ce projet vise à cartographier visuellement la ville à travers des dessins détaillés et des motifs urbains uniques identifiables sur les différentes façades et devantures de portes, offrant un récit visuel complet de la diversité architecturale de Nîmes. C'est également un projet artistique réflexif sur les manières de parler de l'Homme par la cartographie et par sa manière de construire la ville, révélant ainsi comment l'urbanisme et l'architecture peuvent être des témoignages éloquents de la culture et de l'histoire humaine."],
          ["Topographies is an artistic exploration of the city of Nîmes through its architectural ornaments, highlighting the intricate designs and historical significance of each detail. This project aims to visually map the city through detailed drawings and unique urban patterns identifiable on various facades and door fronts, providing a comprehensive visual narrative of Nîmes' architectural diversity. It is also a reflective artistic project on the ways of speaking about humanity through cartography and urban construction, revealing how urbanism and architecture can serve as eloquent testimonies of human culture and history."],
        ],
        technologies:
        [
          ['Fusains', 'Charbon', 'Indesign'],
          ['Charcoals', 'Coal', 'InDesign'],
        ],
        sectionsImg:
        [
          ['/projets/topos/topos-section2.jpg','/projets/topos/topos-section3.jpg'],
          ['/projets/topos/topos-section2.jpg','/projets/topos/topos-section3.jpg']
        ]
        
      },    
    ];
    const imgStyle={
      display: 'flex',
      fleWrap: 'nowrap',
      margin: '.2rem 0rem 0rem .3rem', 
      width:'40px',
      height:'auto',
      transition: 'transform 2s ease', // Adjust the duration and easing as needed
    } 
    useEffect(()=>{
      if (!indepArray){
        router.push('/');
      }
    }, [])

  // Déterminer les indices en fonction de la langue
    const Lang = indepArray[0].Lang;
    const langIndex = Lang === 'FR' ? 0 : 1;
  // Cliquer sur découvrir
      const prev = '/icons/interface/icon-eye-1.png';
      const next= '/icons/interface/icon-eye-2.png';
      const [imageSource, setImageSource] = useState(prev);
      // Hover icon oeil
      const handleHover = () => {setImageSource(next);};
      const handleHoverOut = () => {setImageSource(prev);};
      // Ouvrir le lien
      const handleDiscoverClick = () => {
        const url = descriptionprojectsArr[Number(id)].onClick;
        window.open(url, '_blank'); // '_blank' ouvre le lien dans une nouvelle fenêtre ou onglet
      };


  return (
    <>
      <Header />
      <div className='scrollable-container'>

        {/* VIDEO OPENING -- full width > moitié au scroll */}
        <div className='film'>
          <div className='background-video' id='bg-video-projet'>
              <video className='desktop' autoPlay loop muted playsInline>
                <source src={descriptionprojectsArr[Number(id)-1].videoDesktop} type="video/mp4" />
              </video>
              <video className='mobile' autoPlay loop muted playsInline>
                <source src={descriptionprojectsArr[Number(id)-1].videoMobile} type="video/mp4" />
              </video>
          </div>
          <div className='background-video-title'>
            <div>
                  <h3>{descriptionprojectsArr[Number(id)-1].baseline[langIndex]}</h3>
                  <h2>{descriptionprojectsArr[Number(id)-1].title}</h2>
            </div>
            <div>
              <FiArrowDownRight color='white'/>
              <p>{descriptionprojectsArr[Number(id)-1].discover[langIndex]}</p>
            </div>
          </div>
        </div>  
  
        <div  className='section' id='projet' style={{marginBottom: '5rem', marginTop: '15rem'}}>
         {/* DIV INFOS*/}
         <div className='projet-infos'>
            <div>
              <p>Client</p>
              <p>{descriptionprojectsArr[Number(id)-1].client}</p>
            </div>
            <div>
              <p>Expertises</p>
              {descriptionprojectsArr[Number(id)-1].categories[langIndex].map((categorie, index) => (
                <p style={{fontWeight:'600'}} key={index}>{categorie}</p>
              ))}
            </div>
  
            {descriptionprojectsArr[Number(id)-1].onClick&&
            <div>
              <>{Lang === 'FR' ? <p style={{fontWeight:'300'}}>Découvrir le site</p> : <p style={{fontWeight:'300'}}>Discover the website</p>}</>
              <div id='carousel-btn-projet' 
                    onMouseOver={handleHover} 
                    onMouseOut={handleHoverOut} 
                    onClick={handleDiscoverClick}
              >
                <Image 
                     src={imageSource} 
                     alt='an icon of an eye to see the project description when clicked' 
                     width={100} 
                     height={0} 
                     style={imgStyle}
                />
                  <p>{Lang === 'FR' ? <p>Lien</p> : <p>Link</p>}</p>
              </div>
            </div>
            }
  
            <div>
              <p>Date</p>
              <p>{descriptionprojectsArr[Number(id)-1].infos[langIndex][0]}</p>
            </div>
  
         </div>

         {/* DIV BESOINS */}
         <div className='projet-infos-besoins'>
              {Lang === 'FR' ? <h2>Besoins</h2> : <h2>Needs</h2>}
                <p>{descriptionprojectsArr[Number(id)-1].besoins[langIndex][0]}</p>
         </div>
  
  
         {/* DIV SECTIONS */}
           {/* SECTION 2 - EXPLICATION PROJET */}
            {descriptionprojectsArr[Number(id)-1].sections && descriptionprojectsArr[Number(id)-1].sections.length > 0 && (
              descriptionprojectsArr[Number(id)-1].sections.map((section, index) => (
            <>
            {/* TITRE DE LA PREMIÈRE SECTION */}
              <div className='projet-infos-titre'>
                <h2>{section.subtitle[langIndex]}</h2>
                <p>{section.text[langIndex]}</p>
              </div>
    
              {/* IMAGE OU VIDEO DE PREMIERE SECTION */}
              <div className='projet-infos-img'>
                {section.video ? (
                  <div className='grid-col2-video-section'>
                    <video src={section.video} autoPlay loop muted playsInline>
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <Image 
                    src={Lang !== 'FR' && section.imageEN ? section.imageEN : section.image} 
                    alt={Lang !== 'FR' ? "Section visual in English" : "Section visual"} 
                    width={2600}
                    height={0}
                    style={{width:'100%'}}
                  />
                )}
              </div>
            </>
            ))
            )}
            {/* SECTION 3 - IMAGES SUPPLÉMENTAIRES*/}
            {/* si + d'1 image grid-col2 sinon flex-wrap */}
            <div className={
              (descriptionprojectsArr[Number(id)-1].sectionsImg && 
              (descriptionprojectsArr[Number(id)-1].sectionsImg[0]?.length > 1 || descriptionprojectsArr[Number(id)-1].sectionsImg[1]?.length > 1)) 
              ? 'grid-col2' 
              : 'grid-col2-flex'
              }>
              {descriptionprojectsArr[Number(id)-1].sectionsImg && descriptionprojectsArr[Number(id)-1].sectionsImg.length > 0 && (
                (Lang === 'FR' ? descriptionprojectsArr[Number(id)-1].sectionsImg[1] : descriptionprojectsArr[Number(id)-1].sectionsImg[0]).map((sectionImg, index) => (
                  <Image 
                    key={index} 
                    src={sectionImg} 
                    className={`section-image ${index === 2 ? 'div3' : ''}`} 
                    alt={`Section ${index + 1}`} 
                    width={1000}
                    height={0}
                    style={{width:'100%', height:'100%', objectFit: 'cover', objectPosition:'center', borderRadius:'20px'}} 
                  />
                ))
              )}
            </div>
  
        </div>
        </div>
      </>
  )
}

export default Projet