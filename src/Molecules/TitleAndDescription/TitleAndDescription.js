import react, {useState, useEffect} from 'react';
import * as S from './TitleAndDescription.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../Atoms/Title/Title.styles';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';
import { colors } from '../../Styles/StyleUtilities';

const TitleAndDescription = ({ secundary, topText, title, text }) => {

  return (
    <S.Wrapper>
      {!!topText && 
        <S.TopTextWrapper>
          <Text
            fontSize='16px'
            fontColor={colors.textOrange}
            fontWeight={700}
          >{topText}</Text>
        </S.TopTextWrapper>
      }
      {!secundary && <TitleH1>{title}</TitleH1>}
      {secundary && <TitleH2>{title}</TitleH2>}
      <S.TextWrapper>
        <Text fontSize={secundary ? '14px' : '16px'}>
          {text}
        </Text>
      </S.TextWrapper>
    </S.Wrapper>
  )
}

export default TitleAndDescription;