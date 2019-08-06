import React from "react";
import Button from "@material-ui/core/Button";

const TableTitle = props => {
  console.log("this is isedit from TableTitle:" + props);
  return (
    <div className="title">
      <h3 className="title-text">CAMPAIGNS</h3>
      <Button
        variant="contained"
        color="primary"
        disabled={!props.isEdit}
        onClick={props.handleOpen}
      >
        +CREATE NEW
      </Button>
    </div>
  );
};

export default TableTitle;
