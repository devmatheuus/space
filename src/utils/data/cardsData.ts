import RocketIcon from '../../assets/icons/icon-rocket.svg';
import FlagIcon from '../../assets/icons/icon-flag.svg';
import TelescopeIcon from '../../assets/icons/icon-telescope.svg';

interface ICardsDatas {
  icon: string;
  text: string;
  alt: string;
}

export const cardsDatas: ICardsDatas[] = [
  {
    icon: RocketIcon,
    text: 'Foguetes com a mais alta <br /> tecnologia e conforto.',
    alt: 'Rocket Icon',
  },
  {
    icon: FlagIcon,
    text: 'Mais de 100 missões <br /> consecutivas com sucesso.',
    alt: 'Flag Icon',
  },
  {
    icon: TelescopeIcon,
    text: 'Experiencia única <br /> e exclusiva.',
    alt: 'Telescope Icon',
  },
];
