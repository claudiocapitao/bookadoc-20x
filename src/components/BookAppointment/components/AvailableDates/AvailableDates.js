import React from 'react';
import { TitleH5 } from '../../../../Atoms/Title/Title.styles';
import Calendar from '../Calendar/Calendar';
import * as S from './AvailableDates.styles';

const AvailableDates = ({
  dates,
  selectedDateAndAppointments,
  setSelectedDateAndAppointments
}) => {

  return (
    <S.Wrapper>
      <TitleH5>Available Dates</TitleH5>
      <Calendar dates={dates} selectedDateAndAppointments={selectedDateAndAppointments} setSelectedDateAndAppointments={setSelectedDateAndAppointments} />
    </S.Wrapper>
  )
}

export default AvailableDates;