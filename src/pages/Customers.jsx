import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  Selection,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  const editSetting = { allowEditing: true, allowDeleting: true };
  const toolbar = ["Search", "Delete"];

  const editButton = (props) => {
    console.log(props);
    return <button className="border rounded-sm">1</button>;
  };

  return (
    <div className="m-3 md:m-10 p-4 rounded-3xl bg-white dark:bg-secondary-dark-bg dark:text-slate-200 ">
      <Header category="Pages" title="Customers" />
      <GridComponent
        id="gridComp"
        dataSource={customersData}
        allowPaging
        allowSorting
        allowSelection
        editSettings={editSetting}
        toolbar={toolbar}
        editSettingsTemplate={editButton}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Edit, Toolbar, Selection]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
