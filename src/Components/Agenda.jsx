import React, { useMemo, useState } from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker } from '@mobiscroll/react';
import '../Styles/agenda.css';

function Agenda({ onDateSelect }) {
  const myLabels = useMemo(() => {
    return [{
      start: '2023-12-08',
      textColor: '#e1528f',
      title: '2 SPOTS'
    }];
  }, []);

  const myInvalid = useMemo(() => {
    return [
      {
        d: 'M',
        start: '00:00',
        end: '24:00'
      }
    ];
  }, []);

  const [startDate, setStartDate] = useState(null);

  const isWeekday = (date) => {
    const day = new Date(date).getDay();
    return day !== 0 && day !== 6;
  };

  const handleDateChange = (date) => {
    // Format the date to ISO string before passing it to the parent component
    const formattedDate = date.toISOString();
    
    setStartDate(date);
    // Pass the formatted date to the parent component
    onDateSelect(formattedDate);
    console.log(formattedDate);
  };

  return (
    <Datepicker
      controls={['calendar', 'timegrid']}
      min="2023-12-07T00:00"
      max="2024-06-07T00:00"
      minTime="09:00"
      maxTime="22:30"
      stepMinute={90}
      labels={myLabels}
      invalid={myInvalid}
      timeFormat="HH:mm"
      selected={startDate}
      onChange={(event, inst) => {
        const selectedDate = inst.getVal();
        setStartDate(selectedDate);
        // Pass the selected date to the parent component
        onDateSelect(selectedDate);
      }}
      filterDate={isWeekday}
      placeholderText="Select a weekday"
    />
  );
}

export default Agenda;