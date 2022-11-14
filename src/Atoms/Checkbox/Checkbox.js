import react, { useState, useEffect } from 'react';
import * as S from './Checkbox.styles';
import Text from '../Text/Text';

const Checkbox = ({ value, onChange, text }) => {

  return (
    <S.Wrapper>
      <S.Input
        type='Checkbox'
        value={value}
        onChange={() => onChange(!value)}
      />
      <Text fontSize='12px' fontWeight='400'>{text}</Text>
    </S.Wrapper>
  )}

export default Checkbox;