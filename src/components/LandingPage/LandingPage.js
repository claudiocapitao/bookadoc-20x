import react from 'react';
import * as S from './LandingPage.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import Nav from './components/Nav/Nav';
import TitleAndDescription from '../../Molecules/TitleAndDescription/TitleAndDescription'
import ButtonsAndText from './components/ButtonsAndText/ButtonsAndText';

const LandingPage = () => {

    return (
      <GS.Section>
        <S.TopWrapper>
          <GS.Container>
            <Nav />
            <S.TitleAndDescriptionWrapperFirst>
              <TitleAndDescription
                title='Best care for patients and doctors.'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, can do semod temnor'
              />
            </S.TitleAndDescriptionWrapperFirst>
            <ButtonsAndText />
          </GS.Container>
        </S.TopWrapper>
        
        <GS.Container>
          <S.TitleAndDescriptionWrapperSecond>
            <TitleAndDescription
              secundary
              topText='OUR MISSION'
              title='Superior. Healthcare. All-in-one.'
              text='Lorem insum dolor sit amet. consectetur adioiscina elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aligua. Ut enim ac
              minim veniam. guis nostrud exercitation ulamco laboris nisi ut aliguio ex
              a commode consequat. Duis aute irure dolor in reorehenderit in
              voluntate velit esse cillum dolore eu fugiat nulla pariatur.'
            />
          </S.TitleAndDescriptionWrapperSecond>
        </GS.Container>
      </GS.Section>
    )
}

export default LandingPage;