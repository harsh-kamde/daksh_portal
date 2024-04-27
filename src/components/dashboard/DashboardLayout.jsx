import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import Header from "../common/Header";
import Footer from "../common/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />

      <div
        className="container-fluid"
        style={{ marginTop: 80, marginBottom: 50, minHeight: '75vh' }}
      >
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-3">
            <DashboardSidebar />
          </div>
          <div className="col-md-8 col-lg-8 col-xl-9">{children}</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardLayout;
