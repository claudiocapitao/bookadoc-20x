import React, {useState, useEffect} from 'react';
import * as S from './TitleAndDescription.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../Atoms/Title/Title.styles';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';
import { colors } from '../../Styles/StyleUtilities';

const TitleAndDescription = ({ secundary, tertiary, quaternary, quinary, topText, title, text, bottomText }) => {
  const titlePrimaryH1Conditional = title && !secundary && !tertiary && !quaternary && !quinary;
  const titlesecundaryH2Conditional = title && secundary && !tertiary && !quaternary && !quinary;
  const titletertiaryH3Conditional = title && tertiary && !secundary && !quaternary && !quinary;
  const titlequaternaryH4Conditional = title && quaternary && !secundary && !tertiary && !quinary;
  const titlequinaryH5Conditional = title && quinary && !secundary && !tertiary && !quaternary;

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
      {titlePrimaryH1Conditional && <TitleH1>{title}</TitleH1>}
      {titlesecundaryH2Conditional && <TitleH2>{title}</TitleH2>}
      {titletertiaryH3Conditional && <TitleH3>{title}</TitleH3>}
      {titlequaternaryH4Conditional && <TitleH4>{title}</TitleH4>}
      {titlequinaryH5Conditional && <TitleH5>{title}</TitleH5>}
      {text && <S.TextWrapper>
        <Text fontSize={quinary ? '12px' : quaternary ? '14px' : tertiary ? '14px' : secundary ? '16px' : '18px'}>
          {text}
        </Text>
      </S.TextWrapper>}
      {bottomText && <S.TextWrapper>
        <Text fontSize={quinary ? '12px' : quaternary ? '14px' : tertiary ? '14px' : secundary ? '16px' : '18px'}>
          {bottomText}
        </Text>
      </S.TextWrapper>}
    </S.Wrapper>
  )
}

export default TitleAndDescription;