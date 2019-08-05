import React from "react";
import "./Content.css";
import CreateCampaign from "./createForm";
import ContentTable from "../table/Table";

import { makeStyles } from "@material-ui/core/styles";

// import EnhancedTable from "./paginationTable";
const Content = () => {
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  const useStyles = makeStyles(theme => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 4),
      outline: "none"
    }
  }));
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="main-content">
      <div className="center-content">
        <div className="title">
          <h3 className="title-text">CAMPAIGNS</h3>
          <CreateCampaign />

          {/* <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2 id="modal-title">Text in a modal</h2>
              <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              <Content />
            </div>
          </Modal> */}
        </div>
        <div className="table" />
        {/* <EnhancedTable /> */}
        <ContentTable />
      </div>
    </div>
  );
};

export default Content;
