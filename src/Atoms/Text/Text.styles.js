import styled from 'styled-components';
import { colors, devices } from '../../Styles/StyleUtilities';

export const TextA = styled.p`
  margin: unset;
  font-size: ${({fontSize}) => fontSize ?? '14px'};
  font-weight: ${({fontWeight}) => fontWeight ?? '400'};
  color: ${({fontColor}) => fontColor ?? colors.text};
`;
