import react, {useState, useEffect} from 'react';
import * as S from './BasicCard.styles';
import * as GS from '../../../../Styles/GeneralStyles.styles';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../../../Atoms/Title/Title.styles';
import Text from '../../../../Atoms/Text/Text';
import Button from '../../../../Atoms/Button/Button'
import { colors } from '../../../../Styles/StyleUtilities';

const BasicCard = ({
  doctor,
  selectedDoctor,
  setSelectedDoctor
}) => {

  const isDoctorSelected = selectedDoctor === doctor.id;

  return (
    <S.Wrapper isDoctorSelected={isDoctorSelected} onClick={() => setSelectedDoctor(doctor.id)}>
      {!!doctor.id && <S.Image src={require(`../../../../assets/images/${doctor.id}.jpeg`)} />}
      <S.TextWrapper>
        <Text fontSize='14px' fontWeight='500'>{doctor.name}</Text>
        <Text fontSize='12px' fontWeight='300'>{doctor.speciality}</Text>
      </S.TextWrapper>
    </S.Wrapper>
  )
}

export default BasicCard;