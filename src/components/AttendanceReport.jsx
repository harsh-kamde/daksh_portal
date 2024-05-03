import React from "react";
import "../stylesheets/AttendanceReport.css";
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
    setCourseData,
    actualAttendanceData,
  } = useAuth();

  console.log("student ka data le lo : ", studentData);
  console.log("course ka data le lo : ", courseData);
  console.log("My actual attendance data is : ", actualAttendanceData);

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
          
          {/* <p>{batchData.length > 0 ? batchData.batch_name : "Loading..."}</p> */}
          {/* <p>Month-Year</p> */}
        </div>
      </div>

      {actualAttendanceData && actualAttendanceData.map((item) => {
        return (
          <>
            <div className="report">
              <div className="traineeDetail">
                <h3>Trainee Name:</h3>
                <h3>{item.student.length > 0 && item.student[0].student_name}</h3>
              </div>

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="time">
                        Time
                      </th>
                      {[...Array(31)].map((_, i) => (
                        <th key={i + 1} scope="col" className="time">
                          {i + 1}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="time">
                        In
                      </th>
                      {item.attendance.map((item, index) => (
                        <td
                          key={index}
                          style={{
                            color: item.inTime ? "var(--textColor)" : "red",
                          }}
                          className="time"
                        >
                          {item.inTime ? item.inTime : "*"}
                        </td>
                      ))}
                    </tr>

                    <tr>
                      <th scope="row" className="time">
                        Out
                      </th>
                      {item.attendance.map((item, index) => (
                        <td
                          key={index}
                          style={{
                            color: item.outTime ? "var(--textColor)" : "red",
                          }}
                          className="time"
                        >
                          {item.outTime ? item.outTime : "*"}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default AttendanceReport;
