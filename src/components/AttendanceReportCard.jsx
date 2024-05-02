import React, { useState, useEffect } from "react";
import "../stylesheets/AttendanceReport.css";
import { useAuth } from "../store/auth";


const AttendanceReportCard = () => {
  const { monthlyAttendanceData } = useAuth();

  
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("monthlyAttendanceData");
    return savedData ? JSON.parse(savedData) : null;
  });

  

  console.log("The data is : ", JSON.stringify(monthlyAttendanceData));

  useEffect(() => {
    if (monthlyAttendanceData) {
      setData(monthlyAttendanceData);
      localStorage.setItem(
        "monthlyAttendanceData",
        JSON.stringify(monthlyAttendanceData)
      );
    }
  }, [monthlyAttendanceData]);

  return (
    <div className="report">
      <div className="traineeDetail">
        <h3>Trainee Name:</h3>
        <h3>Trainee Name</h3>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Time</th>
              {[...Array(31)].map((_, i) => (
                <th key={i + 1} scope="col">
                  {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">In</th>
              {monthlyAttendanceData &&
                monthlyAttendanceData.attendanceData.map((item, index) => (
                  <td
                    key={index}
                    style={{
                      color: item.inTime ? "var(--textColor)" : "red",
                    }}
                  >
                    {item.inTime ? item.inTime : "*"}
                  </td>
                ))}
            </tr>

            <tr>
              <th scope="row">Out</th>
              {monthlyAttendanceData &&
                monthlyAttendanceData.attendanceData.map((item, index) => (
                  <td
                    key={index}
                    style={{
                      color: item.outTime ? "var(--textColor)" : "red",
                    }}
                  >
                    {item.outTime ? item.outTime : "*"}
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceReportCard;
