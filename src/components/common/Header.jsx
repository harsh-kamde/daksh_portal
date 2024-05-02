import React from "react";
import "../../stylesheets/Header.css";
const dataCenter = JSON.parse(localStorage.getItem("center_data"));
const Header = () => {
  return (
    <>
      <header id="header" className="fixed-top navbar">
        {console.log(dataCenter)}
        PM-DAKSH ({dataCenter.center_name}) | {dataCenter.district} | {dataCenter.state}
      </header>
    </>
  );
};

export default Header;
