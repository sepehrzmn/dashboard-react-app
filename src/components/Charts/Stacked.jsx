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

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = ({ width, height }) => {
  const { currentColor, currentMode } =
    useStateContext();
  const condition = currentMode === "Dark";
  const newStackedCustomSeries =
    stackedCustomSeries.slice();
  newStackedCustomSeries[0] = {
    ...newStackedCustomSeries[0],
    fill: currentColor,
  };
  newStackedCustomSeries[1] = {
    ...newStackedCustomSeries[1],
    fill: "#555",
    cornerRadius: { topLeft: 5, topRight: 5 },
  };
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={{
        ...stackedPrimaryXAxis,
        labelStyle: {
          color: condition ? "#fffa" : "#0000",
        },
        titleStyle: {
          color: condition ? "#fffa" : "#0000",
        },
      }}
      primaryYAxis={{
        ...stackedPrimaryYAxis,
        labelStyle: {
          color: condition ? "#fffa" : "#000",
        },
        titleStyle: {
          color: condition ? "#fffa" : "#000",
        },
      }}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background="transparent"
      legendSettings={{
        background: "transparent",
        textStyle: {
          color:
            currentMode === "Dark"
              ? "#fff8"
              : "#000",
        },
      }}
    >
      <Inject
        services={[
          StackingColumnSeries,
          Category,
          Legend,
          Tooltip,
        ]}
      />
      <SeriesCollectionDirective>
        {newStackedCustomSeries.map(
          (item, index) => (
            <SeriesDirective
              key={index}
              {...item}
              fill={item.fill}
            />
          )
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
