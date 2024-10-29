import React, { forwardRef } from 'react';
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const CustomCard = forwardRef(({ item, index, onCardUp, onCardDown, Lang, footerTexts }, ref) => (
  <Card
    ref={ref}
    id={`card-${index + 1}`}
    isFooterBlurred
    radius="lg"
    className="flip-card-inner flip-card-front"
    onPress={() => onCardUp(index, Lang)}
    onPressEnd={onCardDown}
  >
    <Image
      alt={item.alt}
      className="object-cover"
      width={500}
      height={0}
      src={item.link}
    />
    <CardFooter id={`footer-text-${index + 1}`} className="flex flex-col gap-[2px] justify-between before:bg-white/10 border-white/20 border-1 py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small ml-1 z-10">
      <p id='footerTitle' className="text-tiny text-black/80">{Lang === 'FR' ? item.title[0] : item.title[1]}</p>
      <p>{footerTexts[index]}</p>
      <Button 
        className="text-tiny text-white bg-black/2 w-100" 
        variant="flat" 
        color="default" 
        radius="lg" 
        size="sm" 
        onPress={() => onCardUp(index, Lang)}
        onPressEnd={onCardDown}
      >
        <p style={{ color: 'white' }}>{Lang === 'FR' ? 'En apprendre davantage' : 'Learn more'}</p>
      </Button>
    </CardFooter>
  </Card>
));

export default CustomCard;
