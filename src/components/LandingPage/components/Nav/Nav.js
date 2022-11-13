import react, {useState, useEffect} from 'react';
import * as S from './Nav.styles';
import * as GS from '../../../../Styles/GeneralStyles.styles.js';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../../../Atoms/Title/Title.styles';
import Text from '../../../../Atoms/Text/Text';
import Button from '../../../../Atoms/Button/Button'
import { colors } from '../../../../Styles/StyleUtilities';
import Logo from '../../../../assets/images/Logo.svg'
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Image src={require('../../../../assets/images/Logo.svg').default} />
      <S.SubWrapper>
        <S.TextWrapper><Text fontSize='16px' fontWeight='500'>About</Text></S.TextWrapper>
        <S.TextWrapper><Text fontSize='16px' fontWeight='500'>Practices</Text></S.TextWrapper>
        <S.TextWrapper><Text fontSize='16px' fontWeight='500'>Services</Text></S.TextWrapper>
        <S.TextWrapper><Text fontSize='16px' fontWeight='500'>Team</Text></S.TextWrapper>
        <Button onClick={() => navigate("/treatment-selection")}>Book Appointment</Button>
      </S.SubWrapper>
    </S.Wrapper>
  )
}

export default Nav;