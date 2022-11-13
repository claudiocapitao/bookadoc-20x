import react, {useState, useEffect} from 'react';
import * as S from './TitleAndDescription.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../Atoms/Title/Title.styles';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';
import { colors } from '../../Styles/StyleUtilities';

const TitleAndDescription = ({ title, text }) => {

  return (
    <S.Wrapper>
      <TitleH1>{title}</TitleH1>
      <S.TextWrapper>
        <Text fontSize={'16px'}>
          {text}
        </Text>
      </S.TextWrapper>
    </S.Wrapper>
  )
}

export default TitleAndDescription;