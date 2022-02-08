import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.scss";
import { Pagination } from "swiper";
import { Link } from "react-router-dom"
 
  
const Slider = () => {
  return (
<div className="DivSlide">
<div className="Logo">
<img src="https://res.cloudinary.com/dvawsqdhx/image/upload/v1644320306/Applergic/logo_2x_hvqufs.png" alt="imagen de intro"/>
</div>

<Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://res.cloudinary.com/dvawsqdhx/image/upload/v1644320313/Applergic/scan2_mtkr5j.png' alt='imagen slide 1'/><p>¡Bienvenido aApplergic! Escanea el código de barras de tu producto y Applergic te dirá si es apto para ti</p></SwiperSlide>
        <SwiperSlide><img src='https://res.cloudinary.com/dvawsqdhx/image/upload/v1644320313/Applergic/scan2_mtkr5j.png' alt='imagen slide 1'/><p>¡Bienvenido aApplergic! Escanea el código de barras de tu producto y Applergic te dirá si es apto para ti</p></SwiperSlide>
        <SwiperSlide><img src='https://res.cloudinary.com/dvawsqdhx/image/upload/v1644320313/Applergic/scan2_mtkr5j.png' alt='imagen slide 1'/><p>¡Bienvenido aApplergic! Escanea el código de barras de tu producto y Applergic te dirá si es apto para ti</p></SwiperSlide>
        <SwiperSlide><img src='https://res.cloudinary.com/dvawsqdhx/image/upload/v1644320313/Applergic/scan2_mtkr5j.png' alt='imagen slide 1'/><p>¡Bienvenido aApplergic! Escanea el código de barras de tu producto y Applergic te dirá si es apto para ti</p></SwiperSlide>
        
        
</Swiper>
<div className="Botones">
<Link className="Link1" to="/Login">Saltar</Link>
<Link className="Link2" to="/">Terminar {'>'}</Link>
</div>

</div>




  )
    
  

};

export default Slider;
