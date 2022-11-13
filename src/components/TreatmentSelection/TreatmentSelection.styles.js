import styled from 'styled-components';
import { colors, devices } from '../../Styles/StyleUtilities';

export const TitleAndDescriptionWrapper = styled.div`
  max-width: 450px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
`;

export const CardsWrapper = styled.div`
  padding: 24px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 16px;
  row-gap: 24px;
`;
