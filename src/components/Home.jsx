import React from "react";
import DashboardLayout from "./dashboard/DashboardLayout";
import "../stylesheets/Home.css";
import { Button } from "antd";

const Home = () => {
  return (
    <>
      <DashboardLayout>
        <div className="row mt-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon first-icon">
                <i class="fa-solid fa-school"></i>
              </span>

              <h3 className="info-count">{"0"}</h3>

              <p className="info-label">Total PIA's Registered</p>

              <Button type="primary" size="medium" className="btn-1">
                View
              </Button>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon second-icon">
                <i class="fa-solid fa-book-open-reader"></i>
              </span>

              <h3 className="info-count">{"0"}</h3>

              <p className="info-label">Total Batches Registered</p>

              <Button type="primary" size="medium" className="btn-2">
                View
              </Button>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon third-icon">
                <i class="fa-solid fa-check"></i>
              </span>

              <h3 className="info-count">{"0"}</h3>

              <p className="info-label">Total Batches Pending For Approval</p>

              <Button type="primary" size="medium" className="btn-3">
                View
              </Button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Home;
