import { GlobalStyles } from '../../styles/global';
import { Container } from './styles/Container';

import { Button } from '../../components/Button/index';
import { TextLabel } from '../../components/TextLabel';
import { MainTitle } from '../../components/MainTitle';
import { Paragraph } from '../../components/Paragraph';
import { IconWithText } from '../../components/IconWithText';

import Logo from '../../assets/icons/logo-space-y.svg';
import MarsWithAstronauts from '../../assets/icons/home-mars-right.svg';
import Mars from '../../assets/icons/mars.svg';
import Lines from '../../assets/icons/lines.svg';

import { Header } from './styles/Header';
import { InitialSection } from './styles/InitialSection';

import { cardsDatas } from '../../utils/data/cardsData';
import { AboutMarsStyle } from './styles/AboutMars';
import { SubTitle } from '../../components/SubTitle';

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

      <AboutMarsStyle>
        <div className="about-mars-container">
          <div className="container-about-content">
            <figure className="about-mars-image">
              <img src={Mars} alt="Planet Mars" />
            </figure>
            <div className="about-mars-texts">
              <TextLabel text="por que marte?" />
              <SubTitle>Sobre o planeta vermelho</SubTitle>
              <Paragraph smallText>
                A uma distância média de 140 milhões de milhas, Marte é um dos
                vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou
                menos a metade da distância da Terra do Sol, então ainda tem luz
                solar decente. Está um pouco frio, mas podemos esquentar. Sua
                atmosfera é composta principalmente de CO2 com um pouco de
                nitrogênio e argônio e alguns outros oligoelementos, o que
                significa que podemos cultivar plantas em Marte apenas
                comprimindo a atmosfera.
              </Paragraph>

              <Paragraph smallText>
                A gravidade em Marte é cerca de 38% da da Terra, então você
                seria capaz de levantar coisas pesadas e dar voltas. Além disso,
                o dia está notavelmente próximo ao da Terra.
              </Paragraph>
            </div>
          </div>

          <figure className="about-mars-lines-container">
            <img src={Lines} alt="Lines Icon" />
          </figure>
        </div>
        <div className="stars-background"></div>
      </AboutMarsStyle>
    </Container>
  );
};
