import React, { useState, useEffect } from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker } from '@mobiscroll/react';
import '../Styles/agenda.css';
import testService from '../Services/testService';

function Agenda({ onDateSelect }) {
  const [invalidDays, setInvalidDays] = useState([]);

  useEffect(() => {
    const fetchExcludedDays = async () => {
      try {
        const response = await testService.getAllResa();
        const data = response.data;

        if (Array.isArray(data)) {
          const formattedInvalidDays = data.map(item => {
            const startDateTime = new Date(item.res_dateHeure);
            console.log(startDateTime);

            // Assuming your API response includes disabledHour
            const disabledHour = startDateTime.getHours(); // Change this to the actual property name in your API response
            const minutes = startDateTime.getMinutes();
            const isDisabled = true; // Replace this with your logic to determine if the date is disabled

            const endDateTime = new Date(item.res_dateHeure);
  endDateTime.setHours(disabledHour + 1, minutes + 29); // Add 1 hour and 29 minutes

            return {
              d: startDateTime.toISOString(),
              start: startDateTime,
              end: endDateTime,
              disabled: isDisabled,
            };
          });

          setInvalidDays(formattedInvalidDays);
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      } catch (error) {
        console.error('Error fetching or processing data from the API:', error.message);
      }
    };

    // Call the function to fetch excluded days
    fetchExcludedDays();
  }, []);

  return (
    <Datepicker
      controls={['calendar', 'timegrid']}
      min="2023-12-07T00:00"
      max="2024-06-07T00:00"
      minTime="09:00"
      maxTime="22:30"
      stepMinute={90}
      invalid={invalidDays}
      timeFormat="HH:mm"
      onChange={(event, inst) => {
        console.log('Datepicker onChange called');
        const selectedDate = inst.getVal();
        console.log('Selected Date:', selectedDate);
        onDateSelect(selectedDate);
      }}
      placeholderText="Select a weekday"
    />
  );
}

export default Agenda;
