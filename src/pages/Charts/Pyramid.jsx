import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
  Inject,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Pyramid = () => {
  const { currentMode } = useStateContext();
  const condition = currentMode === "Dark";
  const services = [AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel];

  return (
    <div className="m-4 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-xl dark:bg-secondary-dark-bg dark:text-slate-200">
      <Header category="chart" title="Food Comparison Chart" />
      <div className="w-[80%] lg:w-[540px] mx-auto">
        <AccumulationChartComponent
          background="transparent"
          legendSettings={{
            textStyle: { color: condition ? "#fffa" : "#000" },
            alignment: "Far",
            position: "Bottom",
            margin: { top: 20 },
          }}
          tooltip={{ enable: true }}
        >
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              dataLabel={{ visible: true, font: { color: condition ? "#fffa" : "#696969", fontWeight: 600, size: 15 } }}
              height="100%"
              width="100%"
            />
          </AccumulationSeriesCollectionDirective>
          <Inject services={services} />
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
