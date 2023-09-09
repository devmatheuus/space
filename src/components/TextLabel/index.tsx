import { TextLabelStyle } from './style';

interface ITextLabel {
  text: string;
}

export const TextLabel = ({ text }: ITextLabel) => {
  return <TextLabelStyle>{text}</TextLabelStyle>;
};
