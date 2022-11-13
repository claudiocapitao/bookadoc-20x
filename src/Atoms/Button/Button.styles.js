import styled from 'styled-components';
import { colors, devices } from '../../Styles/StyleUtilities';

export const StyledButton = styled.button`
  margin: unset;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ secundary }) => secundary ? colors.text : colors.white};
  background-color: ${({ secundary }) => secundary ? 'transparent' : colors.primarybutton};
  border: ${({ secundary }) => secundary ? `1px solid ${colors.text}` : 'none'};
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;
