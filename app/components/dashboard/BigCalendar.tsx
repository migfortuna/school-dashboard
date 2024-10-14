"use client";

import React, { useState } from "react";
import { Calendar, momentLocalizer, Views, View } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { calendarEvents } from "@/app/lib/data";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const changeView = (newView: View) => {
    setView(newView);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        view={view}
        views={["work_week", "day"]}
        style={{ height: "98%" }}
        min={new Date(2030, 1, 1, 7, 0, 0)}
        max={new Date(2030, 12, 31, 18, 0, 0)}
        onView={changeView}
      />
    </div>
  );
};

export default BigCalendar;
