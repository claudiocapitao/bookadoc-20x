import react from 'react';
import * as S from './DesignSystem.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from '../../Atoms/Title/Title.styles';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';
import { colors } from '../../Styles/StyleUtilities';

const LandingPage = () => {

    return (
      <GS.Section>
        <GS.Container>
          <S.TitleWrapper>
            <TitleH1>Design System</TitleH1>
          </S.TitleWrapper>

          {/* TITLES */}
          <S.SetOfElements>
            <S.SubTitleWrapper>
              <TitleH2>Titles</TitleH2>
            </S.SubTitleWrapper>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>H1: </Text>
              <TitleH1>Lorem Ipsum</TitleH1>
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>H2: </Text>
              <TitleH2>Lorem Ipsum</TitleH2>
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>H3: </Text>
              <TitleH3>Lorem Ipsum</TitleH3>
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>H4: </Text>
              <TitleH4>Lorem Ipsum</TitleH4>
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>H5: </Text>
              <TitleH5>Lorem Ipsum</TitleH5>
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>H6: </Text>
              <TitleH6>Lorem Ipsum</TitleH6>
            </S.ElementDescription>
          </S.SetOfElements>

          {/* TEXT */}
          <S.SetOfElements>
            <S.SubTitleWrapper>
              <TitleH2>Text</TitleH2>
            </S.SubTitleWrapper>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Text 14px (Default): </Text>
              <Text>Nulla pulvinar pellentesque cursus. Etiam accumsan ultrices metus.</Text>
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Text 14px 500: </Text>
              <Text fontSize='14px' fontWeight='500'>Nulla pulvinar pellentesque cursus. Etiam accumsan ultrices metus.</Text>
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Text 16px: </Text>
              <Text fontSize='16px'>Nulla pulvinar pellentesque cursus. Etiam accumsan ultrices metus.</Text>
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Text 16px 500: </Text>
              <Text fontSize='16px' fontWeight='500'>Nulla pulvinar pellentesque cursus. Etiam accumsan ultrices metus.</Text>
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Text 16px 700 : </Text>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight='700'>Nulla pulvinar pellentesque cursus. Etiam accumsan ultrices metus.</Text>
            </S.ElementDescription>
          </S.SetOfElements>

          {/* BUTTONS */}
          <S.SetOfElements>
            <S.SubTitleWrapper>
              <TitleH2>Buttons</TitleH2>
            </S.SubTitleWrapper>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Primary Button: </Text>
              <Button onClick={() => console.log('Primary Button')}>Button</Button>
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Secundary Button: </Text>
              <Button secundary onClick={() => console.log('Secundary Button')}>Button</Button>
            </S.ElementDescription>
          </S.SetOfElements>
        </GS.Container>
      </GS.Section>
    )
}

export default LandingPage;