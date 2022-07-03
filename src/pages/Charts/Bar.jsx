import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
  Inject,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Bar = () => {
  const services = [Legend, Category, Tooltip, ColumnSeries, DataLabel];
  const { currentMode } = useStateContext();
  const condition = currentMode === "Dark";
  return (
    <div className="m-3 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-xl dark:text-slate-200">
      <Header category="Charts" title="Olympic Medal Counts - RIO" />
      <ChartComponent
        legendSettings={{
          visible: true,
          textStyle: { color: condition ? "#fffa" : "#181818", size: 14 },
        }}
        primaryXAxis={{ ...barPrimaryXAxis, labelStyle: { color: condition ? "#fffa" : "#181818" } }}
        primaryYAxis={{ ...barPrimaryYAxis, labelStyle: { color: condition ? "#fffa" : "#181818" } }}
        chartArea={{ border: { width: 0 } }}
        background="transparent"
        tooltip={{ enable: true }}
      >
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>

        <Inject services={services} />
      </ChartComponent>
    </div>
  );
};

export default Bar;
