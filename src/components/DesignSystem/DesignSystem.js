import React from 'react';
import Button from '../../Atoms/Button/Button';
import Text from '../../Atoms/Text/Text';
import { TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6 } from '../../Atoms/Title/Title.styles';
import Card from '../../Molecules/Card/Card';
import TitleAndDescription from '../../Molecules/TitleAndDescription/TitleAndDescription';
import * as GS from '../../Styles/GeneralStyles.styles';
import { colors } from '../../Styles/StyleUtilities';
import * as S from './DesignSystem.styles';

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

           {/* MOLECULE - Title and Description*/}
           <S.SetOfElements>
            <S.SubTitleWrapper>
              <TitleH2>Molecule - Title and Description</TitleH2>
            </S.SubTitleWrapper>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Primary:</Text>
              <TitleAndDescription
              topText='Lorem Ipsum'
              title='Lorem Ipsum'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
               In vitae lorem quis erat pharetra hendrerit ac a purus. In hac habitasse platea 
               dictumst. Phasellus rutrum in risus nec pulvinar. Vivamus pharetra luctus dapibus. 
               Integer volutpat urna nisl. Aliquam at pellentesque justo, sit amet fermentum nibh. 
               Nullam posuere tincidunt tincidunt. Pellentesque congue ligula massa, sed accumsan 
               lectus efficitur vitae. Ut porttitor ullamcorper risus, ac posuere arcu tempor eget.'
              bottomText='Lorem Ipsum'
            />
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Secundary:</Text>
              <TitleAndDescription
              secundary
              topText='Lorem Ipsum'
              title='Lorem Ipsum'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
               In vitae lorem quis erat pharetra hendrerit ac a purus. In hac habitasse platea 
               dictumst. Phasellus rutrum in risus nec pulvinar. Vivamus pharetra luctus dapibus. 
               Integer volutpat urna nisl. Aliquam at pellentesque justo, sit amet fermentum nibh. 
               Nullam posuere tincidunt tincidunt. Pellentesque congue ligula massa, sed accumsan 
               lectus efficitur vitae. Ut porttitor ullamcorper risus, ac posuere arcu tempor eget.'
               bottomText='Lorem Ipsum'
            />
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Tertiary:</Text>
              <TitleAndDescription
              tertiary
              topText='Lorem Ipsum'
              title='Lorem Ipsum'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
               In vitae lorem quis erat pharetra hendrerit ac a purus. In hac habitasse platea 
               dictumst. Phasellus rutrum in risus nec pulvinar. Vivamus pharetra luctus dapibus. 
               Integer volutpat urna nisl. Aliquam at pellentesque justo, sit amet fermentum nibh. 
               Nullam posuere tincidunt tincidunt. Pellentesque congue ligula massa, sed accumsan 
               lectus efficitur vitae. Ut porttitor ullamcorper risus, ac posuere arcu tempor eget.'
               bottomText='Lorem Ipsum'
            />
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Quaternary:</Text>
              <TitleAndDescription
              quaternary
              topText='Lorem Ipsum'
              title='Lorem Ipsum'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
               In vitae lorem quis erat pharetra hendrerit ac a purus. In hac habitasse platea 
               dictumst. Phasellus rutrum in risus nec pulvinar. Vivamus pharetra luctus dapibus. 
               Integer volutpat urna nisl. Aliquam at pellentesque justo, sit amet fermentum nibh. 
               Nullam posuere tincidunt tincidunt. Pellentesque congue ligula massa, sed accumsan 
               lectus efficitur vitae. Ut porttitor ullamcorper risus, ac posuere arcu tempor eget.'
               bottomText='Lorem Ipsum'
            />
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Quinary:</Text>
              <TitleAndDescription
              quinary
              topText='Lorem Ipsum'
              title='Lorem Ipsum'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
               In vitae lorem quis erat pharetra hendrerit ac a purus. In hac habitasse platea 
               dictumst. Phasellus rutrum in risus nec pulvinar. Vivamus pharetra luctus dapibus. 
               Integer volutpat urna nisl. Aliquam at pellentesque justo, sit amet fermentum nibh. 
               Nullam posuere tincidunt tincidunt. Pellentesque congue ligula massa, sed accumsan 
               lectus efficitur vitae. Ut porttitor ullamcorper risus, ac posuere arcu tempor eget.'
               bottomText='Lorem Ipsum'
            />
            </S.ElementDescription>
          </S.SetOfElements>



           {/* MOLECULE - Cards with border*/}
           <S.SetOfElements>
            <S.SubTitleWrapper>
              <TitleH2>Molecule - Cards with border</TitleH2>
            </S.SubTitleWrapper>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Card with border - quaternary:</Text>
              <Card
                quaternary
                border
                topText='Lorem Ipsum'
                title='Treatment Name 01'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
                 In vitae lorem quis erat pharetra hendrerit ac a purus.'
                imageName='pediatrician'
              />
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Card with border - quaternary - no bottom text:</Text>
              <Card
                quaternary
                border
                topText='Lorem Ipsum'
                title='Treatment Name 01'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
                 In vitae lorem quis erat pharetra hendrerit ac a purus.'
                imageName='pediatrician'
              />
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Card with border - quinary:</Text>
              <Card
                quinary
                border
                topText='Lorem Ipsum'
                title='Treatment Name 01'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
                 In vitae lorem quis erat pharetra hendrerit ac a purus.'
                bottomText='25min'
                imageName='pediatrician'
              />
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Card with border - quinary - no bottom text:</Text>
              <Card
                quinary
                border
                topText='Lorem Ipsum'
                title='Treatment Name 01'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
                 In vitae lorem quis erat pharetra hendrerit ac a purus.'
                imageName='pediatrician'
              />
            </S.ElementDescription>
          </S.SetOfElements>


           {/* MOLECULE - Cards with border*/}
           <S.SetOfElements>
            <S.SubTitleWrapper>
              <TitleH2>Molecule - Cards with no border and image top</TitleH2>
            </S.SubTitleWrapper>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Card with no border and image top - quaternary:</Text>
              <Card
                quaternary
                imageTop
                topText='Lorem Ipsum'
                title='Treatment Name 01'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
                 In vitae lorem quis erat pharetra hendrerit ac a purus.'
                bottomText='25min'
                imageName='ophthalmologist'
              />
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Card with no border and image top - quaternary - no bottom text:</Text>
              <Card
                quaternary
                imageTop
                topText='Lorem Ipsum'
                title='Treatment Name 01'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
                 In vitae lorem quis erat pharetra hendrerit ac a purus.'
                imageName='ophthalmologist'
              />
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Card with no border and image top - quinary:</Text>
              <Card
                quinary
                imageTop
                topText='Lorem Ipsum'
                title='Treatment Name 01'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
                 In vitae lorem quis erat pharetra hendrerit ac a purus.'
                bottomText='25min'
                imageName='ophthalmologist'
              />
            </S.ElementDescription>

            <S.ElementDescription>
              <Text fontSize='16px' fontColor={colors.textOrange} fontWeight={700}>Card with no border and image top - quinary - no bottom text:</Text>
              <Card
                quinary
                imageTop
                topText='Lorem Ipsum'
                title='Treatment Name 01'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
                 In vitae lorem quis erat pharetra hendrerit ac a purus.'
                imageName='ophthalmologist'
              />
            </S.ElementDescription>
          </S.SetOfElements>

        </GS.Container>
      </GS.Section>
    )
}

export default LandingPage;