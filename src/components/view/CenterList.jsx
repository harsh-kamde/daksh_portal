import React, { useState, useEffect } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import { API_URL } from "../../store/apiurl";

const CenterList = () => {
  const authorizationToken = localStorage.getItem("token");
  const [uniqueCenterData, setUniqueCenterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const centerResponse = await fetch(`${API_URL}/api/v1/center/center`, {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        });
        const centerData = await centerResponse.json();

        const uniqueNames = [];
        const uniqueData = centerData.reduce((acc, curr) => {
          if (!uniqueNames.includes(curr.center_name)) {
            uniqueNames.push(curr.center_name);
            acc.push(curr);
          }
          return acc;
        }, []);

        setUniqueCenterData(uniqueData);
        console.log("Unique center data: ", uniqueData);
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
                Center Name
              </th>
              <th scope="col" className="time">
                State
              </th>
              <th scope="col" className="time">
                District
              </th>
              <th scope="col" className="time">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {uniqueCenterData.map((item, index) => (
              <tr key={index}>
                <td>{item.center_name}</td>
                <td>{item.state}</td>
                <td>{item.district}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default CenterList;
