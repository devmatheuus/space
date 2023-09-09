import { createGlobalStyle } from 'styled-components';
import { pixelToRem } from '../utils/pixelToRem';
import { FONT_FAMILY } from './variables';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    body {
        font-family: ${FONT_FAMILY.join(', ')};
        -webkit-font-smoothing: antialiased;
        background: var(--background);
    };

    :root {
        
        /* COLORS START */
        
        /* PRIMARY COLORS */
        --space: #0b1e8a;
        --space-light: #3d68b2;
        --space-dark: #040327;


        /* SECONDARY COLORS */
        --mars: #e85937;
        --mars-light: #ff8c70;
        --mars-dark: #cf3f1d;        
        
        /* GRAY COLORS */
        --gray-01: #0d0e13;
        --gray-02: #2c2d3a;
        --gray-03: #60616f;
        --gray-04: #898a93;
        --gray-05: #d5d5db;
        
        /* AUXILIARY COLORS */
        --yellow-sun: #f5d15f;
        --red-jupiter: #e00e34;
        --green-earth: #0fdd86;
        --blue-saturn: #554ad7;
        --light-blue-uranus: #24ffe9;
        --background: #04032C;
        --background-form: #0E0D40;
        --background-section: linear-gradient(180deg, #040327 0%, #0D0E13 24.49%);
        --white: #fff;
        /* COLORS END */

        /* FONTS START */
        --font-display: 800 ${pixelToRem(62)}/${pixelToRem(
  96
)} ${FONT_FAMILY.join(', ')};

--font-heading-1: 700 ${pixelToRem(32)}/${pixelToRem(48)} ${FONT_FAMILY.join(
  ', '
)};

--font-heading-2: 500 ${pixelToRem(24)}/${pixelToRem(32)} ${FONT_FAMILY.join(
  ', '
)};

--font-heading-3: 400 ${pixelToRem(20)}/${pixelToRem(24)} ${FONT_FAMILY.join(
  ', '
)};


--font-mobile-heading-1: 800 ${pixelToRem(36)}/${pixelToRem(
  50
)} ${FONT_FAMILY.join(', ')};

--font-mobile-text-1: 500 ${pixelToRem(14)}/${pixelToRem(
  24
)} ${FONT_FAMILY.join(', ')};


--text-4: 500 ${pixelToRem(18)}/${pixelToRem(32)} ${FONT_FAMILY.join(', ')};
--text-3: 500 ${pixelToRem(18)}/${pixelToRem(24)} ${FONT_FAMILY.join(', ')};
--text-2: 500 ${pixelToRem(14)}/${pixelToRem(20)} ${FONT_FAMILY.join(', ')};
--text-1: 400 ${pixelToRem(16)}/${pixelToRem(24)} ${FONT_FAMILY.join(', ')};
--text-0: 400 ${pixelToRem(14)}/${pixelToRem(24)} ${FONT_FAMILY.join(', ')};

--font-button: 700 ${pixelToRem(18)} ${FONT_FAMILY.join(', ')};


        /* FONTS END */

    }
`;
