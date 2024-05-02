import React from "react";
import "../../stylesheets/Header.css";
const dataCenter = localStorage.getItem("center_data");
const Header = () => {
  return (
    <>
      <header id="header" className="fixed-top navbar">
        {console.log(dataCenter)}
        PM-DAKSH {dataCenter}
      </header>
    </>
  );
};

export default Header;
