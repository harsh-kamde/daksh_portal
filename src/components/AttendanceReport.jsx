import React from "react";
import "../stylesheets/AttendanceReport.css";
import AttendanceReportCard from "./AttendanceReportCard";
import Header from "../components/common/Header";
import { Button } from "antd";
import { useAuth } from "../store/auth";

const dataCenter = JSON.parse(localStorage.getItem("center_data"));

const AttendanceReport = () => {

  const batch_details = localStorage.getItem("batch");

  const {
    authorizationToken,
    monthlyAttendanceData,
    setMonthlyAttendanceData,
    batchData,
    studentData,
    setStudentData,
    courseData,
    setCourseData
  } = useAuth();

  console.log("student ka data le lo : ", studentData);
  console.log("course ka data le lo : ", courseData);

  return (
    <>
      <Header />
      <div className="print-btn" style={{ marginTop: "5rem" }}>
        <Button
          type="primary"
          onClick={() => {
            window.print();
          }}
        >
          Print
        </Button>
      </div>

      <div className="report-header">
        <h5 className="name">PM DAKSH</h5>

        <div className="report-data">
          <h5>{dataCenter.center_name}</h5>
          <h5>{dataCenter.district}</h5>
          <h5>{dataCenter.state}</h5>
        </div>

        <div className="report-data">
          <p>
            {courseData.length > 0 ? courseData[0].course_name : "Loading..."}
          </p>
          {courseData.length > 0 ? courseData[0].course_name : "Loading..."}
          {/* <p>{batchData.length > 0 ? batchData.batch_name : "Loading..."}</p> */}
          {/* <p>Month-Year</p> */}
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
