import React, { forwardRef } from 'react';
import Image from 'next/image';

// Déclarez une interface pour les propriétés attendues
interface CustomCardProps {
  item: {
    alt: string[];  // Utilisation d'un tableau de chaînes si `alt` contient plusieurs éléments
  };
  id: string;
  frontSrc: string;
  backText: string;
  onMouseEnter?: () => void;  // `onMouseEnter` est facultatif si non toujours nécessaire
}

const CustomCard = forwardRef<HTMLDivElement, CustomCardProps>(({ item, id, frontSrc, backText, onMouseEnter }, ref) => {
  
  return (
    <div className='card' id={id} ref={ref}  onMouseEnter={onMouseEnter}
>
    <div className='card-wrapper'>

      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          {/* Face photo */}
          <Image 
            priority
            src={frontSrc}
            alt={item.alt[0]}
            width={1000}
            height={0}
            // z-index='5'
          />
        </div>

        {/* Face txt */}
        <div className='flip-card-back'>
        <Image 
            priority
            src={backText}
            alt={item.alt[1]}
            width={1000}
            height={0}
          />
        </div>
      </div>
    </div>

  </div>

  )
  
});
CustomCard.displayName = 'CustomCard';
export default CustomCard;


  // <Card
  //   ref={ref}
  //   id={`card-${index + 1}`}
  //   isFooterBlurred
  //   radius="lg"
  //   className="flip-card-inner flip-card-front"
  //   onPress={() => onCardUp(index, Lang)}
  //   onPressEnd={onCardDown}
  // >
  //   <Image
  //     alt={item.alt}
  //     className="object-cover"
  //     width={500}
  //     height={0}
  //     src={item.link}
  //   />
  //   <CardFooter id={`footer-text-${index + 1}`} className="flex flex-col gap-[2px] justify-between before:bg-white/10 border-white/20 border-1 py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small ml-1 z-10">
  //     <p id='footerTitle' className="text-tiny text-black/80">{Lang === 'FR' ? item.title[0] : item.title[1]}</p>
  //     <p>{footerTexts[index]}</p>
  //     <Button 
  //       className="text-tiny text-white bg-black/2 w-100" 
  //       variant="flat" 
  //       color="default" 
  //       radius="lg" 
  //       size="sm" 
  //       onPress={() => onCardUp(index, Lang)}
  //       onPressEnd={onCardDown}
  //     >
  //       <p style={{ color: 'white' }}>{Lang === 'FR' ? 'En apprendre davantage' : 'Learn more'}</p>
  //     </Button>
  //   </CardFooter>
  // </Card>