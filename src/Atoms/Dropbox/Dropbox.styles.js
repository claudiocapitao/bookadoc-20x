import styled from 'styled-components';
import { colors } from '../../Styles/StyleUtilities';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Dropbox = styled.div`
  width: 100%;
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.text};
  border: 1px solid ${colors.borderButton};
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const TextAndImage = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  height: 14px;
`;

export const CardsWrapper = styled.div`
  position: absolute;
  width: 90%;
  top: 54px;
  left: 0;
  z-index: 1;
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.text};
  border: 1px solid ${colors.borderButton};
  border-radius: 8px;
  background-color: ${colors.white};
`;

export const CardWrapper = styled.div`
  padding: 16px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.behindText};
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