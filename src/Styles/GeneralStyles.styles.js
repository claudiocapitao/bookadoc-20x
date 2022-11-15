import styled from 'styled-components';
import { colors, devices } from './StyleUtilities';

export const Section = styled.section``;

export const Container = styled.div`
  padding: 16px;

  @media ${devices.tablet} {
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
  }

  @media ${devices.desktop} {
  max-width: 1200px;
  padding: 24px;
  margin: 0 auto;
  }
`;
