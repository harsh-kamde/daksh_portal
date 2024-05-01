import React from "react";
import "../stylesheets/AttendanceReport.css";
import AttendanceReportCard from "./AttendanceReportCard";
import Header from "../components/common/Header";
import { Button } from "antd";

const AttendanceReport = () => {
  return (
    <>
      <Header />
      <div className="print-btn" style={{ marginTop: "5rem" }}>
        <Button type="primary" onClick={() => {window.print()}}>Print</Button>
      </div>

      <div className="report-header">
        <h5 className="name">PM DAKSH</h5>

        <div className="report-data">
          <h5>Mathura Devi Shiksha Prasar Evam Samaj Kalyan Samiti</h5>
          <h5>District</h5>
          <h5>State</h5>
        </div>

        <div className="report-data">
          <p>Course Name</p>
          <p>Batch Id</p>
          <p>Month-Year</p>
        </div>
      </div>
      <AttendanceReportCard />
      <AttendanceReportCard />
      <AttendanceReportCard />
      <AttendanceReportCard />
      <AttendanceReportCard />
      <AttendanceReportCard />
    </>
  );
};

export default AttendanceReport;
