import { GlobalStyles } from '../../styles/global';
import { Container } from './styles/Container';

import { Button } from '../../components/Button/index';
import { TextLabel } from '../../components/TextLabel';
import { MainTitle } from '../../components/MainTitle';
import { Paragraph } from '../../components/Paragraph';
import { IconWithText } from '../../components/IconWithText';

import Logo from '../../assets/icons/logo-space-y.svg';
import MarsWithAstronauts from '../../assets/icons/home-mars-right.svg';

import { Header } from './styles/Header';
import { InitialSection } from './styles/InitialSection';

import { cardsDatas } from '../../utils/data/cardsData';

export const Home = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header>
        <figure>
          <img src={Logo} alt="Logo SpaceY" />
        </figure>
      </Header>

      <InitialSection>
        <div>
          <div className="initial-section-text-container">
            <TextLabel text="finalmente é possível!" />
            <MainTitle>
              Sua jornada para Marte <br />
              começa aqui.
            </MainTitle>

            <Paragraph>
              A primeira viagem para Marte estará disponível a partir do dia{' '}
              <br />
              12/03/2028. Inscreva-se em nossa lista de espera.
            </Paragraph>

            <Button text="Inscreva-se agora" />
          </div>

          <figure>
            <img src={MarsWithAstronauts} alt="Mars With Astronauts" />
          </figure>
        </div>
        <div className="initial-section-icons-container">
          {cardsDatas.map((card) => (
            <IconWithText key={card.alt} icon={card.icon} alt={card.alt}>
              <p dangerouslySetInnerHTML={{ __html: card.text }}></p>
            </IconWithText>
          ))}
        </div>
      </InitialSection>
    </Container>
  );
};
