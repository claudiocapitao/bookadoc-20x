import React, { useState, useEffect, useRef } from 'react';
import * as S from './Dropbox.styles';
import Text from '../Text/Text';
import { colors, devices } from '../../Styles/StyleUtilities';

const Dropbox = ({ options, placeholder, value, onClick }) => {
  const [ showOptions, setShowOptions ] = useState(false);

  const handleClickOutside = () => {
    setShowOptions(false);
  };

  const useOutsideClick = (callback) => {
    const ref = useRef();
  
    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [ref]);
  
    return ref;
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <S.Wrapper>
      {value !== '' && <S.Label>{placeholder}</S.Label>}
      <S.Dropbox
        ref={ref}
        onClick={() => setShowOptions(true)}
        onBlur={() => setShowOptions(false)}
      >
        <S.TextAndImage>
          {value ?
            <Text>{value ? value : 'Gender'}</Text> :
            <Text fontColor={colors.darGrey}>{value ? value : 'Gender'}</Text>
          }
          <S.Image src={require(`../../assets/images/arrowDown.svg`).default} />
        </S.TextAndImage>
      </S.Dropbox>
      {!!showOptions && 
      <S.CardsWrapper>
        {options && options.map(option => <S.CardWrapper onClick={() => onClick(option)}><Text>{option}</Text></S.CardWrapper>)}
      </S.CardsWrapper>}
    </S.Wrapper>
  )}

export default Dropbox;