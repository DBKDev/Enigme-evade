import React, { useState, useEffect } from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker } from '@mobiscroll/react';
import '../Styles/agenda.css';
import testService from '../Services/testService';

function Agenda({ onDateSelect }) {
  //Selection des jours invalides (créneau déjà utilisé dans la bdd)
  const [invalidDays, setInvalidDays] = useState([]);

  useEffect(() => {
    const fetchExcludedDays = async () => {
      try {
        // Récupérer les données des réservations
        const response = await testService.getAllResa();
        const data = response.data;
        
        //Si j'ai un tableau en data
        if (Array.isArray(data)) {
          const formattedInvalidDays = data
            .filter(item => {
              const startDateTime = new Date(item.res_dateHeure);
              const isMonday = startDateTime.getDay() === 1; // 1 représente le lundi
              return !isMonday; // Retourne true pour tous les jours qui ne sont pas des lundis
            })
            .map(item => {
              const startDateTime = new Date(item.res_dateHeure);
              const disabledHour = startDateTime.getHours();
              const minutes = startDateTime.getMinutes();
              const isDisabled = true;

              const endDateTime = new Date(item.res_dateHeure);
              endDateTime.setHours(disabledHour + 1, minutes + 29);

              return {
                d: startDateTime.toISOString(),
                start: startDateTime,
                end: endDateTime,
                disabled: isDisabled,
              };
            });


          // Ajoutez une date pour chaque lundi (désactivation générale des lundis)
          const generalInvalidMondays = [];
          const currentDate = new Date('2023-12-11T00:00:00');
          currentDate.setHours(0, 0, 0, 0);

          // Séléctionne les 52 lundis
          for (let i = 0; i < 52; i++) {
            const monday = new Date(currentDate);
            monday.setDate(currentDate.getDate() + (1 + 7 - currentDate.getDay()) % 7);

            // Set end time to the end of the day
            const endOfDay = new Date(monday);
            endOfDay.setHours(23, 59, 59, 999);

            generalInvalidMondays.push({
              d: monday.toISOString(),
              start: monday,
              end: endOfDay,
              disabled: true,
            });

            // +7 pour séléctionner le lundi d'après et ainsi de suite
            currentDate.setDate(currentDate.getDate() + 7);
          }
          console.log(generalInvalidMondays, 'Invalid');

          setInvalidDays([...formattedInvalidDays, ...generalInvalidMondays]);
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
        //console.log('Datepicker onChange called');
        const selectedDate = inst.getVal();
        //console.log('Selected Date:', selectedDate);
        onDateSelect(selectedDate);
      }}
      placeholderText="Select a weekday"
    />
  );
}

export default Agenda;
