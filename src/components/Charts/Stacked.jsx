import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  StackingColumnSeries,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = ({ width, height }) => {
  const { currentColor, currentMode } = useStateContext();

  const newStackedCustomSeries = stackedCustomSeries.slice();
  newStackedCustomSeries[0] = { ...newStackedCustomSeries[0], fill: currentColor };
  newStackedCustomSeries[1] = { ...newStackedCustomSeries[1], fill: "#555" };
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background="transparent"
      legendSettings={{ background: "transparent", textStyle: { color: currentMode === "Dark" ? "#fff8" : "back" } }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {newStackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} fill={item.fill} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
