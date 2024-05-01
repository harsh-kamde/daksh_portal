import React, { useState } from "react";
import { Select } from "antd";
import DashboardLayout from "../dashboard/DashboardLayout";
import "../../stylesheets/Form.css";

const { Option } = Select;

const FacultyMaster = () => {
  const [formData, setFormData] = useState({
    pia: "Select PIA",
    state: "Select State",
    center: "Select Center",
    biometricID: "",
    facultyName: "",
    fatherName: "",
    address: "",
    status: "Select Status",
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
          <h5 className="text-title mb-5 mt-3">Faculty Head Details</h5>

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
                  <Option value="PIH 1">PIH 1</Option>
                  <Option value="PIH 2">PIH 2</Option>
                  <Option value="PIH 3">PIH 3</Option>
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

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Biometric ID <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="9 Digit Biometric ID"
                  className="text-input-field"
                  value={formData.biometricID}
                  onChange={(e) => handleChange(e.target.value, "biometricID")}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Faculty Name <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Faculty Name"
                  className="text-input-field"
                  value={formData.facultyName}
                  onChange={(e) => handleChange(e.target.value, "facultyName")}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Father Name <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Father Name"
                  className="text-input-field"
                  value={formData.fatherName}
                  onChange={(e) => handleChange(e.target.value, "fatherName")}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Address <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Address"
                  className="text-input-field"
                  value={formData.address}
                  onChange={(e) => handleChange(e.target.value, "address")}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group mb-2 card-label">
                <label className="label-style">Status</label>
                <Select
                  className="dropdown"
                  onChange={(value) => handleChange(value, "status")}
                  placeholder="Select Status"
                  value={formData.status}
                >
                  <Option value="Active">Active</Option>
                  <Option value="De-Active">De-Active</Option>
                </Select>
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

export default FacultyMaster;
