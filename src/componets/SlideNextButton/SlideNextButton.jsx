import { useSwiper } from "swiper/react";

export const SlideNextButton = ({props,className}) =>{
    const swiper = useSwiper();
        return (
            <button className={className} type="button" onClick={() => swiper.slideNext()}>{props}</button>               
      );
}

export const SlidePrevButton = ({props,className}) =>{
    const swiper = useSwiper();
       
return (
            <button className={className} type="button" onClick={() => swiper.slidePrev()} >{props}</button>
      )

}

