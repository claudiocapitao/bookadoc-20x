import React from 'react';
import { TitleH5 } from '../../../../Atoms/Title/Title.styles';
import BasicCard from '../BasicCard/BasicCard';
import * as S from './WhoShouldTreatYou.styles';

const WhoShouldTreatYou = ({
  doctorsAndTimes,
  selectedDoctorData,
  setSelectedDoctorData
}) => {

  return (
    <S.Wrapper>
      <TitleH5>Who should treat you?</TitleH5>
      {doctorsAndTimes && doctorsAndTimes.map( doctor =>
        <BasicCard
          key={doctor.id}
          doctor={doctor}
          selectedDoctorData={selectedDoctorData}
          setSelectedDoctorData={setSelectedDoctorData}
        />
      )}
    </S.Wrapper>
  )
}

export default WhoShouldTreatYou;