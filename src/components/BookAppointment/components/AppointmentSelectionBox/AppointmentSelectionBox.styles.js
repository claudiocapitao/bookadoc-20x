import styled from 'styled-components';
import { colors } from '../../../../Styles/StyleUtilities';

export const Button = styled.button`
  margin: unset;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.text};
  background-color: ${({isThisTimeSelected}) => isThisTimeSelected ? colors.behindText : colors.white};
  border: 1px solid ${colors.borderButton};
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.textOrange};
  }
`;