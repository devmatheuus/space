import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const TextLabelStyle = styled.p`
  color: var(--yellow-sun);
  font: var(--text-4);
  letter-spacing: ${pixelToRem(5)};
  text-transform: uppercase;
`;
