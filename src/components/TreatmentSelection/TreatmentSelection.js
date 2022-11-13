import react from 'react';
import * as S from './TreatmentSelection.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import TitleAndDescription from '../../Molecules/TitleAndDescription/TitleAndDescription'
import Card from '../../Molecules/Card/Card'
import { treatmentCardsContent, infoCardsContent } from './TreatmentSelection.content';
import { useNavigate } from "react-router-dom";

const TreatmentSelection = () => {
  const navigate = useNavigate();

  const availableTretments = [
    'ophthalmologist',
    'orthopedistHand',
    'orthopedistFeet',
    'orthopedistArm',
    'pediatrician',
    'otolaryngologist'
  ];

  const infoCards = [
    'superiorHealthcare',
    'fastHealthcare',
    'secureHealthcare'
  ];

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
        <S.CardsWrapper>
          {availableTretments && availableTretments.map(treatment => 
            <Card
              quinary
              border
              title={treatmentCardsContent?.[treatment].title}
              text={treatmentCardsContent?.[treatment].text}
              bottomText={treatmentCardsContent?.[treatment].bottomText}
              imageName={treatmentCardsContent?.[treatment].imageName}
              onClick={() => navigate(`/book-appointment/${treatmentCardsContent?.[treatment].url}`)}
            />
          )}
        </S.CardsWrapper>

        <S.CardsWrapper>
          {infoCards && infoCards.map(info => 
              <Card
                quaternary
                imageTop
                title={infoCardsContent?.[info].title}
                text={infoCardsContent?.[info].text}
                imageName={infoCardsContent?.[info].imageName}
              />
            )}
        </S.CardsWrapper>
      </GS.Container>
    </GS.Section>
  )
}

export default TreatmentSelection;