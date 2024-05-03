import React, { useState, useEffect } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import { API_URL } from "../../store/apiurl";

const BatchList = () => {
  const authorizationToken = localStorage.getItem("token");
  const [uniqueBatchData, setUniqueBatchData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const batchResponse = await fetch(`${API_URL}/api/v1/batch/batches`, {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        });
        const batchData = await batchResponse.json();

        const uniqueNames = [];
        const uniqueData = batchData.reduce((acc, curr) => {
          if (!uniqueNames.includes(curr.batch_name)) {
            uniqueNames.push(curr.batch_name);
            acc.push(curr);
          }
          return acc;
        }, []);

        setUniqueBatchData(uniqueData);
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
                Batch Name
              </th>
              <th scope="col" className="time">
                Batch Time
              </th>
              <th scope="col" className="time">
                Start Date
              </th>
              <th scope="col" className="time">
                End Date
              </th>
              <th scope="col" className="time">
                Batch Type
              </th>
            </tr>
          </thead>
          <tbody>
            {uniqueBatchData.map((item, index) => (
              <tr key={index}>
                <td>{item.batch_name}</td>
                <td>{item.batch_time}</td>
                <td>{item.start_date}</td>
                <td>{item.end_date}</td>
                <td>{item.batch_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default BatchList;
