import React, { useState, useEffect } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import { API_URL } from "../../store/apiurl";

const CourseList = () => {
  const authorizationToken = localStorage.getItem("token");
  const [uniqueCourseData, setUniqueCourseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseResponse = await fetch(`${API_URL}/api/v1/course/course`, {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        });
        const courseData = await courseResponse.json();

        const uniqueNames = [];
        const uniqueData = courseData.reduce((acc, curr) => {
          if (!uniqueNames.includes(curr.course_name)) {
            uniqueNames.push(curr.course_name);
            acc.push(curr);
          }
          return acc;
        }, []);

        setUniqueCourseData(uniqueData);
        console.log("Unique course data: ", uniqueData);
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
                Course Name
              </th>
              <th scope="col" className="time">
                Batch ID
              </th>
              <th scope="col" className="time">
                Start Date
              </th>
              <th scope="col" className="time">
                End Date
              </th>
            </tr>
          </thead>
          <tbody>
            {uniqueCourseData.map((item, index) => (
              <tr key={index}>
                <td>{item.course_name}</td>
                <td>{item.batch_id}</td>
                <td>{item.start_date}</td>
                <td>{item.end_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default CourseList;
