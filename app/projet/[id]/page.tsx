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

    useEffect(()=>{
      if (!indepArray && !id){
        router.push('/');
      }
    }, [indepArray, router, id])

    const descriptionprojectsArr = [
      // bec
      {
        id: 1,
        client: 'Domaine de la Pinède/Manade BEC',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/bec/bec-hover-black.mp4',
        videoMobile: '/projets/bec/bec-hover-black.mp4',
        image: '/projets/os/os-img.png',
        title: 'Domaine de la Pinède',
        baseline: [
          'Au coeur de la Camargue exactement',
          'Right in the heart of the Camargue',],

        infos: [['2024','Application web','Tourisme & Hôtellerie', 'Réalisé chez Cible Publicité'],['2024','Web App', 'Tourism & Hospitality', 'Done at Cible Publicité']],
        categories: 
        [
          ['Conception graphique','Expérience utilisateur','Application web','Maintenance','Développement Fullstack', 'Vidéo', 'Stroytelling'],
          ['Graphic Design', 'User Experience', 'Web Application', 'Maintenance', 'Fullstack Development', 'Video', 'Storytelling']
        ],
        onClick: ['https://www.manade-bec.fr', '_blank'],
        besoins:[
        ["La Manade Bec, située aux Saintes-Maries-de-la-Mer, invite à une immersion authentique dans la tradition camarguaise grâce à son site web immersif. Ce dernier présente le Domaine de la Pinède, dédié à l'élevage traditionnel de taureaux et chevaux de race Camargue, et met en avant des activités telles que des visites guidées et des démonstrations de tri de taureaux, offrant un aperçu unique de la culture locale. La conception graphique du site est une attention constante au détail pour plonger le visiteur dans un voyage immersif au coeur de la camargue. Le design du site, inspiré des codes du livre imprimé, propose une navigation fluide et chaleureuse, agrémentée de vidéos et de citations qui plongent le visiteur dans l’ambiance unique du lieu. Chaque détail, de la présentation des pages à la réservation au style vintage, vise à réenchanter l’expérience en ligne et à refléter l’authenticité du domaine, tout en proposant des services pour l'organisation d'événements privés ou professionnels."],
        ["The Manade Bec, located in Saintes-Maries-de-la-Mer, offers an authentic immersion into Camargue traditions through its immersive website. It showcases the Domaine de la Pinède, dedicated to the traditional breeding of Camargue bulls and horses, highlighting activities such as guided tours and bull sorting demonstrations, providing a unique insight into the local culture. The website’s design reflects meticulous attention to detail, taking visitors on an immersive journey into the heart of the Camargue. Inspired by the aesthetics of printed books, the site offers a smooth and inviting navigation experience, enriched with videos and quotes that capture the unique atmosphere of the Domaine. From the page layout to vintage-style reservations, every detail aims to re-enchant the online experience and convey the authenticity of the estate, while also offering services for organizing private and professional events."]],
        technologies: ['React', 'After effects', 'Illustrator', 'Figma', 'Adobe Creative Suite', 'Express'],
        sections: 
        [
          // {
          // subtitle: ['Repenser la prise de notes avec style', 'Rethinking Note-Taking with Style'],
          // text: [
          //   "'OnSight' c'est l'idée de créer une application mobile pour garder en mémoire ses films et séries préférés en ajoutant une composante nostalgique. OnSight plonge les utilisateurs dans une ambiance vintage tout en leur offrant une plateforme élégante et intuitive pour créer et gérer leur liste de films et séries préférés. Inspirée par l'esthétique des années 80 et 90, l'interface se distingue par des tons bleus calmes mais profonds & des police d'écritures rétro. Les utilisateurs peuvent ajouter autant de titres qu'ils le souhaitent. Les films & séries s'ajoutent et s'empilent sous la forme de pilules comme pour rappeler à l'utilisateur de prendre sa dose quotidienne de cinéma - rendant ainsi la gestion de sa vidéothèque plus ludique.",
          //   "OnSight is about creating a simple mobile app to keep track of your favorite movies and series. The idea was to rethink the aesthetics to add a nostalgic component. OnSight immerses users in a vintage atmosphere while offering an elegant and intuitive platform to create and manage their list of favorite movies and series. Inspired by the aesthetics of the 80s and 90s, the interface features calm yet deep blue tones and retro fonts. Users can add as many titles as they wish. Movies and series are added and stacked in the form of pills, reminding users to take their daily dose of cinema, making the management of their video library more playful."
          // ],
          // image: '/projets/os/os-section1.jpg',
          // },
          {
          subtitle: ['au coeur de la camargue exactement', 'Right in the heart of the Camargue'],
          text: [
            "La conception graphique du site s'attache à chaque détail pour offrir au visiteur une expérience immersive au cœur de la Camargue. Dès la première vidéo de présentation, le décor est planté, plongeant l'utilisateur dans l'atmosphère unique du domaine. Par la suite, il est guidé à travers les pages comme s'il tournait les pages d'un livre. Cette approche créative réinvente le webdesign en s'inspirant des codes intemporels du livre imprimé. Par exemple, sur la page dédiée à la manade, le visiteur découvre des citations soigneusement choisies, reflétant l'esprit authentique et l'ambiance singulière du Domaine de la Pinède. Le même soin est apporté à la page d'accueil, renforçant l'impression d'une plongée dans un univers enchanteur.",
            "The website's graphic design pays meticulous attention to detail, offering visitors an immersive journey into the heart of the Camargue. From the opening presentation video, the tone is set, drawing users into the unique atmosphere of the domain. They are then guided through the pages as if leafing through the chapters of a book. This creative approach reimagines web design by drawing inspiration from the timeless aesthetics of printed books. For instance, on the page dedicated to the manade, visitors can explore carefully selected quotes that capture the authentic spirit and unique ambiance of the Domaine de la Pinède. The same thoughtful design is reflected on the homepage, enhancing the sense of being transported into an enchanting world.",
          ],
          video: '/projets/bec/bec-site-deroule.mp4',
          },
        ],
        sectionsImg: 
        [
          ['/projets/bec/bec-menu.jpg','/projets/bec/bec-2.jpg'],
          []
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
          ["Pascale Laffon, a long-time micropractor is now launching as a sole trador. To showcase her services effectively and accurately reflect her universe, creating a showcase website is essential. With this goal in mind, I have undertaken to redesign her visual identity (including logo and iconography) and develop a showcase website that will perfectly convey the essence of her business."]],
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
            "Tirer le portrait de Pascale et de son cabinet permettent d’aller à la rencontre du patient avant même qu’il prenne rendez-vous. Cette approche rend l'expérience vivante et chaleureuse, invitant ainsi les patients à entrer dans l'univers de Pascale et à établir une connexion personnelle dès le début.",
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
      //vb
      {
              id: 3,
              client: 'Valette & Berthelsen Avocats',
              discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
              videoDesktop: '/projets/vb/vb-video.mp4',
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
                ["VB Avocats, anciennement Valette & Berthelsen, ont exprimé le désir de revitaliser leur identité graphique tout en préservant l'essence même du cabinet. La refonte visait à insuffler un nouveau dynamisme tout en respectant les valeurs et l'histoire de l'entreprise. Il a donc été question d'entreprendre une refonte du logotype, des éléments de papeterie et de la signalétique."],
                ["VB Avocats, formerly known as Valette & Berthelsen, sought a redesign of their graphic identity. The goal was to breathe new life into their brand without compromising the essence of the firm. Therefore, I undertook a redesign of the logo, stationery elements, and signage."],
              ],
              technologies:
              [
                ['Photoshop', 'Ilustrator', 'Indesign'],
                ['Photoshop', 'Ilustrator', 'Indesign'],
              ],
        sections: 
        [
          {
          subtitle: [
            'Transmettre les valeurs fondamentales du droit', 
            'Convey the fundamental values of law'
          ],
          text: [
            "La palette vert et argenté et le symbole de Thémis ont été choisis pour incarner les valeurs fondamentales de notre firme d’avocats. Le vert symbolise l’équilibre, l’harmonie et la justice. Il évoque aussi la croissance, la confiance et l’espoir, des notions essentielles pour accompagner nos clients vers des solutions justes et durables. L’argenté incarne la modernité, la rigueur et la transparence. Il reflète notre engagement à offrir des services clairs, efficaces et innovants, tout en garantissant une approche professionnelle et intègre. Le symbole de Thémis, déesse de la justice, représente l’équité, l’impartialité et la vérité. Avec sa balance, elle incarne la recherche constante d’équilibre et de justesse dans nos actions, tandis que son glaive rappelle notre détermination à défendre les droits de nos clients avec force et conviction. Cette identité visuelle traduit parfaitement notre mission : allier tradition et modernité pour défendre vos intérêts avec excellence, intégrité et humanité.",
            "The green and silver palette and the symbol of Themis were chosen to embody the core values of our law firm. Green symbolizes balance, harmony, and justice. It also evokes growth, trust, and hope, essential concepts in guiding our clients toward fair and sustainable solutions. Silver represents modernity, rigor, and transparency. It reflects our commitment to delivering clear, effective, and innovative services while ensuring a professional and ethical approach. The symbol of Themis, the goddess of justice, stands for fairness, impartiality, and truth. With her scales, she embodies the constant pursuit of balance and fairness in our actions, while her sword reminds us of our determination to defend our clients' rights with strength and conviction. This visual identity perfectly conveys our mission: combining tradition and modernity to defend your interests with excellence, integrity, and humanity."
          ],
          image: '/projets/none.png',
          },
        ],
              sectionsImg:
              [
                ['/projets/vb/vb-section1aen.png','/projets/vb/vb-section2b.jpg','/projets/vb/vb-section1en.png','/projets/vb/vb-section2d.jpg','/projets/vb/vb-img.jpg','/projets/vb/vb-section2c.jpg'],
                ['/projets/vb/vb-section1afr.png','/projets/vb/vb-section2b.jpg','/projets/vb/vb-section1fr.png','/projets/vb/vb-section2d.jpg','/projets/vb/vb-img.jpg','/projets/vb/vb-section2c.jpg'],  
              ]
      },
      // nda
      {
        id: 4,
        client: 'Émile Trubert',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/nda/nda-2_hover.mp4',
        videoMobile: '/projets/nda/nda-2_hover.mp4',
        image: '/projets/nda/nda-1.jpg',
        title: "Naissance d'une amitié",
        baseline:["L'amitié est une âme en deux corps","Friendship is a soul in two bodies"],
        infos: [['2024', 'Illustration', 'Littérature contemporaine'],['2024', 'Illustration', 'Contemporary Literature']],
        categories: 
        [
          ['Illustration', 'Littérature'],
          ['Illustration', 'Literature']
        ],
        onClick: ['https:/www.marialoudiaz.fr', '_blank'],
        besoins:[
          ["Naissance d'une amitié est un roman d'Émile Trubert qui explore avec délicatesse l’émergence d’une amitié émouvante. Au cœur de l’histoire se trouve un vieil homme, accablé par le poids du deuil après la perte de son épouse bien-aimée, et Eva, une jeune femme dont la présence commence à transformer son monde en ruines. Leur lien devient une source de guérison, ramenant peu à peu chaleur et espoir dans sa vie. Un élément central du récit est une illustration récurrente : la figure du protagoniste, initialement enveloppé dans des teintes sombres et ternes, symbolisant son chagrin et son isolement. Au fil de l’histoire, à mesure que son amitié avec Eva s’approfondit, le dessin évolue. Des rayons de lumière subtils commencent à percer l’obscurité qui l’entoure, reflétant le pouvoir transformateur de leur relation. À la fin, il apparaît baigné dans une lumière éclatante, métaphore visuelle du renouveau et de l’espoir apportés par cette amitié. Cette représentation artistique accompagne le voyage émotionnel du roman, soulignant l’impact profond des liens humains et le pouvoir de transformation qu’ils portent en eux. Le roman est une tendre ode à l’amitié et à la lumière qu’elle peut faire briller dans les recoins les plus sombres de la vie."],
          ["Birth of a Friendship is a novel by Émile Trubert that delicately explores the emergence of a poignant friendship. At its heart is an elderly man, burdened by the shadow of grief following the loss of his beloved spouse, and Eva, a young woman whose presence begins to reshape his desolate world. Their bond becomes a source of healing, gradually infusing his life with warmth and unforeseen possibilities. Central to the narrative is a recurring illustration: the figure of the protagonist, initially cloaked in dim, muted tones, symbolizing his sorrow and isolation. As the story unfolds, and his connection with Eva deepens, the drawing evolves. Subtle shafts of light begin to pierce the darkness around him, reflecting the transformative power of their friendship. By the conclusion, he stands bathed in vibrant light, a visual metaphor for the rejuvenation and hope their relationship brings. This artistic depiction mirrors the emotional journey of the novel, underscoring the profound impact of human connection and the renewal it can inspire. The novel is a tender ode to friendship and the light it can cast even in life’s darkest corners."]],
        technologies: [
          ['Ink', 'Illustrator', 'Photoshop', 'Indesign'],
          ['Ink', 'Illustrator', 'Photoshop', 'Indesign'],
        ],
        // sections: 
        // [
        //   {title:'Pascale Laffon',
        //   categories: [
        //   ['Typographie', 'Iconographie', 'Charte graphique'],
        //   ['Typography', 'Iconography', 'Graphic charter'],
        //   ],
        //   subtitle: ['Une police d’écriture signature', 'A signature font'],
        //   text: [
        //     "L’encre de chine comme symbole d’élégance et de finesse. Raconter graphiquement la pratique de la micropraxie, c’était parvenir à parler d’un univers doux, calme mais puissant. Ainsi l’encre de chine s’est révélée comme étant le médium le plus à même de nous transporter dans l’univers de Pascale Laffon. Un titre, une signature pour faire du nom de son entreprise un concept.",
        //     "Chinese ink as a symbol of elegance and refinement. Graphically depicting the practice of micropraxis meant conveying a gentle, calm yet powerful universe. Thus, Chinese ink emerged as the medium best suited to transport us into Pascale Laffon's world. A title, a signature, to transform the name of her business into a concept."
        //   ],
        //   imageEN: '/projets/pl/pl-section1en.png',
        //   image: '/projets/pl/pl-section1.png'
        //   },

        //   {title:'Pascale Laffon',
        //   categories: [
        //       ['Illustration','Charte graphique'],
        //       ['Illustration','Graphic charter']
        //       ],
        //   subtitle: ['L’illustration comme première impression', 'Portrait as a first impression'],
        //   text: [
        //     "Tirer le portrait de Pascale et de son cabinet permettent d’aller à la rencontre du patient avant même qu’il prenne rendez-vous. Cette approche rend l'expérience vivante et chaleureuse, invitant ainsi les patients à entrer dans l'univers de Pascale et à établir une connexion personnelle dès le début.",
        //     "Capturing portraits of Pascale and her practice allows potential patients to get acquainted even before scheduling an appointment. This approach brings a lively and welcoming feel, inviting patients into Pascale's world and creating a warm, personal connection from the start.",
        //   ],
        //   image: '/projets/pl/pl-section2.png',
        //   },

        //   {title:'Pascale Laffon',
        //     categories: [
        //       ['Illustration', 'Iconographie', 'Charte graphique', 'Motion'],
        //       ['Illustration', 'Iconography', 'Graphic charter', 'Motion']
        //     ],
        //     subtitle: [' Penser une iconographie unique', 'Creating a unique iconography'],
        //     text: [
        //       "Pour immerger encore davantage les utilisateurs dans l'univers unique de Pascale, il est apparu évident de créer une iconographie exclusive. En concevant des pictogrammes spécialement imaginés pour illustrer la pratique de la micropraxie, nous avons pu raconter son histoire de manière authentique et engageante.",
        //       "To further immerse users in Pascale's unique world, it became clear that creating an exclusive iconography was essential. By designing custom pictograms that vividly narrate the practice of micropraxis, we were able to tell her story in an authentic and engaging way.",
        //     ],
        //     image: '/projets/pl/pl-section3.png',
        //     },

        //     {title:'Pascale Laffon',
        //       categories: [
        //         ['Illustration', 'Iconographie', 'Charte graphique', 'Motion'],
        //         ['Illustration', 'Iconography', 'Graphic charter', 'Motion']
        //       ],
        //       subtitle: ['Less is more', 'Less is more'],
        //       text: [
        //         "Afin de cristalliser, cette refonte, en dernier lieu, il est apparu essentiel de simplifier le logotype déjà existant de Pascale Laffon et de l’animer.",
        //         "To finalize this redesign, it became essential to simplify Pascale Laffon's existing logotype and animate it.",
        //       ],
        //       video: '/projets/pl/pl-section4.mp4',
        //       },
        // ],
        sectionsImg: 
        [
          ['/projets/nda/nda-1.png','/projets/nda/nda-2.png'],
          []
        ]
      },
      // LES PROJETS PLUS ANCIENS
      // onsight
      {
        id: 5,
        client: 'Maria Lou Diaz',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/os/video-onsight.mp4',
        videoMobile: '/projets/os/video-onsight.mp4', //'/projets/os/video-onsight.mp4'
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
        besoins:[["Découvrez OnSight, l'application mobile de prise de notes ultime pour les cinéphiles et amateurs de séries. Plongez dans un univers graphique aux allures rétro où chaque interaction vous transporte dans le passé. Avec OnSight, vous pouvez facilement ajouter et supprimer des films et séries de votre liste, tout en profitant d'un design vintage captivant."],["Discover OnSight, the ultimate note-taking mobile app for movie and series enthusiasts. Immerse yourself in a retro graphical universe reminiscent of the 80s, where every interaction takes you back in time. With OnSight, you can easily add and remove movies and series from your watchlist, all while enjoying a captivating vintage design."]],
        technologies: ['React native', 'After effects', 'Illustrator'],
        sections: 
        [
          {
          subtitle: ['Repenser la prise de notes avec style', 'Rethinking Note-Taking with Style'],
          text: [
            "'OnSight' c'est l'idée de créer une application mobile pour garder en mémoire ses films et séries préférés en ajoutant une composante nostalgique. OnSight plonge les utilisateurs dans une ambiance vintage tout en leur offrant une plateforme élégante et intuitive pour créer et gérer leur liste de films et séries préférés. Inspirée par l'esthétique des années 80 et 90, l'interface se distingue par des tons bleus calmes mais profonds & des police d'écritures rétro. Les utilisateurs peuvent ajouter autant de titres qu'ils le souhaitent. Les films & séries s'ajoutent et s'empilent sous la forme de pilules comme pour rappeler à l'utilisateur de prendre sa dose quotidienne de cinéma - rendant ainsi la gestion de sa vidéothèque plus ludique.",
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
      // pile-poele
      {
        id: 6,
        client: 'Maria Lou Diaz',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/pp/video_type_hp.mp4', //video dintro
        videoMobile: '/projets/pp/video_type_hp.mp4',
        image: '/projets/pp/pp-img.png',
        title: 'Pile-Poële',
        baseline: ["Ouvrez-vous au monde par la cuisine.", 'Open up to the World through Cuisine'],
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
          ["Promoting an inclusive humanism focused on cuisine. Pile-Poële is a gender-inclusive typeface with a set of pictographic glyphs centered around cuisine. It was developed as part of a master's research project on creating a language system based on cuisine at the University of Toulouse Jean Jaurès in Toulouse in 2021.This font offers a character set that promotes gender parity while allowing for the replacement of words denoting tools, utensils, and food with their pictographic symbols within its code. The alphabetic or pictographic symbols are part of a broader effort to achieve intercultural culinary communication. The primary goal is to enable a more universal form of communication around cuisine. Pile-Poële also features non-binary ligatures. However, in this context, gender inclusivity is not the project central focus but rather an inherent aspect of communication."],
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
            "Ce fut ma première tentative d’une réponse typographique à ce questionnement. Elle reste pour le moment probablement trop mécanique dans sa forme et insuffisamment inclusive d'un point de vue culturel. Pour pallier cet aspect mécanique du glyphe et des caractères, j’envisage également une variante cursive de la fonte. Parmi les autres améliorations à venir, il y aura le dessin des capitales et l’élargissement du set de glyphes pictographiques. Il me semble nécessaire de proposer un dessin des glyphes plus colorés afin de rendre davantage compte de l’aspect sensoriel et vivant propre à la cuisine. Pour l'instant, les pictogrammes sont principalement 'euro-centrés'. L’idée serait donc de proposer l’intégralité des ustensiles et aliments existants mondialement afin que l’inclusivité devienne totale. En ce qui concerne les ligatures 'gender-inclusive' disponibles, elles sont également incomplètes. Ce projet est encore en construction car l’idée d’une communication par le pictogramme est un réel 'challenge' au vu de la pluralité des cultures et des langues existantes. En tant que personne européenne, ce qui pourrait me sembler être une réponse satisfaisante à un système langagier universel, ne l’est pas forcément pour une personne issue d’une culture différente de la mienne. Communiquer autour de la cuisine ne nécessite pas seulement la traduction des ustensiles et aliments. Une multitude d’autres paramètres essentiels sont nécessaires à la transmission d’une recette, d’une technique ou d’un savoir-faire. Pile-Poële reste donc un début de réflexion autour de cette question très vaste de la sauvegarde du patrimoine culinaire populaire humain. Elle reste un début de réponse typographique toujours en construction.",
            "This was my first attempt at a typographic response to this question. At the moment, it may still be too mechanical in form and insufficiently inclusive from a cultural perspective. To address the mechanical aspect of the glyph and characters, I am also considering a cursive variant of the font. Among other forthcoming improvements, there will be the design of uppercase letters and the expansion of the set of pictographic glyphs. It seems necessary to offer a more colorful design of the glyphs to better convey the sensory and lively aspect inherent to cuisine. Currently, the pictograms are mainly 'euro-centric'. The idea, therefore, is to include all utensils and foods existing globally to achieve total inclusivity. Regarding the available gender-inclusive ligatures, they are also incomplete. This project is still under construction because the concept of communication through pictograms is a real challenge given the diversity of cultures and languages. As a European, what may seem like a satisfactory response to a universal language system may not necessarily be so for someone from a different culture than mine. Communicating about cuisine requires not only the translation of utensils and food items but also numerous other essential parameters for transmitting a recipe, technique, or expertise. Therefore, Pile-Poële remains the beginning of reflection on this very broad question of preserving human culinary heritage. It is an initial typographic response still under development.",
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
      // topographies
      {
        id: 7,
        client: 'Maria Lou Diaz',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/topos/topos-video.mp4', //https://www.facebook.com/watch/?v=829436065704861  
        videoMobile: '/projets/topos/topos-video.mp4',
        image: '/projets/topos/topos-img.png',
        title: "Topographies",
        baseline:["Qui a dit que l'ornement était un crime ?","Who said ornament was a crime ?"],
        infos: [
          ['2019', 'Édition', 'Dessins au charbon'],
          ['2019', 'Publishing', 'Charcoal drawings']
        ],
        categories: 
        [
          ['Édition', 'Dessin'],
          ['Publishing', 'Drawing'],
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
      //un endroit où aller
      {
        id: 8,
        client: 'Actes Sud',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/1eoa/1eoa-hover.mp4', 
        videoMobile: '/projets/1eoa/1eoa-hover.mp4', 
        image: '/projets/1eoa/1eoa_2.jpg',
        title: "Un endroit où aller",
        baseline:["Moderniser une collection phare","Modernizing the first collection"],
        infos: [
          ['2021', 'Édition'],
          ['2021', 'Publishing']
        ],
        categories: 
        [
          ['Édition'],
          ['Publishing'],
        ],
        besoins:[
          ["Un endroit où aller est un projet visant à moderniser la collection éponyme de la maison d'édition Actes Sud. Achevé en 2021, ce projet a revitalisé la première collection de la maison d'édition tout en préservant sa forme élancée caractéristique et sa couleur rose pâle."],
          ["Un endroit où aller is a project aimed at modernizing the eponymous collection by the publishing house Actes Sud. Completed in 2021, this project revitalized the publishing house’s first collection while preserving its distinctive slender shape and pale pink color."],
        ],
        technologies:
        [
          ['Photoshop', 'Indesign'],
          ['Photoshop', 'Indesign'],
        ],
        sectionsImg:
        [
          ['/projets/1eoa/1eoa.png','/projets/1eoa/1eoa_2.jpg'],
          ['/projets/1eoa/1eoa.png','/projets/1eoa/1eoa_2.jpg']
        ]
        
      }, 
      //memoire
      {
        id: 9,
        client: 'Université Toulouse Jean-Jaurès 2',
        discover: ["scroller pour découvrir le projet","scroll down to discover the project"],
        videoDesktop: '/projets/memoire/memoire-hover.mp4', 
        videoMobile: '/projets/memoire/memoire-hover.mp4', 
        image: '/projets/memoire/memoire1.jpg',
        title: "En faveur d'une grammaire culinaire populaire",
        baseline:["Communiquer universellement par la cuisine","Cuisine as a mean of communiating"],
        infos: [
          ['2021', 'Édition', 'Rédaction', 'Recherche'],
          ['2019', 'Publishing', 'Writing', 'Research']
        ],
        categories: 
        [
          ['2021', 'Édition', 'Rédaction', 'Recherche'],
          ['2019', 'Publishing', 'Writing', 'Research']
        ],
        besoins:[
          ["Si, comme Yuval Noah Harari, nous partons du principe que notre civilisation s'est construite sur la découverte du feu et sa maîtrise, alors nous pouvons nous appeler une « race de cuisiniers ». En domptant le feu, nous avons inventé la cuisine. Cela a défini notre nature humaine et marqué un moment décisif dans notre développement intellectuel. Cuisiner, c'est ce qui nous rend humains. À mesure que les sociétés se développaient, la cuisine est devenue non seulement essentielle, mais également naturelle. En 2010, la gastronomie française a été inscrite sur la Liste représentative du patrimoine culturel immatériel de l'humanité de l'UNESCO. Cette reconnaissance portait plus précisément sur l'art de manger à la française et les activités sociales qui l'entourent, telles que la convivialité, le plaisir des saveurs, le partage et l'utilisation d'aliments et de produits locaux. Mais si nous voulons parler d'héritage, nous devons aller au-delà de la gastronomie et embrasser la cuisine dans toutes ses dimensions. La mémoire culinaire englobe les recettes, les connaissances, le savoir-faire technique et les compétences manuelles. Ce patrimoine n'est pas spécifique à la gastronomie, qui est davantage liée à l'héritage de la bourgeoisie qu'à celui de l'humanité en général. Manger et cuisiner sont profondément ancrés dans notre culture et notre vie sociale. La cuisine française renforce l'identité collective du pays et enrichit la diversité culturelle dans le monde. Pourtant, notre dépendance à l'industrie agroalimentaire et aux nouvelles technologies nous pousse à cuisiner moins, à préparer moins de repas faits maison, ce qui nuit à notre compréhension et à la transmission de cet héritage. Nous utilisons des robots, faisons confiance à l'industrie et finissons parfois par manger des plats issus de recettes traditionnelles mais transformés industriellement. Dans nos sociétés actuelles, l'alimentation et la cuisine sont étroitement liées à l'organisation de l'espace et du temps. À la maison, cela devient une question d'économie domestique et de gestion familiale. Pourtant, cuisiner, c'est ce qui nous rend humains. Nous sommes les gardiens de cette mémoire. Pour garantir sa préservation, il est essentiel que nous la pratiquions et la fassions vivre au-delà de notre génération. La question au cœur de cette recherche est donc de nous demander comment nous pouvons préserver la mémoire culinaire populaire et, plus particulièrement, comment le design peut nous aider à trouver des solutions."],
          ["If, like Yuval Noah Harari, we work on the assumption that our civilization was built on the discovery of fire and its mastery, then we can call ourselves a «race of cooks». By taming fire, we invented cooking. It defined our human nature and marked a decisive moment in our intellectual development. Cooking is what makes us human. As societies grew bigger, not only did cooking become essential, it also became natural. In 2010, the French gastronomy was inscribed on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity. This recognition was more precisely about the French way of eating and the social activities that surround it; such as conviviality, the pleasure of taste, sharing and the use of local foods and products. But if we want to talk about heritage, we must go beyond gastronomy and embrace cooking in all its dimensions. Culinary memory encompasses recipes, knowledge, technical know-how and manual skill. These are not specific to gastronomy, which has more to do with the legacy of the bourgeoisie than with that of humankind in general. Eating and cooking are deeply rooted in our culture and our social lives. French cooking strengthens the collective identity of the country and enhances cultural diversity in the world. Yet, our dependence on the agro-food industry and new technologies leads us to cook less, make less homemade meals and consequently hinders our understanding and our passing down of this legacy. We use robots, trust the industry and sometimes end up eating food that comes from traditional recipes but that has been processed industrially. In our current societies, food and cooking are closely linked to the organization of space and time. At home, it becomes a question of home economics and family management. Still, cooking is what makes us human. We are the keepers of its memory. To make sure it's preserved, it is essential that we practice it and make it live beyond our generation. The question at the core of this research is then to ask ourselves how we can preserve popular culinary memory and more particularly how design can help us find solutions."],
        ],
        technologies:
        [
          ['Recherche', 'Photoshop', 'Illustrator', 'Indesign'],
          ['Research', 'Photoshop', 'Illustrator', 'Indesign'],
        ],
        sectionsImg:
        [
          ['/projets/memoire/memoire1.jpg','/projets/memoire/memoire2.jpg','/projets/memoire/memoire3.jpg','/projets/memoire/memoire4.jpg','/projets/memoire/memoire5.jpg','/projets/memoire/memoire6.jpg','/projets/memoire/memoire7.jpg','/projets/memoire/memoire8.jpg','/projets/memoire/memoire9.jpeg'],
          ['/projets/memoire/memoire1.jpg','/projets/memoire/memoire2.jpg','/projets/memoire/memoire3.jpg','/projets/memoire/memoire4.jpg','/projets/memoire/memoire5.jpg','/projets/memoire/memoire6.jpg','/projets/memoire/memoire7.jpg','/projets/memoire/memoire8.jpg','/projets/memoire/memoire9.jpeg'],
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
      // Vérifiez si `url` est un tableau et sélectionnez le premier élément si nécessaire
         const finalUrl = Array.isArray(url) ? url[0] : url;
      // Assurez-vous que `finalUrl` est une chaîne avant d'appeler `window.open`
        if (typeof finalUrl === 'string') {
          window.open(finalUrl, '_blank'); // Ouvre dans un nouvel onglet
        } else {
          console.error('URL non valide');
        }
    };


  return (
    <>
      <Header />
      <div className='scrollable-container'>

        {/* VIDEO OPENING -- full width > moitié au scroll */}
        <div className='film' style={{zIndex:'1001'}}>
          <div className='background-video-hp' id='bg-video-projet' >
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
  
        <div  className='section' id='projet' style={{marginBottom: '5rem'}}>
         
         <div className='flex-wrap'>
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
      </div>
         
  
         {/* DIV SECTIONS */}
           {/* SECTION 2 - EXPLICATION PROJET */}
            {descriptionprojectsArr[Number(id)-1].sections && descriptionprojectsArr[Number(id)-1].sections.length > 0 && (
              descriptionprojectsArr[Number(id)-1].sections.map((section) => (
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
              : 'flex-wrap'
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