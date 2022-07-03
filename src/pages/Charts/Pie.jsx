import React from "react";

import { Header, PieChart } from "../../components";
import { pieChartData } from "../../data/dummy";

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-xl dark:bg-secondary-dark-bg dark:text-slate-200">
      <Header category="chart" title="information Sale  Pie" />
      <div>
        <PieChart data={pieChartData} />
      </div>
    </div>
  );
};

export default Pie;
