import React, { useState } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../stylesheets/Form.css";

import { message } from "antd";
import moment from "moment";
import { DatePicker, Select } from "antd";

const EmployeeAttendanceReport = () => {
  const { register, handleSubmit } = useForm({});

  const [selectValue, setSelectValue] = useState({});

  const [date, setDate] = useState(null);

  const { Option } = Select;

  const handleChange = (value, name) => {
    setSelectValue({ ...selectValue, [name]: value });
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onSubmit = (data) => {
    const url = "";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <DashboardLayout>
      <div className="profile-setting" style={{ marginBottom: "10rem" }}>
        <div className="w-100 mb-3 rounded mb-5 p-2">
          <h5 className="text-title mb-5 mt-3">Select Location</h5>

          <form className="row form-row" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">PIA</label>
                <Select
                  defaultValue={"Select"}
                  className="dropdown"
                  onChange={(value) => handleChange(value, "pia")}
                  placeholder="PIA"
                >
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                  <Option value="option3">Option 3</Option>
                </Select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">State</label>
                <Select
                  defaultValue={"Select"}
                  className="dropdown"
                  onChange={(value) => handleChange(value, "state")}
                  placeholder="State"
                >
                  <Option value="mp">Madhya Pradesh</Option>
                </Select>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">Center</label>
                <Select
                  defaultValue={"Select"}
                  className="dropdown"
                  onChange={(value) => handleChange(value, "center")}
                  placeholder="Center"
                >
                  <Option value="center1">Center 1</Option>
                  <Option value="center2">Center 2</Option>
                  <Option value="center3">Center 3</Option>
                </Select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <DatePicker
                  placeholder="From"
                  onChange={onChange}
                  format={"YYYY-MM-DD"}
                  className="text-input-field date-picker"
                  style={{ marginTop: "14.5px", padding: "12px 16px" }}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <DatePicker
                  placeholder="To"
                  onChange={onChange}
                  format={"YYYY-MM-DD"}
                  className="text-input-field date-picker"
                  style={{ marginTop: "14.5px", padding: "12px 16px" }}
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-danger my-3">
                {"Show"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeAttendanceReport;
