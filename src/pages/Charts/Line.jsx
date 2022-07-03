import React from "react";

import { Header, LineCharts } from "../../components";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg dark:text-slate-200 rounded-xl">
      <Header category="Chart" title="Information Rate" />
      <div className="w-full">
        <LineCharts />
      </div>
    </div>
  );
};

export default Line;
