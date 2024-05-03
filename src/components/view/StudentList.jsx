import React, { useState, useEffect } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import { API_URL } from "../../store/apiurl";

const StudentList = () => {
  const authorizationToken = localStorage.getItem("token");
  const [uniqueStudentData, setUniqueStudentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentResponse = await fetch(
          `${API_URL}/api/v1/student/student`,
          {
            method: "GET",
            headers: {
              Authorization: authorizationToken,
            },
          }
        );
        const studentData = await studentResponse.json();

        const uniqueId = [];
        const uniqueData = studentData.reduce((acc, curr) => {
          if (!uniqueId.includes(curr.user_id)) {
            uniqueId.push(curr.user_id);
            acc.push(curr);
          }
          return acc;
        }, []);

        setUniqueStudentData(uniqueData);
        console.log("Unique student data: ", uniqueData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [authorizationToken]);

  return (
    <DashboardLayout>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="time">
                Student Name
              </th>
              <th scope="col" className="time">
                Student Id
              </th>
              <th scope="col" className="time">
                Category
              </th>
              <th scope="col" className="time">
                City
              </th>
              <th scope="col" className="time">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {uniqueStudentData.map((item, index) => (
              <tr key={index}>
                <td>{item.student_name}</td>
                <td>{item.user_id}</td>
                <td>{item.category}</td>
                <td>{item.city}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default StudentList;
