import React, { useState } from "react";
import { Select, DatePicker, Button } from "antd";
import DashboardLayout from "../dashboard/DashboardLayout";
import "../../stylesheets/Form.css";

const { Option } = Select;

const CenterMaster = () => {
  const [formData, setFormData] = useState({
    pia: "Select PIA",
    state: "Select State",
    centerName: "",
    address: "",
    scheme: "PM Daksh",
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
          <h5 className="text-title mb-5 mt-3">Center Details</h5>

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

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Device Name <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Center Name"
                  className="text-input-field"
                  value={formData.centerName}
                  onChange={(e) => handleChange(e.target.value, "centerName")}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Address <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Device Serial Number"
                  className="text-input-field"
                  value={formData.address}
                  onChange={(e) => handleChange(e.target.value, "address")}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Scheme <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="IP Address"
                  className="text-input-field"
                  value={formData.scheme}
                  disabled
                  onChange={(e) => handleChange(e.target.value, "scheme")}
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

export default CenterMaster;
