import AdminMenu from "@/Components/AdminMenu";
import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
function Declaredate() {
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();
  const setDay = (e) => {
    if (e) {
      setStartDay(e[0])
      setEndDay(e[1])
    } else {
      setStartDay("")
      setEndDay("")
    }

  }
  return (
    <div className="flex flex-row h-screen">
      <AdminMenu />
      <div className="flex flex-col container m-4">
        <h2 className="text-lg font-semibold mb-4 text-red-500 underline decoration-4">
          Declare the election date
        </h2>
        <div className="w-full max-w-7xl mx-auto p-4">
          <div className="field">
            <DateRangePicker
              format="yyyy-MM-dd hh:mm aa"
              showMeridian
              onChange={setDay}
              defaultCalendarValue={[
                new Date("2022-02-01 00:00:00"),
                new Date("2022-05-01 23:59:59"),
              ]}
            />
          </div>
          {startDay && endDay && (
        <p>
          Selected date range:{' '}
          {`${startDay} - ${endDay}`}
        </p>
      )}
        </div>
      </div>
    </div>
  );
}

export default Declaredate;
