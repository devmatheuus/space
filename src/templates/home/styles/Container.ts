import styled from 'styled-components';
import { pixelToRem } from '../../../utils/pixelToRem';

export const Container = styled.main`
  position: relative;
  width: 100%;
  max-width: 1480px;
  height: 100%;
  margin: 0 auto;
  padding: 0 ${pixelToRem(102)} 0 ${pixelToRem(112)};
`;
