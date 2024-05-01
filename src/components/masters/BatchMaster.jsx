import React, { useState } from "react";
import { Select, DatePicker, Button } from "antd";
import DashboardLayout from "../dashboard/DashboardLayout";
import "../../stylesheets/Form.css";

const { Option } = Select;

const BatchMaster = () => {
  const [formData, setFormData] = useState({
    pia: "Select PIA",
    state: "Select State",
    center: "Select Center",
    course: "Select Course",
    batchName: "",
    batchPeriodHours: "",
    batchStatus: "Batch Status",
    batchType: "Batch Type",
    startDate: undefined,
    endDate: undefined,
  });

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date, name) => {
    setFormData({ ...formData, [name]: date });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formattedData = {
      ...formData,
      startDate: formData.startDate
        ? formData.startDate.format("YYYY-MM-DD")
        : null,
      endDate: formData.endDate ? formData.endDate.format("YYYY-MM-DD") : null,
    };
    console.log(JSON.stringify(formattedData, null, 2));
  };

  return (
    <DashboardLayout>
      <div className="profile-setting" style={{ marginBottom: "10rem" }}>
        <div className="w-100 mb-3 rounded mb-5 p-2">
          <h5 className="text-title mb-5 mt-3">Batch Master</h5>

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
                  className="dropdown"
                  onChange={(value) => handleChange(value, "state")}
                  placeholder="State"
                  value={formData.state}
                >
                  <Option value="Madhya Pradesh">Madhya Pradesh</Option>
                </Select>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">Center</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "center")}
                  placeholder="Select Center"
                  value={formData.center}
                >
                  <Option value="Center 1">Center 1</Option>
                  <Option value="Center 2">Center 2</Option>
                  <Option value="Center 3">Center 3</Option>
                </Select>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">Course</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "course")}
                  placeholder="Select Course"
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
                <label className="label-style">
                  Batch Name <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Batch Name"
                  className="text-input-field"
                  value={formData.batchName}
                  onChange={(e) => handleChange(e.target.value, "batchName")}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Batch Period Hours <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Batch Period Hours"
                  className="text-input-field"
                  value={formData.batchPeriodHours}
                  onChange={(e) =>
                    handleChange(e.target.value, "batchPeriodHours")
                  }
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">Batch Status</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "batchStatus")}
                  placeholder="Batch Status"
                  value={formData.batchStatus}
                >
                  <Option value="Batch Status 1">Batch Status 1</Option>
                  <Option value="Batch Status 2">Batch Status 2</Option>
                  <Option value="Batch Status 3">Batch Status 3</Option>
                </Select>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">Batch Type</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "batchType")}
                  placeholder="Batch Status"
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
                <DatePicker
                  placeholder="Start Date"
                  onChange={(date) => handleDateChange(date, "startDate")}
                  format="YYYY-MM-DD"
                  className="text-input-field date-picker"
                  style={{ marginTop: "14.5px", padding: "12px 16px" }}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <DatePicker
                  placeholder="End Date"
                  onChange={(date) => handleDateChange(date, "endDate")}
                  format="YYYY-MM-DD"
                  className="text-input-field date-picker"
                  style={{ marginTop: "14.5px", padding: "12px 16px" }}
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn my-3">
                {"Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BatchMaster;
