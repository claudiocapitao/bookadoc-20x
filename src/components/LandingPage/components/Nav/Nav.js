import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../../../../Atoms/Button/Button';
import Text from '../../../../Atoms/Text/Text';
import * as S from './Nav.styles';

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