import React from 'react';
import TitleAndDescription from '../TitleAndDescription/TitleAndDescription';
import * as S from './Card.styles';

const Card = ({ quaternary, quinary, imageTop, border, title, text, bottomText, imageName, onClick ,maxWidth, alignItems }) => {

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