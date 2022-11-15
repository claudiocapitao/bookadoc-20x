import React from 'react';
import Text from '../../../../Atoms/Text/Text';
import * as S from './DaySelectionBox.styles';

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