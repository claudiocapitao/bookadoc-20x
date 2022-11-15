import React from 'react';
import Text from '../Text/Text';
import * as S from './Checkbox.styles';

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