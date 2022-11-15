import React, { useState } from 'react';
import { TitleH6 } from '../../../../Atoms/Title/Title.styles';
import DaySelectionBox from '../DaySelectionBox/DaySelectionBox';
import * as S from './Calendar.styles';

const Calendar = ({
  dates,
  selectedDateAndAppointments,
  setSelectedDateAndAppointments
}) => {
  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr']
  const firstWeekToShow = [7, 8, 9, 10, 11];
  const secondtWeekToShow = [14, 15, 16, 17, 18];
  const thirdWeekToShow = [21, 22, 23, 24, 25];
  const weeksToShow = [firstWeekToShow, secondtWeekToShow, thirdWeekToShow];

  const [selectedDay, setSelectedDay] = useState(0);
  return (
    <S.Wrapper>
      <TitleH6>October, 2022</TitleH6>
      <S.DaysWrapper>
        {weekDays.map((weekDay) => 
          <DaySelectionBox
            bold
            disabled
            day={weekDay}
          />
        )}
      </S.DaysWrapper>

      {weeksToShow.map((week) => 
        <S.DaysWrapper>
          {week.map((day) => 
            <DaySelectionBox
              bold={!!dates.find(date => date.date === day)}
              disabled={day<10}
              line={day<10}
              selectedDateAndAppointments={selectedDateAndAppointments}
              onClick={() => setSelectedDateAndAppointments(dates?.find(date => date.date === day) ?? {})}
              doctorAppointments={dates?.find(date => date.date === day)  }
              day={day}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          )}
        </S.DaysWrapper>
      )}
    </S.Wrapper>
  )
}

export default Calendar;