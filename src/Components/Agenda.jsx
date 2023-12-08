import React, { useMemo , useState} from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions, localeFr } from '@mobiscroll/react';
import '../Styles/agenda.css'

function Agenda() {
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
          d: 'M', // Jour de la semaine : 'M' correspond à lundi
          start: '00:00', // Heure de début (minuit)
          end: '24:00' // Heure de fin (minuit)
        }
      ];
      
    }, []);
    
    const [startDate, setStartDate] = useState(null);

    const isWeekday = (date) => {
      const day = new Date(date).getDay();
      return day !== 0 && day !== 6; // 0 pour dimanche, 6 pour samedi
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
      onChange={(date) => setStartDate(date)}
      filterDate={isWeekday}
      placeholderText="Select a weekday"
    />
  );
}

export default Agenda;
