import react, {useState, useEffect} from 'react';
import * as S from './FinalFormSubmission.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import TitleAndDescription from '../../Molecules/TitleAndDescription/TitleAndDescription'
import Card from '../../Molecules/Card/Card'
import { treatmentCardsContent } from '../TreatmentSelection/TreatmentSelection.content';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Routes, Route, useParams } from 'react-router-dom';
import InputField from '../../Atoms/InputField/InputField';

const BookAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const navigate = useNavigate();
  let { treatment } = useParams();

  const [ firstName, setFirstName ] = useState('');

  return (
    <GS.Section>
      <GS.Container>
        <S.TitleAndDescriptionWrapper>
          <TitleAndDescription
            secundary
            topText='MAKE AN APPOINTMENT'
            title='Appointment Details'
            text='Lorem insum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempo
            incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />

          <TitleAndDescription
            quaternary
            title='Welcome to 20x.health'
            text='Please fill in your personal data.'
          />
        </S.TitleAndDescriptionWrapper>

        <InputField type='text' placeholder='First Name' value={firstName} onChange={setFirstName} />
      </GS.Container>
    </GS.Section>
  )
}

export default BookAppointment;