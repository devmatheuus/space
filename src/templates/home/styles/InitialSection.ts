import styled from 'styled-components';
import { pixelToRem } from '../../../utils/pixelToRem';

export const InitialSection = styled.section`
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: ${pixelToRem(119)};

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
      position: absolute;
      top: 0px;
      right: 0px;
      padding-top: ${pixelToRem(16)};
      width: ${pixelToRem(550)};
      height: ${pixelToRem(593)}; /* width: 30%; */
      text-align: end;

      img {
        max-width: 100%;
      }
    }
  }
  .initial-section-icons-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${pixelToRem(135)};
  }
`;
