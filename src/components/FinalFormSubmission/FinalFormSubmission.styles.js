import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 450px;
  margin-top: 48px;
`;

export const TitleAndDescriptionWrapper = styled.div`
  max-width: 450px;
  padding: 24px 0 24px;
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
  &:last-Child {
    margin-bottom: 8px;
  }
`;

export const ButtonCointainer = styled.div`
  width: 500px;
  margin: 8px 0;
`;