import React, {useState, useEffect} from 'react';
import * as S from './AvailableDates.styles';
import * as GS from '../../../../Styles/GeneralStyles.styles';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../../../Atoms/Title/Title.styles';
import Text from '../../../../Atoms/Text/Text';
import Button from '../../../../Atoms/Button/Button'
import { colors } from '../../../../Styles/StyleUtilities';
import BasicCard from '../BasicCard/BasicCard';
import Calendar from '../Calendar/Calendar';

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