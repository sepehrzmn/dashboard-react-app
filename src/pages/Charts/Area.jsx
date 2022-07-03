import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from "../../data/dummy";
import { Header } from "../../components";

const Area = () => {
  const { currentMode } = useStateContext();
  const services = [DateTime, Legend, SplineAreaSeries];
  const condition = currentMode === "Dark";

  return (
    <div className="m-4 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg dark:text-slate-200 rounded-xl">
      <Header category="Chart" title="Information Rate in Percentage" />
      <div>
        <ChartComponent
          id="aria-chart"
          primaryXAxis={{ ...areaPrimaryXAxis, labelStyle: { color: condition ? "#fff8" : "back" } }}
          primaryYAxis={{ ...areaPrimaryYAxis, labelStyle: { color: condition ? "#fff8" : "back" } }}
          background="transparent"
          height="420px"
          legendSettings={{
            background: "transparent",
            textStyle: { color: condition ? "#fff8" : "back" },
          }}
          tooltip={{ enable: true }}
          chartArea={{ border: { width: 0 } }}
        >
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => {
              return <SeriesDirective key={index} {...item} colorName="transparent" />;
            })}
          </SeriesCollectionDirective>
          <Inject services={services} />
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;
