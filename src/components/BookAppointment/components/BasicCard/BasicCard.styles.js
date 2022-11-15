import styled from 'styled-components';
import { colors, devices } from '../../../../Styles/StyleUtilities';

export const Wrapper = styled.section`
  max-width: 325px;
  padding: 8px 16px;
  margin: 16px 0;
  border: 1px solid ${colors.borderButton};
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 16px;
  background-color: ${({ isDoctorSelected }) => isDoctorSelected ? colors.behindText : 'transparent'};

  &:hover {
    cursor: pointer;
    background-color: ${colors.textOrange};
  }
`;

export const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 4px;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  object-fit: cover;
`;
