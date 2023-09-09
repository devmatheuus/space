import { MainTitleStyle } from './style';

interface IMainTitle {
  children: React.ReactNode;
}

export const MainTitle = ({ children }: IMainTitle) => {
  return <MainTitleStyle>{children}</MainTitleStyle>;
};
