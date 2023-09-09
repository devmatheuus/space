import styled from 'styled-components';
import { pixelToRem } from '../../../utils/pixelToRem';

export const InitialSection = styled.section`
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;

    .initial-section-text-container {
      width: 60%;

      p:first-of-type {
        margin-bottom: ${pixelToRem(8)};
      }

      p:last-of-type {
        margin-top: ${pixelToRem(24)};
        margin-bottom: ${pixelToRem(32)};
      }
    }

    figure {
      padding-top: ${pixelToRem(16)};
      height: ${pixelToRem(593)};
      text-align: end;

      img {
        position: absolute;
        top: ${pixelToRem(-80)};
        right: ${pixelToRem(-101)};
        max-width: 100%;
      }
    }
  }
  .initial-section-icons-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
