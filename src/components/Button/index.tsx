import { ButtonStyle } from './style';
import { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<IButton> {
  text: string;
  fullWidth?: boolean;
}

export const Button = ({ fullWidth, text, ...rest }: IButton) => {
  return (
    <ButtonStyle fullWidth={fullWidth} {...rest}>
      {text}
    </ButtonStyle>
  );
};
