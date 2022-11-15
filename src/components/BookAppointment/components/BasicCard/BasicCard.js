import React from 'react';
import Text from '../../../../Atoms/Text/Text';
import * as S from './BasicCard.styles';

const BasicCard = ({
  doctor,
  selectedDoctorData,
  setSelectedDoctorData
}) => {

  const isDoctorSelected = selectedDoctorData.id === doctor.id;

  return (
    <S.Wrapper isDoctorSelected={isDoctorSelected} onClick={() => setSelectedDoctorData(doctor)}>
      {!!doctor.id && <S.Image src={require(`../../../../assets/images/${doctor.id}.jpeg`)} />}
      <S.TextWrapper>
        <Text fontSize='14px' fontWeight='500'>{doctor.name}</Text>
      </S.TextWrapper>
    </S.Wrapper>
  )
}

export default BasicCard;