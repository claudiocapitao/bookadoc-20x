import react, {useState, useEffect} from 'react';
import * as S from './SuccessPage.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import TitleAndDescription from '../../Molecules/TitleAndDescription/TitleAndDescription';
import Card from '../../Molecules/Card/Card';
import Button from '../../Atoms/Button/Button';
import { useNavigate } from "react-router-dom";

const TreatmentSelection = () => {
  const navigate = useNavigate();

  return (
    <GS.Section>
      <GS.Container>
        <S.TitleAndDescriptionWrapper>
          <TitleAndDescription
            title='Thank you for booking your appointment.'
            text='You will receive a confirmation shortly.'
          />
        </S.TitleAndDescriptionWrapper>
      <S.ButtonsWrapper>
        <Button onClick={() => navigate("/treatment-selection")}>Book a new appointment</Button>
        <Button onClick={() => navigate("/")} secundary>Back to Homepage</Button>
        </S.ButtonsWrapper>   
      </GS.Container>
    </GS.Section>
  )
}

export default TreatmentSelection;