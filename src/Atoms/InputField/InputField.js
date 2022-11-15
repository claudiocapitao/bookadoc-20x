import React, { useState } from 'react';
import * as S from './InputField.styles';

const InputField = ({ type, placeholder, value, onChange, onBlur }) => {
  const [ showLabel, setShowLabel ] = useState(false);
  return (
    <S.Wrapper>
      <S.Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setShowLabel(true)}
        onBlur={() => onBlur()}
      />
      {showLabel && value !== '' && <S.Label>{placeholder}</S.Label>}
    </S.Wrapper>
  )}

export default InputField;