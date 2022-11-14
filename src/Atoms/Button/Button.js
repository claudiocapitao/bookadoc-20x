import react from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ children, onClick, secundary }) => {
  return (
    <StyledButton type="button" onClick={() => onClick()} secundary={secundary}>{children}</StyledButton>
  )}

export default Button;