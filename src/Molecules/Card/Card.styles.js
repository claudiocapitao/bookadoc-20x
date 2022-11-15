import styled from 'styled-components';
import { colors } from '../../Styles/StyleUtilities';

export const Wrapper = styled.section`
  max-width: ${({ maxWidth }) => maxWidth ?? '325px'};
  ${({ border }) => border && `padding: 20px;`};
  ${({ border }) => border && `border: 1px solid ${colors.borderButton}`};
  ${({ border }) => border && `border-radius: 16px`};
  ${({ border }) => border && `box-shadow: 0px 0px 10px 5px ${colors.shadow}`};
  display: flex;
  flex-direction: ${({ imageTop }) => imageTop ? 'column' : 'row'};
  justify-content: ${({ imageTop }) => imageTop ? 'flex-start' : 'center'};
  align-items: ${({ imageTop, alignItems }) => alignItems ? alignItems : imageTop ? 'flex-start' : 'center'};
  gap: 24px;

  &:hover {
    cursor: ${({ activeHover }) => activeHover ? 'pointer' : 'unset'};
  }
`;

export const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${colors.behindText};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  min-width: 45px;
  min-height: 45px;
`;

