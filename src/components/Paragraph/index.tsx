import { ParagraphStyled } from './style';

interface IParagraph {
  children: React.ReactNode;
  smallText?: boolean;
}

export const Paragraph = ({ children, smallText }: IParagraph) => {
  return <ParagraphStyled smallText={smallText}>{children}</ParagraphStyled>;
};
