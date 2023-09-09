import styled from 'styled-components';
import { pixelToRem } from '../../../utils/pixelToRem';

export const Header = styled.header`
  width: 100%;
  padding: ${pixelToRem(24)} 0;
  display: flex;
  align-items: center;

  figure {
    width: ${pixelToRem(201)};

    img {
      max-width: 100%;
      width: auto;
    }
  }
`;
