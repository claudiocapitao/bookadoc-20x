import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Button from '../../Atoms/Button/Button';
import Card from '../../Molecules/Card/Card';
import TitleAndDescription from '../../Molecules/TitleAndDescription/TitleAndDescription';
import * as GS from '../../Styles/GeneralStyles.styles';
import { treatmentCardsContent } from '../TreatmentSelection/TreatmentSelection.content';
import * as S from './BookAppointment.styles';
import AvailableAppointments from './components/AvailableAppointments/AvailableAppointments';
import AvailableDates from './components/AvailableDates/AvailableDates';
import WhoShouldTreatYou from './components/WhoShouldTreatYou/WhoShouldTreatYou';
import Text from '../../Atoms/Text/Text';
import { colors } from '../../Styles/StyleUtilities';

const BookAppointment = () => {
  const navigate = useNavigate();
  let { treatment } = useParams();
  const [ showErrorMessage, setShowErrorMessage ] = useState(false);

  const [selectedDoctorData, setSelectedDoctorData] = useState({});
  console.log('selectedDoctorData: ', selectedDoctorData)
  const [selectedDateAndAppointments, setSelectedDateAndAppointments] = useState({});
  console.log('selectedDateAndAppointments: ', selectedDateAndAppointments)
  const [selectedAppointment, setSelectedAppointment] = useState('');
  console.log('selectedAppointment: ', selectedAppointment)

  const [canUserProceed, setCanUserProceed] = useState(false);
  useEffect(() => {
    const canUserProceed = !!selectedDoctorData?.id && !!selectedDateAndAppointments?.date && !!selectedAppointment;
    setCanUserProceed(canUserProceed);
  }, [selectedDoctorData, selectedDateAndAppointments, selectedAppointment]);

  useEffect(() => {
    setSelectedDateAndAppointments({});
    setSelectedAppointment('');
  }, [selectedDoctorData]);

  // Request to get the available treatment
  async function getDoctorsAndTimes() {
    try {
      const response = await axios.get('https://run.mocky.io/v3/0075fec0-6822-4090-9d9c-7d8b84dc57fd');
      const doctorsAndTimes = response.data.doctorsAndTimes;
      setDoctorsAndTimes(doctorsAndTimes)
    } catch (error) {
      console.error(error);
    }
  }

  const [doctorsAndTimes, setDoctorsAndTimes] = useState([]);
  useEffect(() => {
    getDoctorsAndTimes();
  }, [])

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
            selectedDoctorData={selectedDoctorData}
            setSelectedDoctorData={setSelectedDoctorData}
          /> 

          <AvailableDates
            dates={selectedDoctorData?.datesAndAppointments ?? []}
            selectedDateAndAppointments={selectedDateAndAppointments}
            setSelectedDateAndAppointments={setSelectedDateAndAppointments}
          />

          <AvailableAppointments
            selectedDateAndAppointments={selectedDateAndAppointments}
            selectedAppointment={selectedAppointment}
            setSelectedAppointment={setSelectedAppointment}
          />
        </S.SelectAppointmentWrapper>

        <Button
          onClick={() => {
            if(canUserProceed){
              console.log('All data from the form: ', 'allFormData');
              navigate("/final-form-submission")
            } else {
              setShowErrorMessage(true)
          }}}
        >Register for Appointment</Button>
        <S.TextWrapper>
          {showErrorMessage && !canUserProceed && <Text fontSize='12px' fontWeight='500' fontColor={colors.errorRed}>Select an appointment</Text>}
        </S.TextWrapper>
      </GS.Container>
    </GS.Section>
  )
}

export default BookAppointment;