import React from "react";

import { Header, Stacked as StackedChart } from "../../components";

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-xl dark:bg-secondary-dark-bg dark:text-slate-200">
      <Header category="chart" title="Food Comparison Chart" />
      <div className="w-[100%] mx-auto md:w-[80%] ">
        <StackedChart height="100%" width="100%" />
      </div>
    </div>
  );
};

export default Stacked;
