import { useSwiper } from "swiper/react";

export const SlideNextButton1 = () =>{
    const swiper = useSwiper();
        return (
            <button type="button" onClick={() => swiper.slideNext()}>Guardar perfil</button>               
      );
}

export const SlideNextButton2 = () =>{
    const swiper = useSwiper();
        return (
            <button type="button" onClick={() => swiper.slideNext()}>Guardar emergencia</button>               
      );
}

export const SlideNextButton3 = () =>{
    const swiper = useSwiper();
        return (
            <button type="button" onClick={() => swiper.slideNext()}>Guardar alergias</button>               
      );
}

export const SlidePrevButton = ({counter, setCounter}) =>{
    const swiper = useSwiper();
       
return (
            <button type="button" onClick={() => swiper.slidePrev()} >Añadir nuevos</button>
      )

}

