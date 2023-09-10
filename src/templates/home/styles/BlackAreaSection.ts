import styled from 'styled-components';
import { pixelToRem } from '../../../utils/pixelToRem';
import stars from '../../../assets/images/stars.png';

export const BlackAreaSection = styled.section`
  max-width: 100%;
  width: 100vw;
  position: absolute;
  left: 0;
  background: var(--background-section);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  padding: ${pixelToRem(77)} ${pixelToRem(102)} 0 0;

  .about-mars-container {
    width: 100%;
    max-width: 1480px;
    z-index: 3;
    position: relative;

    .container-about-content {
      display: flex;
      gap: ${pixelToRem(42)};
      align-items: center;

      .about-mars-image {
        width: 50%;
      }

      .about-mars-texts {
        width: 50%;

        > h2 {
          margin-top: ${pixelToRem(14)};
          margin-bottom: ${pixelToRem(26)};
        }

        p:nth-child(3) {
          margin-bottom: ${pixelToRem(24)};
        }
      }
    }

    .about-mars-lines-container {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background: transparent;
    }
  }

  .stars-background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-image: url(${stars});
    z-index: -1;
  }
`;
