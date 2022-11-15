import React, {useState, useEffect} from 'react';
import * as S from './Card.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../Atoms/Title/Title.styles';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';
import { colors } from '../../Styles/StyleUtilities';
import TitleAndDescription from '../TitleAndDescription/TitleAndDescription'

const Card = ({ quaternary, quinary, imageTop, border, title, text, bottomText, imageName, onClick ,maxWidth, alignItems }) => {
console.log('alignItems: ', alignItems)
  return (
    <S.Wrapper maxWidth={maxWidth} alignItems={alignItems} imageTop={imageTop} border={border} onClick={() => onClick()} activeHover={!!onClick}>
      {imageName && <S.ImageWrapper>
        <S.Image src={require(`../../assets/images/${imageName}.svg`)} />
      </S.ImageWrapper>}
      <TitleAndDescription
        quaternary={quaternary}
        quinary={quinary}
        title={title}
        text={text}
        bottomText={bottomText}
      />
    </S.Wrapper>
  )
}

export default Card;