import React, { useState, useEffect } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import { API_URL } from "../../store/apiurl";

const FacultyList = () => {
  const authorizationToken = localStorage.getItem("token");
  const [uniqueFacultyData, setUniqueFacultyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const facultyResponse = await fetch(
          `${API_URL}/api/v1/faculty/faculty`,
          {
            method: "GET",
            headers: {
              Authorization: authorizationToken,
            },
          }
        );
        const facultyData = await facultyResponse.json();

        const uniqueId = [];
        const uniqueData = facultyData.reduce((acc, curr) => {
          if (!uniqueId.includes(curr._id)) {
            uniqueId.push(curr._id);
            acc.push(curr);
          }
          return acc;
        }, []);

        setUniqueFacultyData(uniqueData);
        console.log("Unique faculty data: ", uniqueData);
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
                Faculty Name
              </th>
              <th scope="col" className="time">
                Age
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
            {uniqueFacultyData.map((item, index) => (
              <tr key={index}>
                <td>{item.faculty_name}</td>
                <td>{item.age}</td>
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

export default FacultyList;
