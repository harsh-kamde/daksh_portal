import React from "react";
import "../stylesheets/AttendanceReport.css";
import { useAuth } from "../store/auth";

const AttendanceReportCard = () => {
    const {
      authorizationToken,
      monthlyAttendanceData,
      setMonthlyAttendanceData,
      batchData
    } = useAuth();

    // const data = monthlyAttendanceData ? JSON.parse(monthlyAttendanceData) : [];

    
  return (
    <div className="report">
      <div className="traineeDetail">
        <h3>Trainee Name:</h3>
        <h3>Trainee Name</h3>
      </div>

      {console.log("Ha bhai me hu: " + JSON.stringify(monthlyAttendanceData))}
      {/* {console.log("My data: " + data)} */}

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">1</th>
              <th scope="col">2</th>
              <th scope="col">3</th>
              <th scope="col">4</th>
              <th scope="col">5</th>
              <th scope="col">6</th>
              <th scope="col">7</th>
              <th scope="col">8</th>
              <th scope="col">9</th>
              <th scope="col">10</th>
              <th scope="col">11</th>
              <th scope="col">12</th>
              <th scope="col">13</th>
              <th scope="col">14</th>
              <th scope="col">15</th>
              <th scope="col">16</th>
              <th scope="col">17</th>
              <th scope="col">18</th>
              <th scope="col">19</th>
              <th scope="col">20</th>
              <th scope="col">21</th>
              <th scope="col">22</th>
              <th scope="col">23</th>
              <th scope="col">24</th>
              <th scope="col">25</th>
              <th scope="col">26</th>
              <th scope="col">27</th>
              <th scope="col">28</th>
              <th scope="col">29</th>
              <th scope="col">30</th>
              <th scope="col">31</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">In</th>
              {monthlyAttendanceData &&
                monthlyAttendanceData.attendanceData.map((item, index) => {
                  return (
                    <>
                      <td
                        key={index}
                        style={{
                          color: item.inTime ? "var(--textColor)" : "red",
                        }}
                      >
                        {item.inTime ? item.inTime : "*"}
                      </td>
                    </>
                  );
                })}
            </tr>

            <tr>
              <th scope="row">Out</th>
              {monthlyAttendanceData &&
                monthlyAttendanceData.attendanceData.map((item, index) => {
                  return (
                    <>
                      <td key={index} style={{ color: item.outTime ? "var(--textColor)" : "red"}}>
                        {item.outTime ? item.outTime : "*"}
                      </td>
                    </>
                  );
                })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceReportCard;
