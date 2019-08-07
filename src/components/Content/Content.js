import React from "react";
import "./content.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContentTable from "../table/table";
import EditForm from "../edit/editForm";

const Content = () => {
  return (
    <Router>
      <div className="main-content">
        <div className="center-content">
          <div className="table" />
          <Route exact path="/" component={ContentTable} />
          <Route exact path="/editForm" component={EditForm} />
          <Link to="editForm">EditForm</Link>

          {/* <EditForm /> */}
        </div>
      </div>
    </Router>
  );
};

export default Content;
