import styled from 'styled-components';
import { colors, devices } from '../../Styles/StyleUtilities';

export const SetOfElements = styled.section`
  margin: 96px 0;
`;

export const TitleWrapper = styled.section`
  margin: 0 0 48px;
`;

export const SubTitleWrapper = styled.section`
  margin: 0 0 24px;
`;
export const ElementDescription = styled.section`
  margin: 0 0 24px;
`;

export const Section = styled.section``;

export const Container = styled.div`
  padding: 16px;
  /* background-color: ${colors.secondbackground}; */

  @media ${devices.tablet} {
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
  }

  @media ${devices.desktop} {
  max-width: 1200px;
  padding: 24px;
  margin: 0 auto;
  }
`;
