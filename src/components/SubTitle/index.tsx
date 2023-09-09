import { SubTitleStyle } from './style';

interface ISubTitle {
  children: React.ReactNode;
}

export const SubTitle = ({ children }: ISubTitle) => {
  return <SubTitleStyle>{children}</SubTitleStyle>;
};
