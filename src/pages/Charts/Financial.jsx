import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const date1 = new Date("2017, 1, 1");

function filterValue(value) {
  // eslint-disable-next-line no-sequences
  return value.x >= date1 && value.x, value.high, value.low;
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode, currentColor } = useStateContext();
  const condition = currentMode === "Dark";
  const services = [HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair];
  return (
    <div className="m-4 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-xl dark:bg-secondary-dark-bg dark:text-slate-200">
      <Header category="chart" title="AAPLE Historical" />
      <ChartComponent
        primaryXAxis={{ ...FinancialPrimaryXAxis, labelStyle: { color: condition ? "#fffa" : "#181818" } }}
        primaryYAxis={{
          ...FinancialPrimaryYAxis,
          labelStyle: { color: condition ? "#fffa" : "#181818" },
          titleStyle: { color: condition ? "#fffa" : "#181818" },
        }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true, shared: true }}
        zoomSettings={{
          enableMouseWheelZooming: true,
          enableSelectionZooming: true,
          enablePinchZooming: true,
        }}
        crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
        background="transparent"
      >
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={returnValue}
            xName="x"
            yName="low"
            high="high"
            low="low"
            type="Hilo"
            name="Apple"
            fill={currentColor}
          />
        </SeriesCollectionDirective>
        <Inject services={services} />
      </ChartComponent>
    </div>
  );
};

export default Financial;
