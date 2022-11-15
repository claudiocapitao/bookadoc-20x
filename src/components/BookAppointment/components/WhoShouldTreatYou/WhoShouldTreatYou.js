import react, {useState, useEffect} from 'react';
import * as S from './WhoShouldTreatYou.styles';
import * as GS from '../../../../Styles/GeneralStyles.styles';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../../../Atoms/Title/Title.styles';
import Text from '../../../../Atoms/Text/Text';
import Button from '../../../../Atoms/Button/Button'
import { colors } from '../../../../Styles/StyleUtilities';
import BasicCard from '../BasicCard/BasicCard';

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