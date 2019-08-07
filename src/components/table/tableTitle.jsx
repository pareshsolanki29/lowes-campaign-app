import React from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Link } from "react-router-dom";
import EditForm from "../edit/editForm";

const TableTitle = () => {
  return (
    <div className="title">
      <h3 className="title-text">CAMPAIGNS</h3>

      <Button
        style={{
          alignSelf: "flex-start",
          marginLeft: "18vw",
          backgroundColor: "#24a6c7",
          color: "white",
          paddingLeft: "2vw",
          paddingRight: "2vw",
          borderRadius: "0"
        }}
      >
        +CREATE NEW
      </Button>
    </div>
  );
};

export default TableTitle;
