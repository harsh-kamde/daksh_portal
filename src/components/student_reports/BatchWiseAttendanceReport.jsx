import React, { useState } from "react";
import { Select, DatePicker, Button } from "antd";
import DashboardLayout from "../dashboard/DashboardLayout";
import "../../stylesheets/Form.css";

const { Option } = Select;

const BatchWiseAttendanceReport = () => {
  const [formData, setFormData] = useState({
    pia: "Select PIA",
    state: "Select State",
    center: "Select Center",
    course: "Select Course",
    batch: "Select Batch",
    batchType: "Select Batch Type",
  });

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formattedData = {
      ...formData,
    };
    console.log(JSON.stringify(formattedData, null, 2));
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
                  <Option value="PIA 1">PIA 1</Option>
                  <Option value="PIA 2">PIA 2</Option>
                  <Option value="PIA 3">PIA 3</Option>
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
                  <Option value="Course 1">Course 1</Option>
                  <Option value="Course 2">Course 2</Option>
                  <Option value="Course 3">Course 3</Option>
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

            <div className="text-center">
              <button type="submit" className="btn my-3">
                {"Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BatchWiseAttendanceReport;
