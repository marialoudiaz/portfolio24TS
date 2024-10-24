import Image from "next/image";
import {forwardRef} from "react";

const Card = forwardRef(({id, frontSrc, backComponent}, ref)=>{

  return(
    <div className="card" id={id} ref={ref}>
      <div className="card-wrapper">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Image
              priority
              src={frontSrc}
              width={500}
              height={500}
              alt="zefz"
            />
          </div>
          <div className="flip-card-back">
            {backComponent}
          </div>
        </div>
      </div>
    </div>
  )
});
export default Card