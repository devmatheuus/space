import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const SubTitleStyle = styled.h2`
  color: var(--white);
  font: var(--font-heading-1);
  line-height: ${pixelToRem(48)};
`;
