import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { carouselData } from '../../utils/data/carousel';
import { CarouselContainer } from './style';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Mostra 2 imagens completas
    slidesToScroll: 1, // Rolagem de 1 imagem por vez
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Ativar o modo central
    centerPadding: '25px', // Espaça
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {carouselData.map((item) => (
          <figure key={item.alt}>
            <img src={item.img} alt={item.alt} />
          </figure>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
