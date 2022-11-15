import styled from 'styled-components';
import { colors } from '../../Styles/StyleUtilities';

export const Text = styled.p`
  margin: unset;
  font-size: ${({fontSize}) => fontSize ?? '14px'};
  font-weight: ${({fontWeight}) => fontWeight ?? '400'};
  color: ${({fontColor}) => fontColor ?? colors.text};
  
`;
