import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../../../../Atoms/Button/Button';
import Text from '../../../../Atoms/Text/Text';
import * as S from './ButtonsAndText.styles';

const ButtonsAndText = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.ButtonsWrapper>
        <Button onClick={() => navigate("/treatment-selection")}>Get Started</Button>
        <Button secundary>Learn More</Button>
      </S.ButtonsWrapper>
      <Text fontSize='16px' fontWeight='500'>HEALTHCARE | DOCTORS | PATIENTS</Text>
    </S.Wrapper>
  )
}

export default ButtonsAndText;