import React, { useState } from "react";
import "./Content.css";

import ContentTable from "../table/Table";
import EditForm from "./EditForm.jsx";
import Button from "@material-ui/core/Button";

// import EnhancedTable from "./paginationTable";
const Content = () => {
  let isEdit = useState(false);
  const handleOpen = () => {
    console.log(isEdit);
    return (isEdit = !isEdit);
  };

  return (
    <div className="main-content">
      <div className="center-content">
        <div className="title">
          <h3 className="title-text">CAMPAIGNS</h3>
          <Button
            variant="contained"
            color="primary"
            disabled={!isEdit}
            onClick={handleOpen}
          >
            +CREATE NEW
          </Button>
        </div>
        <div className="table" />
        <EditForm />
        {/* {!isEdit ? <ContentTable /> : <EditForm />} */}
        {/* if(isEdit === true){
        return <EditForm />
      }else{
        return <ContentTable />
      } */}
      </div>
    </div>
  );
};

export default Content;
