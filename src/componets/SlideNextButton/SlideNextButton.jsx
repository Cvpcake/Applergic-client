import { useSwiper } from "swiper/react";

export const SlideNextButton = ({props,className,href,className1}) =>{
    const swiper = useSwiper();
        return (
            <a href={href} className={className1}><button type="button" className={className} onClick={() => swiper.slideNext()}>{props}</button></a>          
      );
}

export const SlidePrevButton = ({props,className}) =>{
    const swiper = useSwiper();
       
return (
            <button className={className} type="button" onClick={() => swiper.slidePrev()} >{props}</button>
      )

}

