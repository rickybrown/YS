import { useState } from 'react';
import CellBase from './CellBase';
import { Paper, Typography } from '@material-ui/core';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  Resources,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ColorLens } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { owners } from './tasks';
import { appointments } from './appointments';

import styles from './styles';

const resources = [{
  fieldName: 'ownerId',
  title: 'Owners',
  instances: owners,
}];

const DayScaleCell = props => (
  <MonthView.DayScaleCell {...props} style={{ textAlign: 'center', fontWeight: 'bold' }} />
);

const TimeTableCell = withStyles(styles, { name: 'Cell' })(CellBase);

const Appointment = withStyles(styles, { name: 'Appointment' })(({ classes, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    className={classes.appointment}
  />
));

const AppointmentContent = withStyles(styles, { name: 'AppointmentContent' })(({ classes, ...restProps }) => (
  <Appointments.AppointmentContent {...restProps} className={classes.apptContent} />
));

const FlexibleSpace = withStyles(styles, { name: 'ToolbarRoot' })(({ classes, ...restProps }) => (
  <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
    <div className={classes.flexContainer}>
      {/*<ColorLens fontSize="large" htmlColor="#FF7043" />*/}
      <Typography variant="h5" style={{ marginLeft: '10px' }}>Prophetic Calendar</Typography>
    </div>
  </Toolbar.FlexibleSpace>
));


export default function Demo() {
  const [data, setData] = useState(appointments)

  const commitChanges = ({ added, changed, deleted }) => {
    let newData;

    setData((state) => {
      if(added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        newData = [...data, { id: startingAddedId, ...added }];
      }
      if(changed) {
        newData = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if(deleted !== undefined) {
        newData = data.filter(appointment => appointment.id !== deleted);
      }
      return newData;
    });
  }

  return (
    <Paper>
      <Scheduler
        data={data}>
        <EditingState
          onCommitChanges={commitChanges}
        />
        <ViewState
          defaultCurrentDate="2018-07-17"
        />

        <MonthView
          timeTableCellComponent={TimeTableCell}
          dayScaleCellComponent={DayScaleCell}
        />

        <Appointments
          appointmentComponent={Appointment}
          appointmentContentComponent={AppointmentContent}
        />
        <Resources
          data={resources}
        />

        <Toolbar
          flexibleSpaceComponent={FlexibleSpace}
        />
        <DateNavigator />

        <EditRecurrenceMenu />
        <AppointmentTooltip
          showCloseButton
          showDeleteButton
          showOpenButton
        />
        <AppointmentForm />
        <DragDropProvider />
      </Scheduler>
    </Paper>
  );
}
