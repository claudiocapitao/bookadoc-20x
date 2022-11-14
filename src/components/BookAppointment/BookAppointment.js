import react, {useState, useEffect} from 'react';
import * as S from './BookAppointment.styles';
import * as GS from '../../Styles/GeneralStyles.styles';
import TitleAndDescription from '../../Molecules/TitleAndDescription/TitleAndDescription'
import Card from '../../Molecules/Card/Card'
import { treatmentCardsContent } from '../TreatmentSelection/TreatmentSelection.content';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Routes, Route, useParams } from 'react-router-dom';
import WhoShouldTreatYou from './components/WhoShouldTreatYou/WhoShouldTreatYou';
import AvailableDates from './components/AvailableDates/AvailableDates';
import AvailableAppointments from './components/AvailableAppointments/AvailableAppointments';
import Button from '../../Atoms/Button/Button';

const BookAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState('');
  console.log('selectedAppointment: ', selectedAppointment);

  const navigate = useNavigate();
  let { treatment } = useParams();

  const doctorsAndTimes = 
  [
    {
      id: 'doc000',
      name: 'All Available Appointments',
      speciality: '20x.health clinic'
    },
    {
      id: 'doc001',
      name: 'Dr. Lorem Ipsum',
      speciality: 'Ophthalmologist'
    },
    {
      id: 'doc002',
      name: 'Dr. Lorem Ipsum',
      speciality: 'Ophthalmologist'
    },
    {
      id: 'doc003',
      name: 'Dr. Lorem Ipsum',
      speciality: 'Ophthalmologist'
    },
    {
      id: 'doc004',
      name: 'Dr. Lorem Ipsum',
      speciality: 'Ophthalmologist'
    },
  ];

  const doctorTimes = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', ];

  // Request to get the available treatment
  /* async function getAvailableTreatments() {
    try {
      const response = await axios.get('https://run.mocky.io/v3/bb78fcf6-075f-4b20-a58f-4bd96e11024d');
      const availableTreatments = response.data.availableTreatments;
      console.log('availableTreatments: ', availableTreatments);
      setAvailableTreatments(availableTreatments)
    } catch (error) {
      console.error(error);
    }
  }

  const [availableTreatments, setAvailableTreatments] = useState([]);
  useEffect(() => {
    getAvailableTreatments();
  }, []) */

  return (
    <GS.Section>
      <GS.Container>
        <S.TitleAndDescriptionWrapper>
          <TitleAndDescription
            secundary
            topText='OUR DOCTORS'
            title='Appointment Details'
            text='Lorem insum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempo
            incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />

        </S.TitleAndDescriptionWrapper>
        <S.CardsWrapper>
          <Card
            quaternary
            maxWidth='500px'
            alignItems='flex-start'
            title={treatmentCardsContent?.[treatment].title}
            text={treatmentCardsContent?.[treatment].longDescription}
            bottomText={treatmentCardsContent?.[treatment].bottomText}
            imageName={treatmentCardsContent?.[treatment].imageName}
          />
        </S.CardsWrapper>

        <S.SelectAppointmentWrapper>
          <WhoShouldTreatYou
            doctorsAndTimes={doctorsAndTimes}
            selectedDoctor={selectedDoctor}
            setSelectedDoctor={setSelectedDoctor}
          /> 

          <AvailableDates
            times={doctorsAndTimes}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          <AvailableAppointments
            doctorsAndTimes={doctorTimes}
            selectedAppointment={selectedAppointment}
            setSelectedAppointment={setSelectedAppointment}
          />
        </S.SelectAppointmentWrapper>

        <Button onClick={() => {navigate("/final-form-submission");}}>Register for Appointment</Button>
      </GS.Container>
    </GS.Section>
  )
}

export default BookAppointment;