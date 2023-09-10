import styled from 'styled-components';
import { pixelToRem } from '../../../utils/pixelToRem';

export const MediaSection = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1480px;
  padding-left: ${pixelToRem(112)};

  margin-top: ${pixelToRem(174)};
  gap: ${pixelToRem(115)};

  padding-bottom: ${pixelToRem(250)};
  position: relative;

  .media-text-content {
    width: 40%;
    > h2 {
      margin-top: ${pixelToRem(13)};
      margin-bottom: ${pixelToRem(16)};

      span {
        color: var(--yellow-sun);
      }
    }

    p {
      color: var(--mars-light);
    }
  }
`;
