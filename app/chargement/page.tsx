"use client"; // Marquer ce composant comme Client Component
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Importer useRouter depuis next/navigation
import '../../styles/App.scss';
import HeaderFirst from '../../components/navbar/headerFirst';

/*MEDIAS*/
import visual_indentity_specialist from '../../public/img/marialoudiaz-independant.jpg';
import branding_specialist from '../../public/img/marialoudiaz-agence.jpg';
import html from '../../public/icons/softs/html.png';
import css from '../../public/icons/softs/css.png';
import js from '../../public/icons/softs/js.png';
import node from '../../public/icons/softs/node.png';
import react from '../../public/icons/softs/react.png';
import wordpress from '../../public/icons/softs/wordpress.png';
import webflow from '../../public/icons/softs/webflow.png';
import figma from '../../public/icons/softs/figma.png';
import adobexd from '../../public/icons/softs/adobexd.png';
import github from '../../public/icons/softs/github.png';
import fontlab from '../../public/icons/softs/fontlab.png';
import photoshop from '../../public/icons/softs/photoshop.png';
import lightroom from '../../public/icons/softs/lightroom.png';
import illustrator from '../../public/icons/softs/illustrator.png';
import indesign from '../../public/icons/softs/indesign.png';
import premiere from '../../public/icons/softs/premiere.png';
import aftereffect from '../../public/icons/softs/aftereffect.png';

const Chargement = () => {
  const router = useRouter();
  // Données des projets
  const indepArray = [
    {
      ids: 0,
      Lang: 'FR',
      header:['mes services','mes réalisations'],
      hp:["La création d'identités visuelles",'sur-mesure','pour les indépendants'],
      videoOrdi: 'videoReveal1',
      videoTel: 'videoReveal2',
      discover: "découvrir le showréel",
      location: ['actuellement à','Montpellier, Fr.'], // location
      cta : ['une idée, un projet ? parlons-en','je réserve une consultation','combien coûte une identité visuelle ?','Pas d’offres prédéfinies, car chaque projet est unique.','programmer une visio'],
      presentation: ["Directeur artistique spécialisé dans le branding","Du développement web au design imprimé,","j'aide les travailleurs indépendants à construire","leur identité visuelle et à lancer leur projet."],
      expertise: [' • Design imprimé • Packaging • Signalétique • Développement web • Motion • Vidéo • Photo • Illustration '],
      services: ['Mes services','Une multitude de compétences pour un projet unique.','Nous élaborons, ensemble, une offre sur-mesure selon vos besoins.','Site vitrine','Site multipages','Vidéos & photos','Réseaux sociaux','Articles de blog','Identité visuelle', 'Logotype','Signalétique','Packaging','Illustration'],
      logiciels: [html,css,js,node,react,wordpress,webflow,figma,adobexd,github,fontlab,photoshop,lightroom,illustrator,indesign,premiere,aftereffect],
      approche: [
        'Mon approche',
        'Créer, c\'est rendre visible l\'invisible.',
        'Authenticité',
        'Créer une forme de préciosité au-delà du papier.',
        'Détail',
        'La poésie du détail : symbolisme, cadrage, choix des mots.',
        'Harmonie',
        'La quête de la beauté : forme, courbes d\'une police, la symbiose des couleurs.',
        'Nature',
        'Inspirée par l\'harmonie, la symétrie et le symbolisme des plantes et des fleurs.',
        'Minimalisme',
        'Rechercher l\'essence d\'une idée pour communiquer avec mémorabilité.',
        'Couleur',
        'Exprimer une émotion & animer votre univers par la puissance de la couleur.',
        visual_indentity_specialist
      ],
      deroule:['flex', 'Votre projet', "C'est une collaboration sur-mesure pour lui donner vie. Chaque projet est unique tout comme vous. Ainsi, je vous accompagne à chaque étape afin de créer une solution sur-mesure la mieux adaptée à vos besoins.", "Juste une mise au point", "Nous parlons de votre projet et établissons ensemble une stratégie. Nous définissons alors les services qu'il vous faut. Chaque devis est réalisé sur-mesure pour être au plus-prêt de vos besoins.", "L’aventure commence", "Je vous retourne un devis comprenant tous les services ainsi que le temps nécessaire à leurs réalisations. La date du livrable est établie.", "Tada!", "C’est le jour où vous recevez votre premier livrable. À partir de là, vous avez la possibilité de demander deux modifications (offertes)."],
      citation: 'Pour un design qui vous ressemble.',
      form: ['Racontons','votre','histoire','Prénom','Email','Votre message','Envoyer',"Collaborons, pour emmener votre business à l’étape supérieure & le faire décoller 🚀. Des idées, des questions, une terrible envie de me contacter ? Je vous écoute."],
      words: ['auto-entrepreneur.se','petite entreprise','start-up','porteur.se de projet','idéaliste','rêveur.se']
  },
  ];
    const indepArrayEN = [
    {
      ids: 2,
      Lang: 'EN', //aide pour afficher projets en FR ou EN
      header:['my services','my projects'],
      hp:['The creation of','custom','visual identities for solopreneurs'],
      videoOrdi: 'videoReveal5',
      videoTel: 'videoReveal6',
      discover: 'discover the showreel',
      location: ['currently in','Montpellier, Fr.'], // location
      cta: [
        "an idea, a project? let's talk about it",
        "I book a consultation",
        "how much does a visual identity cost?",
        "No predefined offers, because each project is unique.",
        "schedule a video call"
      ],
      presentation: ["Art director specialized in branding.", "From web development to print design,", "I help independent workers build their", "visual identity and launch their project."],
      expertise: [' • Print • Packaging • Signage • Web development • Motion • Video • Photo • Illustration '],
      services: ['My services','A multitude of skills for a unique project.','We develop, together, a tailor-made offer according to your needs.','Showcase website', 'Multipage website','Videos & photos', 'Social medias', 'Blog', 'Visual identity', 'Logotype', 'Signage', 'Packaging', 'Illustration'],
      logiciels: [html,css,js,node,react,wordpress,webflow,figma,adobexd,github,fontlab,photoshop,lightroom,illustrator,indesign,premiere,aftereffect],
      approche: ['My approach', 'To create is to make the invisible visible.','Authenticity','Creating a form of preciousness beyond paper.','Detail','The poetry of detail: symbolism, framing, choice of words.','Harmony',
'The pursuit of beauty: shape, curves of a font, the symbiosis of colors.',"Nature","Inspired by the harmony, symmetry, and symbolism of plants and flowers.","Minimalism","Seeking the essence of an idea to communicate with memorability.","Color","Express an emotion & animate your universe with the power of color.",visual_indentity_specialist],
      deroule:['flex','Your project',"It's a tailor-made collaboration to bring it to life. Each project is unique, just like you. That's why I support you at every step, to create a custom solution that best fits your needs.","Just a clarification","We discuss your project and together establish a strategy. Depending on your project, we define the services required. Each quote is custom-made to closely match your needs.","The adventure begins","I will send you a quote including all services as well as the time needed for their completion. The delivery date is set.","Tada!","This is the day you receive your first deliverable. From then on, you have the option to request two modifications (free of charge)."],
      citation: 'For a design that suits you.',
      form: ["Let's tell",'your','story','Surname','Email','Your message','Send',"Let's collaborate to take your business to the next level and make it soar 🚀. Ideas, questions, a strong desire to get in touch? I'm listening."],
      words: ['self-employed', 'small business', 'start-up', 'project leader', 'idealist', 'dreamer']
  },
  ]; 
  const selectMenu = (lang) => { // Ajouter le type 'number' au paramètre index
    let arrayRecue;
    // Déterminer le tableau à envoyer selon la langue et l'index sélectionné
    if (lang === 'en') {
      arrayRecue = indepArrayEN;
    } else {
      arrayRecue = indepArray;
    }
    const dataToSend = {arrayRecue};
    localStorage.setItem('data', JSON.stringify(dataToSend));
    router.push(`/homepage`)
  };

  const selectLang =()=>{
    if (/^fr\b/.test(navigator.language)) {
      return(
        <>
        <h1>Bienvenue</h1>
        <h2>Choisissez votre langue</h2>
        </>
      )
    } else{
      return(
        <>
          <h1>Welcome</h1>
          <h2>Choose your language</h2>
        </>
    )
    }
  }
  
  return (
    <>
    {/* <HeaderFirst /> */}
      <div className='film2'>

        <div className='gridHover'>
          {selectLang()}

          <div>
            <button className='btn-transp-hp' style={{marginTop:'2rem'}}>  
            <p className='btn-transp-p' onClick={() => selectMenu('fr')}>Français</p>
            </button>

            <button className='btn-transp-hp' style={{marginTop:'2rem'}}>  
              <p className='btn-transp-p' onClick={() => selectMenu('en')}>English</p>
            </button>
          </div>
        </div>

        <video className='background-video2' autoPlay muted playsInline>
          <source src="/projets/branding_specialist_melbourne.mp4" type='video/mp4' />
        </video>
      </div>
    </>
  );
};

export default Chargement;
