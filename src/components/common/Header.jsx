import React from "react";
import "../../stylesheets/Header.css";
const dataCenter = JSON.parse(localStorage.getItem("center_data"));
const Header = () => {
  return (
    <>
      <header id="header" className="fixed-top navbar">
        <h3>PM-DAKSH</h3>
        <h3 className="center-name">
          {dataCenter.center_name && dataCenter.center_name},{" "}
          {dataCenter.state && dataCenter.state}
        </h3>
      </header>
    </>
  );
};

export default Header;
