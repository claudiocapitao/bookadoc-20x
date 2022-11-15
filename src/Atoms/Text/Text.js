import React from 'react';
import * as S from './Text.styles';

const Text = ({ fontSize, fontWeight, fontColor, children }) => {
  return (
    <S.Text fontSize={fontSize} fontWeight={fontWeight} fontColor={fontColor}>{children}</S.Text>
  )}

export default Text;