import { IconWithTextStyle } from './style';

interface IIContWithText {
  icon: string;
  alt: string;
  children: React.ReactNode;
}

export const IconWithText = ({ icon, children, alt }: IIContWithText) => {
  return (
    <IconWithTextStyle>
      <img src={icon} alt={alt} />
      {children}
    </IconWithTextStyle>
  );
};
