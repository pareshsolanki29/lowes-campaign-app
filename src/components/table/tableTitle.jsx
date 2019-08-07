import React from "react";
import Button from "@material-ui/core/Button";

const TableTitle = props => {
  console.log("this is isedit from TableTitle:" + props);
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
        disabled={!props.isEdit}
        onClick={props.handleOpen}
      >
        +CREATE NEW
      </Button>
    </div>
  );
};

export default TableTitle;
