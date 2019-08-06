import React, { useState } from "react";
import "./Content.css";

import ContentTable from "../table/Table";
import EditForm from "./EditForm.jsx";

// import EnhancedTable from "./paginationTable";
const Content = () => {
  // let isEdit = useState(true);
  // const handleOpen = () => {
  //   console.log(isEdit);
  //   return (isEdit = !isEdit);
  // };

  return (
    <div className="main-content">
      <div className="center-content">
        <div className="table" />
        {/* <ContentTable isEdit="isEdit" handleOpen={handleOpen} /> */}
        <EditForm />
      </div>
    </div>
  );
};

export default Content;
