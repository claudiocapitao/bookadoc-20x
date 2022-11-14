import styled from 'styled-components';
import { colors, devices } from '../../../../Styles/StyleUtilities';

export const Wrapper = styled.section`
  margin-top: 40px;
  max-width: 280px;
`;

export const AppointmentsBoxesWrapper = styled.section`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap ;
  justify-content: space-between;
  column-gap: 8px;
  row-gap: 12px;
`;
