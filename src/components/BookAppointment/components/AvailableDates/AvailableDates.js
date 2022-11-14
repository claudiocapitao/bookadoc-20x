import react, {useState, useEffect} from 'react';
import * as S from './AvailableDates.styles';
import * as GS from '../../../../Styles/GeneralStyles.styles';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../../../Atoms/Title/Title.styles';
import Text from '../../../../Atoms/Text/Text';
import Button from '../../../../Atoms/Button/Button'
import { colors } from '../../../../Styles/StyleUtilities';
import BasicCard from '../BasicCard/BasicCard';

const AvailableDates = ({
  times,
  selectedDay,
  setSelectedDay
}) => {

  return (
    <S.Wrapper>
      <TitleH5>Available appointments</TitleH5>
    </S.Wrapper>
  )
}

export default AvailableDates;