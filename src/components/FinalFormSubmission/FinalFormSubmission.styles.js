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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormSubCointainer = styled.div`
  width: 500px;
  margin: 8px 0 20px;
  display: flex;
  justify-content: space-between;
  column-gap: 64px;
  &:first-Child {

  }
`;
