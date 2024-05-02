import React, { useState } from "react";
import { Select } from "antd";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
import DashboardLayout from "../dashboard/DashboardLayout";
import "../../stylesheets/Form.css";
const URL = 'http://localhost:5009/api/v1/attendance/monthlyAttendance';

const { Option } = Select;

const MonthWiseAttendanceReport = () => {
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
  const { authorizationToken } = useAuth();

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
        alert("monthly Successful")

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
          <Option
            value="Customer Care Executive"
          >
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
                <label className="label-style">Center</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "center")}
                  placeholder="Center"
                  value={formData.center}
                >
                  <Option value="Center 1">Center 1</Option>
                  <Option value="Center 2">Center 2</Option>
                  <Option value="Center 3">Center 3</Option>
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
                <label className="label-style">Batch</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "batch")}
                  placeholder="Batch"
                  value={formData.batch}
                >
                  <Option value="Batch 1">Batch 1</Option>
                  <Option value="Batch 2">Batch 2</Option>
                  <Option value="Batch 3">Batch 3</Option>
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
                  <Option value="Batch Type 1">Batch Type 1</Option>
                  <Option value="Batch Type 2">Batch Type 2</Option>
                  <Option value="Batch Type 3">Batch Type 3</Option>
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
                  <Option value="January">January</Option>
                  <Option value="February">February</Option>
                  <Option value="March">March</Option>
                  <Option value="April">April</Option>
                  <Option value="May">May</Option>
                  <Option value="June">June</Option>
                  <Option value="July">July</Option>
                  <Option value="August">August</Option>
                  <Option value="September">September</Option>
                  <Option value="October">October</Option>
                  <Option value="November">November</Option>
                  <Option value="December">December</Option>
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
