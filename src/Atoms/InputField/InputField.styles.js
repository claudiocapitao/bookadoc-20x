import styled from 'styled-components';
import { colors, devices } from '../../Styles/StyleUtilities';

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  margin: unset;
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.text};
  border: 1px solid ${colors.borderButton};
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline-style: none;
    border: 1px solid ${colors.text};
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 4px;
  left: 12px;
  margin: unset;
  font-size: 12px;
  font-weight: 400;
  color: ${colors.borderButton};
`;