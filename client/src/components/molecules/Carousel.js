import React from 'react';
import { useContext } from "react";
import { context } from "../../context/APIProvider";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const Carousel = () => {
  const APIContext = useContext(context)
  const handleDragStart = (e) => e.preventDefault();
  
  const img = APIContext.projectImageData.data.map((element, index) => (
    <div key={element.id}>
      <img src={element.image_address} onDragStart={handleDragStart} alt="" />
    </div>
  ));

  return (
    <AliceCarousel mouseTracking >{img}</AliceCarousel>
  );
};

export default Carousel;