import react from 'react';
import * as S from './TreatmentSelection.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import TitleAndDescription from '../../Molecules/TitleAndDescription/TitleAndDescription'

const TreatmentSelection = () => {

  return (
    <GS.Section>
      <GS.Container>
        <S.TitleAndDescriptionWrapper>
          <TitleAndDescription
            secundary
            topText='OUR SERVICES'
            title='Superior. Fast. Secure.'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />

          <TitleAndDescription
            tertiary
            title='How can we help you?'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.'
          />
        </S.TitleAndDescriptionWrapper>
      </GS.Container>
    </GS.Section>
  )
}

export default TreatmentSelection;