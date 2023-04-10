import AdminMenu from '@/Components/AdminMenu'
import React, { useState } from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = momentLocalizer(moment)
function Declaredate() {
    const [events, setEvents] = useState([])

    const handleSelect = ({ start, end }) => {
      const title = window.prompt('Enter event title:')
      if (title) {
        setEvents([...events, { start, end, title }])
      }
    }
  return (
    <div className="flex flex-row h-screen">
        <AdminMenu />
        <div className="flex flex-col container m-4">
        <h2 className="text-lg font-semibold mb-4 text-red-500 underline decoration-4">Declare the election date</h2>
        <div className="w-full max-w-7xl mx-auto p-4">
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleSelect}
      />
    </div>
          {events.map(e => {
        console.log(e.start);
    })}
        </div>
    </div>
  )
}

export default Declaredate