import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { AppointmentModel, ViewState, SchedulerDateTime } from '@devexpress/dx-react-scheduler';
import { Scheduler, DayView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';

const appointments: Array<AppointmentModel> = [{
  startDate: '2018-10-31T10:00',
  endDate: '2018-10-31T11:15',
  title: 'Meeting',
  type: 'private',
}, {
  startDate: '2018-10-31T07:30',
  endDate: '2018-10-31T09:00',
  title: 'Go to a gym',
  type: 'work',
}];

const Appointment: React.ComponentType<Appointments.AppointmentProps> = (props) => {
  if (props.data.type === 'private') {
    return <Appointments.Appointment {...props} style={{ backgroundColor: '#EC407A' }} />;
  }
  return <Appointments.Appointment {...props} style={{ backgroundColor: '#7E57C2' }} />;
};

const Demo: React.SFC = () => {
  const [currentDate, setCurrentDate] = React.useState<SchedulerDateTime>('2018-10-31');

  return (
    <Paper>
      <Scheduler
        data={appointments}
      >
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={setCurrentDate}
        />
        <DayView
          startDayHour={7}
          endDayHour={12}
        />
        <Appointments
          appointmentComponent={Appointment}
        />
      </Scheduler>
    </Paper>
  );
};

export default Demo;
