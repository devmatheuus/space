import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const MainTitleStyle = styled.h1`
  color: var(--white);
  font: var(--font-display);
  line-height: ${pixelToRem(82)};

  span {
    color: var(--yellow-sun);
  }
`;
