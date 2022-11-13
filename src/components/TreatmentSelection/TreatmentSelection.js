import react from 'react';
import * as S from './TreatmentSelection.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import TitleAndDescription from '../../Molecules/TitleAndDescription/TitleAndDescription'
import Card from '../../Molecules/Card/Card'

const TreatmentSelection = () => {

  return (
    <GS.Section>
      <GS.Container>
        <S.TitleAndDescriptionWrapper>
          <TitleAndDescription
            secundary
            topText='OUR SERVICES'
            title='Superior. Fast. Secure.'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />

          <TitleAndDescription
            tertiary
            title='How can we help you?'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.'
          />
        </S.TitleAndDescriptionWrapper>
        <S.CardsWrapper>
            <Card
              quinary
              border
              topText='Lorem Ipsum'
              title='Treatment Name 01'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
               In vitae lorem quis erat pharetra hendrerit ac a purus.'
              bottomText='25min'
              imageName='Arm'
            />

            <Card
              quinary
              border
              topText='Lorem Ipsum'
              title='Treatment Name 01'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
               In vitae lorem quis erat pharetra hendrerit ac a purus.'
              bottomText='25min'
              imageName='Arm'
            />

            <Card
              quinary
              border
              topText='Lorem Ipsum'
              title='Treatment Name 01'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
               In vitae lorem quis erat pharetra hendrerit ac a purus.'
              bottomText='25min'
              imageName='Arm'
            />

            <Card
              quinary
              border
              topText='Lorem Ipsum'
              title='Treatment Name 01'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
               In vitae lorem quis erat pharetra hendrerit ac a purus.'
              bottomText='25min'
              imageName='Arm'
            />

            <Card
              quinary
              border
              topText='Lorem Ipsum'
              title='Treatment Name 01'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
               In vitae lorem quis erat pharetra hendrerit ac a purus.'
              bottomText='25min'
              imageName='Arm'
            />

            <Card
              quinary
              border
              topText='Lorem Ipsum'
              title='Treatment Name 01'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
               In vitae lorem quis erat pharetra hendrerit ac a purus.'
              bottomText='25min'
              imageName='Arm'
            />
        </S.CardsWrapper>

        <S.CardsWrapper>
          <Card
            quaternary
            imageTop
            topText='Lorem Ipsum'
            title='Treatment Name 01'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
             In vitae lorem quis erat pharetra hendrerit ac a purus.'
            imageName='Arm'
          />

          <Card
            quaternary
            imageTop
            topText='Lorem Ipsum'
            title='Treatment Name 01'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
             In vitae lorem quis erat pharetra hendrerit ac a purus.'
            imageName='Arm'
          />

          <Card
            quaternary
            imageTop
            topText='Lorem Ipsum'
            title='Treatment Name 01'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta eros.
             In vitae lorem quis erat pharetra hendrerit ac a purus.'
            imageName='Arm'
          />
        </S.CardsWrapper>
      </GS.Container>
    </GS.Section>
  )
}

export default TreatmentSelection;