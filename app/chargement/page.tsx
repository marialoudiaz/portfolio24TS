"use client";
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
import { useData } from '@/app/context/DataContext';
import '../../styles/App.scss';
import '../../globals.css';
import Image from 'next/image';
/* MEDIAS */
import branding_specialist from '../../public/img/marialoudiaz-agence.jpg';


const Chargement = () => {
  const router = useRouter();
  const { updateData } = useData();
  const [hoveredLink, setHoveredLink] = useState('');

  const navLinks = [
    { label: 'Français', id: 'fr' },
    { label: 'English', id: 'en' },
  ];
  const onHover = (lien: string) => {
    setHoveredLink(lien);
  };
  const onLeave = () => {
    setHoveredLink('');
  };
  // Données des projets
  const indepArray = [
    {
      ids: 0,
      Lang: 'FR',
      header:['Mes Services','Mes Réalisations'],
      footer:"révélons votre unicité",
      hp:["La création d'identités visuelles",'sur-mesure','pour tous•tes'],
      videoOrdi: 'videoReveal1',
      videoTel: 'videoReveal2',
      discover: "découvrir le showréel",
      location: ['actuellement à','Melbourne, AUS.'], // location
      cta : ['une idée, un projet ? parlons-en','je réserve une consultation','je découvre les projets','programmer une visio','je préfère vous écrire'],
      presentation: ["Directeur artistique spécialisé dans le branding","Du développement web au design imprimé, j'aide les travailleurs indépendants à construire leur identité visuelle et à lancer leur projet."],
      expertise: [' • Design imprimé • Packaging • Signalétique • Développement web • Motion • Vidéo • Photo • Illustration '],
      services: ['Mes services','Une multitude de compétences pour un projet unique.','Nous élaborons, ensemble, une offre sur-mesure selon vos besoins.','Site vitrine','Site multipages','Vidéos & photos','Réseaux sociaux','Articles de blog','Identité visuelle', 'Logotype','Signalétique','Packaging','Illustration'],
      // logiciels: [html,css,js,node,react,wordpress,webflow,figma,adobexd,github,fontlab,photoshop,lightroom,illustrator,indesign,premiere,aftereffect],
      accordion: [
        'Découvrir mes services',
        'Directeur artistique spécialisé dans le branding ?',
        'Écoute attentive, passion & créativité, communication claire et sans jargon. Nous travaillons en équipe main dans la main',
        'Le branding c’est quoi ?',
        'Imaginez que vous lanciez votre entreprise. Le designer de marque, c’est celui qui traduit votre histoire en images. Il crée votre logo, choisit les couleurs et les typographies qui reflètent votre personnalité. Grâce à lui, votre marque devient reconnaissable et mémorable dès le premier regard, parlant de vous sans un mot. Plus simplement ? Je crée l’identité visuelle et émotionnelle de votre marque. Le logo, les couleurs, la typographie jusqu’aux supports visuels imprimés et web. Pour que votre marque soit instantanément reconnaissable par votre audience.',
        'Qu’est-ce qui vous rend différent des autres?',
        "Ce qui me distingue, c'est mon approche basée sur une écoute attentive et approfondie de vos besoins. Plutôt que de proposer des solutions prédéfinies, je m'assure de comprendre pleinement vos attentes pour vous offrir des services réellement adaptés. Ma polyvalence, aussi bien en design web qu'en print, me permet de vous proposer une offre complète, alliant maîtrise des enjeux du digital et de l'imprimé. Grâce à mon expérience en tant que designer graphique et développeur, je saisis les subtilités de ces deux mondes, pour un résultat à la hauteur de vos ambitions.",
        "Et si on prenait le temps d'en parler ?"
      ],
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
        branding_specialist
      ],
      deroule:['flex', 'Votre projet', "Chaque projet est unique tout comme vous. Ainsi, je vous accompagne à chaque étape afin de créer une solution sur-mesure la mieux adaptée à vos besoins.", "Juste une mise au point", "Nous parlons de votre projet et établissons ensemble une stratégie. Nous définissons alors les services qu'il vous faut. Chaque devis est réalisé sur-mesure pour être au plus près de vos besoins.", "L’aventure commence", "Je vous retourne un devis comprenant tous les services ainsi que le temps nécessaire à leurs réalisations. La date du livrable est établie.", "Tada!", "C’est le jour où vous recevez votre premier livrable. À partir de là, vous avez la possibilité de demander deux modifications (offertes)."],
      citation: 'Pour un design qui vous ressemble.',
      form: ['Racontons','votre','histoire','Nom & Prénom','Email','Entreprise/Projet', "Secteur d'activité","Quel type de projet recherchez-vous ?","Site internet", "Identité visuelle", "Autre (préciser)","Dites m'en plus sur votre projet","Collaborons, pour emmener votre business à l’étape supérieure & le faire décoller 🚀. Des idées, des questions, une terrible envie de me contacter ? Je vous écoute.",'Envoyer'],
      words: ['auto-entrepreneur.se','petite entreprise','start-up','porteur.se de projet','idéaliste','rêveur.se'],
      ml:[
        "Mentions Légales",
        "À propos Maria Lou Diaz",
        "Éditeurs du site",
        "Le site www.marialoudiaz.fr est édité par Maria Lou Diaz, micro-entreprise immatriculée au Registre du Commerce et des Sociétés de Nîmes sous le numéro 892878067, dont le siège social est situé au 2 rue de la Chicanette, 30250 Combas, France. Contact : contact@marialoudiaz.fr. Hébergeur : Vercel, Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. Conception et développement : Maria Lou Diaz",
        "Propriété intellectuelle",
        "La présentation et le contenu de ce site, protégés par la législation en vigueur, appartiennent à Maria Lou Diaz. Aucune reproduction, représentation, adaptation, traduction et /ou modification, partielle ou intégrale, ou transfert vers un autre site, ne pourra en être faite sans l’accord préalable et écrit de Maria Lou Diaz. Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.",
        "Politique de confidentialité",
        "Aucune donnée utilisateur n’est stockée de façon permanente. Les adresses e-mail collectées via le formulaire de contact ne sont ni stockées dans un fichier client ni partagées avec des tiers.",
        "Liens hypertextes",
        "Les liens externes présents sur ce site sont fournis à titre d'information. Maria Lou Diaz décline toute responsabilité concernant leur contenu et leur conformité aux normes d’ordre public et bonnes mœurs, d’une part, ni de leur politique de protection des données personnelles ou d’utilisation qui en seraient faites, d’autre part. En accédant à un autre site, par l’intermédiaire d’un lien hypertexte, vous acceptez que cet accès s’effectue à vos risques et périls. En conséquence, tout préjudice direct ou indirect résultant de votre accès à un autre site relié par un lien hypertexte ne peut engager la responsabilité de Maria Lou Diaz.",
        "Accès au site",
        "Maria Lou Diaz s'efforce de garantir l'accès continu au site www.marialoudiaz.fr. Des interruptions peuvent toutefois se produire pour maintenance ou raisons techniques, sans responsabilité de l'éditrice pour les conséquences éventuelles."
      ]
    },
  ];
    
  const indepArrayEN = [
    {
      ids: 1,
      Lang: 'EN',
      header:['My Services','My Projects'],
      footer:"let's design your uniqueness",
      hp:['The creation of','custom','visual identities for everyone'],
      videoOrdi: 'videoReveal5',
      videoTel: 'videoReveal6',
      discover: 'discover the showreel',
      location: ['currently in','Melbourne, AUS.'], // location
      cta: [
        "an idea, a project? let's talk about it",
        "I book a consultation",
        "I discover the projects",
        "schedule a video call",
        "I'd rather call you"
      ],
      presentation: ["Art director specialized in branding.", "From web development to print design, I help independent workers build their visual identity and launch their project."],
      expertise: [' • Print • Packaging • Signage • Web development • Motion • Video • Photo • Illustration '],
      services: ['My services','A multitude of skills for a unique project.','We develop, together, a tailor-made offer according to your needs.','Showcase website', 'Multipage website','Videos & photos', 'Social medias', 'Blog', 'Visual identity', 'Logotype', 'Signage', 'Packaging', 'Illustration'],
      //logiciels: [html,css,js,node,react,wordpress,webflow,figma,adobexd,github,fontlab,photoshop,lightroom,illustrator,indesign,premiere,aftereffect],
      accordion: [
        'Discover my services',
        'Art director specialized in branding?',
        'Attentive listening, passion & creativity, clear & jargon-free communication. We work as a team.',
        'What is branding?',
        'Imagine you’re launching your business. The brand designer is the one who translates your story into images. They create your logo, choose the colors and fonts that reflect your personality. Thanks to them, your brand becomes recognizable and memorable at first glance, speaking for you without a word. In simpler terms? I create your brand’s visual and emotional identity. The logo, colors, typography, and all visual materials, both printed and digital. So that your brand is instantly recognizable and connects with your audience.',
        'What makes you different from others?',
        "What sets me apart is my approach, which is based on attentive and thorough listening to your needs. Rather than offering pre-packaged solutions, I make sure to fully understand your expectations to provide truly tailored services. My versatility in both web and print design allows me to offer a comprehensive service, combining expertise in both digital and print mediums. With my experience as a graphic designer and developer, I grasp the nuances of these two worlds, delivering results that meet your ambitions.",
        "Shall we take the time to discuss it?"
      ],
      approche: ['My approach', 'To create is to make the invisible visible.','Authenticity','Creating a form of preciousness beyond paper.','Detail','The poetry of detail: symbolism, framing, choice of words.','Harmony','The pursuit of beauty: shape, curves of a font, the symbiosis of colors.',"Nature","Inspired by the harmony, symmetry, and symbolism of plants and flowers.","Minimalism","Seeking the essence of an idea to communicate with memorability.","Color","Express an emotion & animate your universe with the power of color.",branding_specialist],
      deroule:['flex','Your project',"Each project is unique, just like you. That's why I support you at every step, to create a custom solution that best fits your needs.","Just a clarification","We discuss your project and together establish a strategy. Depending on your project, we define the services required. Each quote is custom-made to closely match your needs.","The adventure begins","I will send you a quote including all services as well as the time needed for their completion. The delivery date is set.","Tada!","This is the day you receive your first deliverable. From then on, you have the option to request two modifications (free of charge)."],
      citation: 'For a design that suits you.',
      form: ["Let's tell",'your','story','First & Last Name','Email','Company/Project','Industry/Sector','What kind of project are you after ?','Website', 'Visual identity', 'Other (explain)','Tell me more about your project',"Let's collaborate to take your business to the next level and make it soar 🚀. Ideas, questions, a strong desire to get in touch? I'm listening.","Send"],
      words: ["sole trader", "small business", 'start-up', 'project leader', 'idealist', 'dreamer'],
      ml: [
        "Legal Notice",
        "About Maria Lou Diaz",
        "Site Publisher",
        "The website www.marialoudiaz.fr is published by Maria Lou Diaz, a sole proprietorship registered with the Nîmes Trade and Companies Register under number 892878067, with headquarters located at 2 Rue de la Chicanette, 30250 Combas, France. Contact: contact@marialoudiaz.fr. Hosting provider: Vercel, Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Design and development: Maria Lou Diaz",
        "Intellectual Property",
        "The presentation and content of this site are protected by applicable laws and are the property of Maria Lou Diaz. No reproduction, representation, adaptation, translation, and/or modification, whether in part or in full, or transfer to another site, may occur without the prior written consent of Maria Lou Diaz. Any unauthorized use of the site or any of its elements will be considered infringement and may be subject to legal action under articles L.335-2 and following of the Intellectual Property Code.",
        "Privacy Policy",
        "No user data is stored permanently. Email addresses collected through the contact form are not stored in a client file or shared with third parties.",
        "Hypertext Links",
        "External links on this site are provided for informational purposes only. Maria Lou Diaz disclaims any responsibility for their content and compliance with public order and decency standards, as well as their personal data protection policies. By accessing another site via a hyperlink, you agree to do so at your own risk. Consequently, any direct or indirect damage resulting from your access to another linked site cannot engage the responsibility of Maria Lou Diaz.",
        "Site Access",
        "Maria Lou Diaz strives to ensure continuous access to the website www.marialoudiaz.fr. However, interruptions may occur for maintenance or technical reasons, without liability for the publisher for any resulting consequences."]
},]; 

  const selectMenu = (props: string) => {
    const arrayRecue = props === 'en' ? indepArrayEN : indepArray;
    updateData(arrayRecue);
    router.push(`/homepage`);
  };
// const selectLang = () => {
//   if (isClient) {
//     if (/^fr\b/.test(navigator.language)) {
//       return (
//         <>
//           <h1 style={{color:'white'}}>Bienvenue</h1>
//           <h3 style={{color:'white'}}>Choisissez votre langue</h3>
//         </>
//       );
//     } else {
//       return (
//         <>
//           <h1 style={{color:'white'}}>Welcome</h1>
//           <h3 style={{color:'white'}}>Choose your language</h3>
//         </>
//       );
//     }
//   }
//   return null;
// };

return (
  <>
    <div className='relative'>
      <div className='gridVideo'>
        <h1 style={{opacity:'0', fontSize:'2px'}}>Premium branding services - Unique and custom design | Maria Lou Diaz</h1>
        <h2 style={{color:'white'}}>Welcome</h2>
        <h3 style={{color:'white'}}>Choose your language</h3>
        {/* 
        {selectLang()}
        */}
        {navLinks.map(link => (
          <div key={link.id} className='inline-flex button-navbar'>
            <p
              className={hoveredLink === link.id ? 'hovered-link' : ''}
              onMouseEnter={() => onHover(link.id)}
              onMouseLeave={onLeave}
              onClick={() => selectMenu(link.id)}
              style={{color:'white'}}
            >
              {link.label}
            </p>
          </div>
        ))}
      </div>
       <Image 
        src='/img/fond-homepage.png' 
        alt='logo en blanc sur fond de couleur'
        style={{width:'100vw', height:'100vh', objectFit:'cover'}}
        width={8000} height={1000}/>
    </div>
  </>
);
};
export default Chargement;