import react from 'react';
import * as S from './LandingPage.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import Nav from './components/Nav/Nav';
import TitleAndDescription from '../../Molecules/TitleAndDescription/TitleAndDescription'

const LandingPage = () => {
    const text = "Landing Page";

    return (
      <GS.Section>
        <S.TopWrapper>
          <GS.Container>
            <Nav />
            <TitleAndDescription
            title='Best care for patients and doctors.'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, can do semod temnor'
            />
          </GS.Container>
        </S.TopWrapper>
        
        <GS.Container>
          <p>DIV</p>
        </GS.Container>
      </GS.Section>
    )
}

export default LandingPage;