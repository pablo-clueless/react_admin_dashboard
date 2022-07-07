import React from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'

import { scheduleData } from '../data/dummy'
import { Header } from '../components'

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title='Calendar' category='App' />
      <ScheduleComponent height='650px' eventSettings={{dataSource: scheduleData}} selectedDate={new Date(2022, 0, 10)}>
        <Inject services={[Day, Week, Month, WorkWeek, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar