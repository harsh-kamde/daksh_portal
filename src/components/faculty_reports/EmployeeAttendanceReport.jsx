import React, { useState } from "react";
import { Select, DatePicker, Button } from "antd";
import DashboardLayout from "../dashboard/DashboardLayout";
import "../../stylesheets/Form.css";


const { Option } = Select;

const EmployeeAttendanceReport = () => {
  const [formData, setFormData] = useState({
    pia: "",
    state: "",
    center: "",
    from: undefined,
    to: undefined,
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
      from: formData.from ? formData.from.format("YYYY-MM-DD") : null,
      to: formData.to ? formData.to.format("YYYY-MM-DD") : null,
    };
    console.log(JSON.stringify(formattedData, null, 2));
  };

  return (
    <DashboardLayout>
      <div className="profile-setting" style={{ marginBottom: "10rem" }}>
        <div className="w-100 mb-3 rounded mb-5 p-2">
          <h5 className="text-title mb-5 mt-3">Select Location</h5>

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
                  <Option value="mp">Madhya Pradesh</Option>
                </Select>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">Center</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "center")}
                  placeholder="Center"
                  value={formData.center}
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
                  onChange={(date) => handleDateChange(date, "from")}
                  format="YYYY-MM-DD"
                  className="text-input-field date-picker"
                  style={{ marginTop: "14.5px", padding: "12px 16px" }}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <DatePicker
                  placeholder="To"
                  onChange={(date) => handleDateChange(date, "to")}
                  format="YYYY-MM-DD"
                  className="text-input-field date-picker"
                  style={{ marginTop: "14.5px", padding: "12px 16px" }}
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-danger my-3">
                {"Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeAttendanceReport;
