import { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './appointments.js';


export default function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [data, setData] = useState([])

  useEffect(() => {
    if(appointments) setData(appointments)
  }, [])

  const onDoubleClick = () => {
    console.log('you clicked this!')
  }

  return (
    <Paper>
      <Scheduler
        data={data}>
        <ViewState currentDate={currentDate} />
        <MonthView onDoubleClick={onDoubleClick} />
        <Appointments />
      </Scheduler>
    </Paper>
  )
}
