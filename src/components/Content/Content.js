import React from "react";
import "./Content.css";
import Button from "@material-ui/core/Button";
import ContentTable from "./Table";
// import EnhancedTable from "./paginationTable";
const Content = () => {
  return (
    <div className="main-content">
      <div className="center-content">
        <div className="title">
          <h3 className="title-text">CAMPAIGNS</h3>
          <span>
            <Button variant="contained" color="primary">
              +CREATE NEW
            </Button>
          </span>
        </div>
        <div className="table" />
        {/* <EnhancedTable /> */}
        <ContentTable />
      </div>
    </div>
  );
};

export default Content;
