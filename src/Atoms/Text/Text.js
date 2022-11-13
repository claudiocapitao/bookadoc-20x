import react from 'react';
import { TextA } from './Text.styles';

const Text = ({ fontSize, fontWeight, fontColor, children }) => {
  return (
    <TextA fontSize={fontSize} fontWeight={fontWeight} fontColor={fontColor}>{children}</TextA>
  )}

export default Text;