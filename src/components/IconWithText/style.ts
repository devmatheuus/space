import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const IconWithTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: ${pixelToRem(8)};

  p {
    color: var(--gray-05);
    font: var(--text-1);
  }
`;
