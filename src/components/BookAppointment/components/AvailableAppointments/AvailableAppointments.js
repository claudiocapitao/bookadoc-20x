import React from 'react';
import { TitleH5 } from '../../../../Atoms/Title/Title.styles';
import AppointmentSelectionBox from '../AppointmentSelectionBox/AppointmentSelectionBox';
import * as S from './AvailableAppointments.styles';

const AvailableAppointments = ({
  selectedDateAndAppointments,
  selectedAppointment,
  setSelectedAppointment
}) => {

  return (
    <S.Wrapper>
      <TitleH5>Available Appointments</TitleH5>
      <S.AppointmentsBoxesWrapper>
        {!!selectedDateAndAppointments?.appointments && selectedDateAndAppointments?.appointments.map((appointment)=> 
          <AppointmentSelectionBox time={appointment} selectedTime={selectedAppointment} onClick={setSelectedAppointment} />
        )}
      </S.AppointmentsBoxesWrapper>
    </S.Wrapper>
  )
}

export default AvailableAppointments;