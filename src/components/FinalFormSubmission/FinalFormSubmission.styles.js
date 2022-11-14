import styled from 'styled-components';
import { colors, devices } from '../../Styles/StyleUtilities';

export const TitleAndDescriptionWrapper = styled.div`
  max-width: 450px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 64px;
`;

export const CardsWrapper = styled.div`
  padding: 24px 0;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 16px;
  row-gap: 24px;
`;
