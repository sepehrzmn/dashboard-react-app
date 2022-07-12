import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";

function header(arg) {
  return (
    <div className="w-full bg-secondary-dark-bg text-slate-100 h-full "></div>
  );
}

const Calender = () => {
  const services = [
    Day,
    Week,
    WorkWeek,
    Month,
    Agenda,
    Resize,
    DragAndDrop,
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-xl dark:bg-secondary-dark-bg ">
      <Header category="App" title="Calender" />
      <ScheduleComponent
        id="calender"
        height="650px"
        eventSettings={{
          dataSource: scheduleData,
        }}
        selectedDate={new Date(2021, 0, 10)}
        style={{ border: "none" }}
        cssClass="dark:text-slate-200"
        // cellHeaderTemplate={header}
        cellTemplate={header}
      >
        <Inject services={services} />
        <ViewsDirective />
      </ScheduleComponent>
    </div>
  );
};

export default Calender;
