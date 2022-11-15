import styled from 'styled-components';
import { colors, devices } from '../../../../Styles/StyleUtilities';

export const Wrapper = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({disabled, isThisTimeSelected}) => disabled ? 'transparent' : isThisTimeSelected ? colors.behindText : 'transparent'};
  border: none;;
  &:hover{
    cursor: ${({disabled}) => disabled ? 'unset' : 'pointer'};
    background-color: ${({disabled}) => disabled ? 'transparent' : colors.textOrange};
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 20px;
  height: 1px;
  background-color: ${colors.text};
`;
