import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationDataLabel,
  AccumulationTooltip,
  PieSeries,
  Inject,
  AccumulationLegend,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

const Pie = ({ data, radius }) => {
  const { currentMode } = useStateContext();
  const services = [PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip];
  const condition = currentMode === "Dark";

  return (
    <AccumulationChartComponent
      legendSettings={{
        visible: true,
        background: "transparent",
        textStyle: { color: condition ? "#fff8" : "black", size: "14px", fontWeight: 600 },
      }}
      tooltip={{ enable: true }}
      background="transparent"
      width="100%"
      height="100%"
    >
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data}
          xName="x"
          yName="y"
          type="Pie"
          radius={radius}
          name="Sale"
          dataLabel={{
            visible: true,
            name: "text",
            border: {
              color: "red",
              width: "10px",
            },
            font: {
              color: condition ? "#fffa" : "#fff",
              fontWeight: 600,
              size: "15px",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
      <Inject services={services} />
    </AccumulationChartComponent>
  );
};

export default Pie;
