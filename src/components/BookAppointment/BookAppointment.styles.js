import styled from 'styled-components';
import { colors, devices } from '../../Styles/StyleUtilities';

export const TitleAndDescriptionWrapper = styled.div`
  max-width: 450px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
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

export const SelectAppointmentWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 16px;
`;
