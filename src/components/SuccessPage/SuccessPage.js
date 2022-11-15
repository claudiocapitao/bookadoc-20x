import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../../Atoms/Button/Button';
import TitleAndDescription from '../../Molecules/TitleAndDescription/TitleAndDescription';
import * as GS from '../../Styles/GeneralStyles.styles';
import * as S from './SuccessPage.styles';

const SuccessPage = () => {
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

export default SuccessPage;