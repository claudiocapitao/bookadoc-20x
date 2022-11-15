import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Card from '../../Molecules/Card/Card';
import TitleAndDescription from '../../Molecules/TitleAndDescription/TitleAndDescription';
import * as GS from '../../Styles/GeneralStyles.styles';
import { infoCardsContent, treatmentCardsContent } from './TreatmentSelection.content';
import * as S from './TreatmentSelection.styles';

const TreatmentSelection = () => {
  const navigate = useNavigate();

  // Request to get the available treatment
  async function getAvailableTreatments() {
    try {
      const response = await axios.get('https://run.mocky.io/v3/bb78fcf6-075f-4b20-a58f-4bd96e11024d');
      const availableTreatments = response.data.availableTreatments;
      setAvailableTreatments(availableTreatments)
    } catch (error) {
      console.error(error);
    }
  }

  const [availableTreatments, setAvailableTreatments] = useState([]);
  useEffect(() => {
    getAvailableTreatments();
  }, [])

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
          {availableTreatments && availableTreatments.map(treatment => 
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