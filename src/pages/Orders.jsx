import React, { useEffect, useRef } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Orders = () => {
  const { currentMode } = useStateContext();

  useEffect(() => {
    const element = window.document.getElementsByClassName("e-columnheader")[0];
    element.classList.add("dark:bg-secondary-dark-bg");
    console.log(element);
  }, []);

  const name = useRef();
  return (
    <div className="m-3 md:m-10 p-4 rounded-3xl bg-white dark:bg-secondary-dark-bg dark:text-slate-200 ">
      <Header category="Pages" title="Orders" />
      <GridComponent
        id="gridComp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        editSettings={{ allowEditing: true, allowDeleting: true }}
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective ref={name}>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Resize, Sort, Filter, Edit, ExcelExport, PdfExport, ContextMenu]} />
      </GridComponent>
    </div>
  );
};

export default Orders;
