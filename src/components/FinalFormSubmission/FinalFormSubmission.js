import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../../Atoms/Button/Button';
import Checkbox from '../../Atoms/Checkbox/Checkbox';
import Dropbox from '../../Atoms/Dropbox/Dropbox';
import InputField from '../../Atoms/InputField/InputField';
import Text from '../../Atoms/Text/Text';
import TitleAndDescription from '../../Molecules/TitleAndDescription/TitleAndDescription';
import * as GS from '../../Styles/GeneralStyles.styles';
import { colors } from '../../Styles/StyleUtilities';
import * as S from './FinalFormSubmission.styles';

const BookAppointment = () => {
  const navigate = useNavigate();

  const [ gender, setGender ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ day, setDay ] = useState('');
  const [ month, setMonth ] = useState('');
  const [ year, setYear ] = useState('');
  const [ checkbox, setCheckbox ] = useState(false);
  const [ showErrorMessage, setShowErrorMessage ] = useState(false);

  const isFormCompleted = !!gender && !!firstName && !!lastName && !!email && !!day && !!month && !!year &&  !!checkbox

  const genderOptions = ['Female', 'Male', 'Gender Fluid', 'Bigender', 'Genderqueer', 'Agender', 'Transgender', 'Other']

  const [allFormData, setAllFormData] = useState({});
  useEffect(() => {
    setAllFormData(
      {
      gender,
      firstName,
      lastName,
      email,
      birthdayDate: `${year}/${month}/${day}`,
      checkbox
      }
    );
  }, [
    gender,
    firstName,
    lastName,
    email,
    day,
    month,
    year,
    checkbox
  ])

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

        <S.Form>
          <S.FormSubCointainer>
            <Dropbox placeholder='Gender' options={genderOptions} value={gender} onClick={setGender} />
          </S.FormSubCointainer>
    
          <S.FormSubCointainer>
            <InputField type='text' placeholder='First Name' value={firstName} onChange={setFirstName} />
            <InputField type='text' placeholder='Last Name' value={lastName} onChange={setLastName} />
          </S.FormSubCointainer>

          <S.FormSubCointainer>
            <InputField type='email' placeholder='E-mail Address' value={email} onChange={setEmail} />
          </S.FormSubCointainer>

          <Text fontSize='16px' fontWeight='500'>Birthday</Text>

          <S.FormSubCointainer>
            <InputField type='number' onBlur={() => (day < 1 || day > 31) && setDay('')} placeholder='Day' value={day} onChange={setDay} />
            <InputField type='number' onBlur={() => (month < 1 || month > 12) && setMonth('')} placeholder='Month' value={month} onChange={setMonth} />
            <InputField type='number' onBlur={() => (year < 1920 || year > 2004) && setYear('')} placeholder='Year' value={year} onChange={setYear} />
          </S.FormSubCointainer>

          <S.FormSubCointainer>
            <Checkbox value={checkbox} onChange={setCheckbox} text='I accept the terms and conditions' />
          </S.FormSubCointainer>
          
          <S.ButtonCointainer>
            <Button onClick={() => {
              if(isFormCompleted){
                console.log('All data from the form: ', allFormData);
                navigate("/success-page");
              } else {
                setShowErrorMessage(true)
              }}}>Register Appointment</Button>
          </S.ButtonCointainer>
          {showErrorMessage && !isFormCompleted && <Text fontSize='12px' fontWeight='500' fontColor={colors.errorRed}>One or more fields are missing</Text>}
        </S.Form>
      </GS.Container>
    </GS.Section>
  )
}

export default BookAppointment;