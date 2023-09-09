import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';
import { ButtonHTMLAttributes } from 'react';

interface IButtonStyle extends ButtonHTMLAttributes<IButtonStyle> {
  fullWidth?: boolean;
}

export const ButtonStyle = styled.button<IButtonStyle>`
  cursor: pointer;

  background: var(--mars);
  color: var(--white);

  border: none;
  border-radius: 6px;

  height: ${pixelToRem(52)};
  width: ${(props) => {
    if (props.fullWidth) {
      return '100%';
    }

    return pixelToRem(264);
  }};

  text-align: center;
  font: var(--font-button);

  &:hover {
    background: var(--mars-dark);
    color: var(--gray-01);
    transition: 0.5s;
  }

  &:disabled {
    background: var(--mars-light);
    color: var(--gray-01);

    cursor: not-allowed;
  }
`;
