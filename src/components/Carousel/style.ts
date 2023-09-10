import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const CarouselContainer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 60%;
  right: ${pixelToRem(-100)};
  top: ${pixelToRem(-45)};
  max-width: ${pixelToRem(1142)};

  figure {
    width: ${pixelToRem(345)};
    height: ${pixelToRem(353)};
    padding-right: 25px;

    img {
      border-radius: 10px;
      width: 100%;
    }
  }
`;
