import React, {useState, useEffect} from "react";
import DashboardLayout from "./dashboard/DashboardLayout";
import "../stylesheets/Home.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../store/apiurl";

const Home = () => {
  const navigate = useNavigate();

  const authorizationToken = localStorage.getItem("token");


  if (!authorizationToken) {
    navigate("/");
  }

  
  const [studentCount, setStudentCount] = useState(0);
  const [centerCount, setCenterCount] = useState(0);
  const [batchCount, setBatchCount] = useState(0);
  
  console.log(authorizationToken);
  console.log("Student count: ", studentCount);
  console.log("Center count: ", centerCount);
  console.log("Batch count: ", batchCount);

  const fetchCounts = async () => {
    try {
      // Fetch student count
      const studentResponse = await fetch(`${API_URL}/api/v1/student/student`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const studentData = await studentResponse.json();

      const uniqueStudentNames = studentData.reduce((acc, curr) => {
        if (!acc.includes(curr.user_id)) {
          acc.push(curr.user_id);
        }
        return acc;
      }, []);

      console.log("Student Data: ", studentData);
      
      setStudentCount(uniqueStudentNames.length);

      // Fetch batch count
      const batchResponse = await fetch(`${API_URL}/api/v1/batch/batches`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const batchData = await batchResponse.json();
      console.log("Batch Data is : ", batchData);
      console.log("Batch Data: ", batchData);

      const uniqueBatchNames = batchData.reduce((acc, curr) => {
        if (!acc.includes(curr.batch_name)) {
          acc.push(curr.batch_name);
        }
        return acc;
      }, []);

      setBatchCount(uniqueBatchNames.length);

      // Fetch center count
      const centerResponse = await fetch(`${API_URL}/api/v1/center/center`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const centerData = await centerResponse.json();

      const uniqueCenterNames = centerData.reduce((acc, curr) => {
        if (!acc.includes(curr.center_name)) {
          acc.push(curr.center_name);
        }
        return acc;
      }, []);

      console.log("Center Data: ", centerData);

      setCenterCount(uniqueCenterNames.length);
    } catch (error) {
      console.error("Error fetching counts:", error);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  return (
    <>
      <DashboardLayout>
        <div className="row mt-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon">
                <i class="fa-solid fa-school"></i>
              </span>

              <h3 className="info-count">{studentCount}</h3>

              <p className="info-label">Total Students</p>

              {/* <Button type="primary" size="medium">
                View
              </Button> */}
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon">
                <i class="fa-solid fa-book-open-reader"></i>
              </span>

              <h3 className="info-count">{batchCount}</h3>

              <p className="info-label">Total Batches Registered</p>

              {/* <Button type="primary" size="medium">
                View
              </Button> */}
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
            <div className="info-card">
              <span className="info-icon">
                <i class="fa-solid fa-check"></i>
              </span>

              <h3 className="info-count">{centerCount}</h3>

              <p className="info-label">Total Centers</p>

              {/* <Button type="primary" size="medium">
                View
              </Button> */}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Home;
