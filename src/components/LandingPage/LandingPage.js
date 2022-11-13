import react from 'react';
import * as S from './LandingPage.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import Nav from './components/Nav/Nav';

const LandingPage = () => {
    const text = "Landing Page";

    return (
      <GS.Section>
        <S.TopWrapper>
          <GS.Container>
            <Nav />
          </GS.Container>
        </S.TopWrapper>
        
        <GS.Container>
          <p>DIV</p>
        </GS.Container>
      </GS.Section>
    )
}

export default LandingPage;