import react, {useState, useEffect} from 'react';
import * as S from './ButtonsAndText.styles';
import * as GS from '../../../../Styles/GeneralStyles.styles.js';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../../../Atoms/Title/Title.styles';
import Text from '../../../../Atoms/Text/Text';
import Button from '../../../../Atoms/Button/Button'
import { colors } from '../../../../Styles/StyleUtilities';
import Logo from '../../../../assets/images/Logo.svg'
import { useNavigate } from "react-router-dom";

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