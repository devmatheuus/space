import img1 from '../../assets/images/gallery-1.jpg';
import img2 from '../../assets/images/gallery-2.jpg';
import img3 from '../../assets/images/gallery-3.jpg';

interface ICarouselData {
  img: string;
  alt: string;
}

export const carouselData: ICarouselData[] = [
  {
    img: img1,
    alt: 'Mars',
  },
  {
    img: img2,
    alt: 'Cars in Mars',
  },
  {
    img: img3,
    alt: 'Car in Mars',
  },
];
