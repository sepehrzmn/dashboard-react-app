import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const LineCharts = () => {
  const { currentMode } = useStateContext();
  const services = [DateTime, Legend, Tooltip, LineSeries];
  return (
    <ChartComponent
      id="line-chart"
      primaryXAxis={{ ...LinePrimaryXAxis, labelStyle: { color: currentMode === "Dark" ? "#fff8" : "back" } }}
      primaryYAxis={{ ...LinePrimaryYAxis, labelStyle: { color: currentMode === "Dark" ? "#fff8" : "back" } }}
      background="transparent"
      height="420px"
      legendSettings={{ background: "transparent", textStyle: { color: currentMode === "Dark" ? "#fff8" : "back" } }}
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
    >
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => {
          return <SeriesDirective key={index} {...item} colorName="transparent" />;
        })}
      </SeriesCollectionDirective>
      <Inject services={services} />
    </ChartComponent>
  );
};

export default LineCharts;
