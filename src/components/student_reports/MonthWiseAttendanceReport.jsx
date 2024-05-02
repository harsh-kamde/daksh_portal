import React, { useState } from "react";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import DashboardLayout from "../dashboard/DashboardLayout";
import "../../stylesheets/Form.css";
import { API_URL } from "../../store/apiurl";
const URL = `${API_URL}/api/v1/attendance/monthlyAttendance`;

const { Option } = Select;

const MonthWiseAttendanceReport = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pia: "Select PIA",
    state: "Select State",
    district: "Select District",
    center: "Select Center",
    course: "Select Course",
    batch: "Select Batch",
    batchType: "Select Batch Type",
    month: "Select Month",
  });
  const {
    authorizationToken,
    monthlyAttendanceData,
    setMonthlyAttendanceData,
    setBatchData
  } = useAuth();

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formattedData = {
      ...formData,
    };

    // e.preventDefault();
    // setIsLoading(true);
    // console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        const responseData = await response.json(); // Parse JSON response
        // Store responseData in state or variable
        console.log(responseData);
        // setData(responseData);
        setMonthlyAttendanceData(responseData);
        console.log("month wise data check: "+JSON.stringify(monthlyAttendanceData));
        console.log("month wise data check: "+monthlyAttendanceData);
        alert("monthly Successful")
        navigate("/student-reports/month-wise-attendance-report/report");

      } else {
        alert("Invalid credentials")
      }
    } catch (error) {
      alert("Server Error")

    } finally {
      // setIsLoading(false);
    }

    // console.log(JSON.stringify(formattedData, null, 2));
  };

  const districtOptions = () => {
    if (formData.state === "Madhya Pradesh") {
      return (
        <>
          <Option value="Bhopal">Bhopal</Option>
          <Option value="Raisen">Raisen</Option>
          <Option value="Morena">Morena</Option>
          <Option value="Gwaliar">Gwaliar</Option>
          <Option value="Bhind">Bhind</Option>
          <Option value="Khandwa">Khandwa</Option>
        </>
      );
    } else if (formData.state === "Uttar Pradesh") {
      return (
        <>
          <Option value="Farrukhabad">Farrukhabad</Option>
          <Option value="Moradabad">Moradabad</Option>
        </>
      );
    } else {
      return null;
    }
  };

  const courseOptions = () => {
    if (formData.district === "Bhopal") {
      return (
        <>
          <Option value="Welder ( GTAW)">Welder ( GTAW)</Option>
          <Option value="Customer Care Executive">
            Customer Care Executive
          </Option>
        </>
      );
    } else if (formData.district === "Raisen") {
      return (
        <>
          <Option value="Customer Care Executive">
            Customer Care Executive
          </Option>
          <Option value="Self Employed Tailor">Self Employed Tailor</Option>
        </>
      );
    } else if (formData.district === "Morena") {
      return (
        <>
          <Option value="Customer Care Executive">
            Customer Care Executive
          </Option>
          <Option value="Self Employed Tailor">Self Employed Tailor</Option>
          <Option value="Welder ( GTAW)">Welder ( GTAW)</Option>
        </>
      );
    } else if (formData.district === "Gwalior") {
      return (
        <>
          <Option value="Customer Care Executive">
            Customer Care Executive
          </Option>
          <Option value="Jute Products Stiching Operator">
            Jute Products Stiching Operator
          </Option>
        </>
      );
    } else if (formData.district === "Bhind") {
      return (
        <>
          <Option value="Customer Care Executive">
            Customer Care Executive
          </Option>
          <Option value="Self Employed Tailor">Self Employed Tailor</Option>
        </>
      );
    } else if (formData.district === "Khandwa") {
      return (
        <>
          <Option value="Jute Products Stiching Operator">
            Jute Products Stiching Operator
          </Option>
          <Option value="Self Employed Tailor">Self Employed Tailor</Option>
        </>
      );
    } else if (formData.district === "Farrukhabad") {
      return (
        <>
          <Option value="Customer Care Executive">
            Customer Care Executive
          </Option>
          <Option value="Self Employed Tailor">Self Employed Tailor</Option>
        </>
      );
    } else if (formData.district === "Moradabad") {
      return (
        <>
          <Option value="Customer Care Executive">
            Customer Care Executive
          </Option>
          <Option value="Account Executive">Account Executive</Option>
        </>
      );
    } else {
      return null;
    }
  };

  const centerOptions = () => {
    if (
      (formData.district === "Bhopal" &&
        formData.course === "Customer Care Executive") ||
      (formData.district === "Bhopal" && formData.course === "Welder ( GTAW)")
    ) {
      return (
        <>
          <Option value="Mathura Devi Shiksha Prasar Evam Samaj Kalyan Samiti Bhopal">
            Mathura Devi Shiksha Prasar Evam Samaj Kalyan Samiti Bhopal
          </Option>
        </>
      );
    } else {
      return null;
    }
  };

  const batchOptions = () => {
    if (
      formData.district === "Bhopal" &&
      formData.course === "Welder ( GTAW)"
    ) {
      return (
        <>
          <Option value="003970">003970</Option>
          <Option value="003922">003922</Option>
          <Option value="003920">003920</Option>
        </>
      );
    } else if (
      formData.district === "Bhopal" &&
      formData.course === "Customer Care Executive"
    ) {
      return (
        <>
          <Option value="003672">003672</Option>
          <Option value="003921">003921</Option>
          <Option value="003919">003919</Option>
        </>
      );
    } else {
      return null;
    }
  };

  const batchTypeOptions = () => {
    if (formData.batch === "003970" || formData.batch === "003672") {
      return (
        <>
          <Option value="OBC">OBC</Option>
        </>
      );
    } else if (formData.batch === "003922" || formData.batch === "003921") {
      return (
        <>
          <Option value="SK">SK</Option>
        </>
      );
    } else if (formData.batch === "003920" || formData.batch === "003919") {
      return (
        <>
          <Option value="SC">SC</Option>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="profile-setting" style={{ marginBottom: "10rem" }}>
        <div className="w-100 mb-3 rounded mb-5 p-2">
          <h5 className="text-title mb-5 mt-3">Select Batch</h5>

          <form className="row form-row" onSubmit={onSubmit}>
            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">PIA</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "pia")}
                  placeholder="PIA"
                  value={formData.pia}
                >
                  <Option value="Mathura Devi Shiksha Prasar Evam Samaj Kalyan Samiti">
                    Mathura Devi Shiksha Prasar Evam Samaj Kalyan Samiti
                  </Option>
                </Select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">State</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "state")}
                  placeholder="State"
                  value={formData.state}
                >
                  <Option value="Madhya Pradesh">Madhya Pradesh</Option>
                  <Option value="Uttar Pradesh">Uttar Pradesh</Option>
                </Select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">District</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "district")}
                  placeholder="District"
                  value={formData.district}
                >
                  {districtOptions()}
                </Select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">Course</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "course")}
                  placeholder="Course"
                  value={formData.course}
                >
                  {courseOptions()}
                </Select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">Center</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "center")}
                  placeholder="Center"
                  value={formData.center}
                >
                  {centerOptions()}
                </Select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">Batch</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "batch")}
                  placeholder="Batch"
                  value={formData.batch}
                >
                  {batchOptions()}
                </Select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">Batch Type</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "batchType")}
                  placeholder="Batch Type"
                  value={formData.batchType}
                >
                  {batchTypeOptions()}
                </Select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">Month</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "month")}
                  placeholder="Month"
                  value={formData.month}
                >
                  <Option value="December">December 2023</Option>
                  <Option value="January">January 2024</Option>
                  <Option value="February">February 2024</Option>
                  <Option value="March">March 2024</Option>
                  <Option value="April">April 2024</Option>
                  <Option value="May">May 2024</Option>
                  <Option value="June">June 2024</Option>
                </Select>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn my-3">
                {"Submit"}
              </button>

              {/* <NavLink
                className="btn my-3"
                to={"/student-reports/month-wise-attendance-report/report"}
              >
                Show Report
              </NavLink> */}
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MonthWiseAttendanceReport;
