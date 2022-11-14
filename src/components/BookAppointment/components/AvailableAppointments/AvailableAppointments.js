import react, {useState, useEffect} from 'react';
import * as S from './AvailableAppointments.styles';
import * as GS from '../../../../Styles/GeneralStyles.styles';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../../../Atoms/Title/Title.styles';
import Text from '../../../../Atoms/Text/Text';
import Button from '../../../../Atoms/Button/Button'
import { colors } from '../../../../Styles/StyleUtilities';
import BasicCard from '../BasicCard/BasicCard';

const AvailableAppointments = ({
  times,
  selectedAppointment,
  setSelectedAppointment
}) => {

  return (
    <S.Wrapper>
      <TitleH5>Available Appointments</TitleH5>
    </S.Wrapper>
  )
}

export default AvailableAppointments;