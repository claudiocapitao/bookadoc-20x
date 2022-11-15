import react, {useState, useEffect} from 'react';
import * as S from './DaySelectionBox.styles';
import * as GS from '../../../../Styles/GeneralStyles.styles';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../../../Atoms/Title/Title.styles';
import Text from '../../../../Atoms/Text/Text';
import Button from '../../../../Atoms/Button/Button'
import { colors } from '../../../../Styles/StyleUtilities';
import BasicCard from '../BasicCard/BasicCard';

const DaySelectionBox = ({
    disabled,
    bold,
    day,
    onClick,
    line,
    selectedDay,
    setSelectedDay
  }) => {
  const isThisTimeSelected = day === selectedDay;

  return (
    <S.Wrapper
      disabled={disabled}
      isThisTimeSelected={isThisTimeSelected}
      onClick={() => {
        if(!disabled){
          onClick();
          setSelectedDay(day);
        }}}
    >
      {bold ? 
        <Text fontSize='14px' fontWeight='700'>{day}</Text> :
        <Text fontSize='14px' fontWeight='400'>{day}</Text>
      }
      {line && <S.Line />}
    </S.Wrapper>
  )
}

export default DaySelectionBox;