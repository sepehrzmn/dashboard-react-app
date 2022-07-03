import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Tooltip,
  Category,
  Legend,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis } from "../../data/dummy";

const ColorMapping = () => {
  const services = [ColumnSeries, Tooltip, Category, Legend];

  return (
    <div className="m-4 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-xl dark:bg-secondary-dark-bg dark:text-slate-200">
      <Header category="chart" title="USA CLIMATE - WEATHER BY MONTH" />
      <ChartComponent
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        background="transparent"
        legendSettings={{ visible: true, background: "transparent" }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
      >
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData[0]}
            xName="x"
            yName="y"
            type="Column"
            cornerRadius={{ topLeft: 5, topRight: 5 }}
          />
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          <RangeColorSettingDirective colors={colorMappingData[1]} start={0} end={10} label="1°C to 10°C" />
          <RangeColorSettingDirective colors={colorMappingData[2]} start={11} end={20} label="11°C to 20°C" />
          <RangeColorSettingDirective colors={colorMappingData[3]} start={21} end={30} label="21°C to 30°C" />
        </RangeColorSettingsDirective>
        <Inject services={services} />
      </ChartComponent>
    </div>
  );
};

export default ColorMapping;
