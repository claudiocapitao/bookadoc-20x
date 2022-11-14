import react, {useState, useEffect} from 'react';
import * as S from './AppointmentSelectionBox.styles';
import * as GS from '../../../../Styles/GeneralStyles.styles';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../../../Atoms/Title/Title.styles';
import Text from '../../../../Atoms/Text/Text';
import Button from '../../../../Atoms/Button/Button'
import { colors } from '../../../../Styles/StyleUtilities';
import BasicCard from '../BasicCard/BasicCard';

const AvailableAppointments = ({ time, selectedTime, onClick }) => {
  const isThisTimeSelected = time === selectedTime;

  return (
    <S.Button isThisTimeSelected={isThisTimeSelected} onClick={() => onClick(time) }>{time}</S.Button>
  )
}

export default AvailableAppointments;