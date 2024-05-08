import React, { useState, useEffect } from "react";
import "../../stylesheets/Header.css";

const Header = () => {
  const [dataCenter, setDataCenter] = useState({});

  useEffect(() => {
    const centerData = JSON.parse(localStorage.getItem("center_data")) || {};
    setDataCenter(centerData);
  }, []);

  return (
    <>
      <header id="header" className="fixed-top navbar">
        <h3>PM-DAKSH</h3>
        <h3 className="center-name">
          {dataCenter.center_name ? dataCenter.center_name : ""},{" "}
          {dataCenter.state ? dataCenter.state : ""}
        </h3>
      </header>
    </>
  );
};

export default Header;
