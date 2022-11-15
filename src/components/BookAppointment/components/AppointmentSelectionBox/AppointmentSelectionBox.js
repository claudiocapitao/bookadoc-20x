import React from 'react';
import * as S from './AppointmentSelectionBox.styles';

const AvailableAppointments = ({ time, selectedTime, onClick }) => {
  const isThisTimeSelected = time === selectedTime;

  return (
    <S.Button isThisTimeSelected={isThisTimeSelected} onClick={() => onClick(time) }>{time}</S.Button>
  )
}

export default AvailableAppointments;