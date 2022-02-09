import { useSwiper } from "swiper/react";
import { useState } from "react";


// let counter = 0

export const SlideNextButton = ({counter, setCounter}) =>{
    
    
    const swiper = useSwiper();
    const [changeText, setchangeText] = useState("Guardar perfil");
    
    const sumcounter = () =>{
        setCounter(counter + 1)
    console.log(counter)
    if(counter === 0){
        setchangeText("Guardar emergencia");
        }else if(counter === 1){
        setchangeText("Guardar alergias");
        }  
}
       
    if(counter < 3 ){
        return (
            <button onClick={() => {swiper.slideNext() 
                                        sumcounter()}}>{changeText}</button>               
      );
    }else{
        return null;  
    }
}

export const SlidePrevButton = ({counter, setCounter}) =>{
    const swiper = useSwiper();

   const substractCounter = () =>{
    setCounter(counter--) ;
    console.log('restando', counter)
}
       
return (
            <button onClick={() => {swiper.slidePrev()
                                    substractCounter()}}>Añadir nuevos</button>
      );

}

