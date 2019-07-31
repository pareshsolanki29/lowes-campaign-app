import React from "react";
import "./AppNav.css";
import AccountBox from "@material-ui/icons/AccountBox";
import TransferWithinAStation from "@material-ui/icons/TransferWithinAStation";

// import MaterialIcon from "@material/react-material-icon";

const AppNav = () => {
  const options = ["Campaigns", "Workspaces", "TBD", "TBD"];
  return (
    <div className="AppNav">
      <img
        className="logo"
        src="data:image/png;base64,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"
        alt="lowes logo"
      />
      <h1 className="logo_text">PERSONALIZATION</h1>

      <ul className="entry">
        {options.map((value, index) => {
          return (
            <li className="ele" key={index}>
              {value}
            </li>
          );
        })}
      </ul>
      <div className="user-info">
        <AccountBox />
        <h6>Your Name</h6>

        <TransferWithinAStation />
        <h6>Log Out</h6>
      </div>
    </div>
  );
};

export default AppNav;
