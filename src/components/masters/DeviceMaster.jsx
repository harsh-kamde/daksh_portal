import React, { useState } from "react";
import { Select, DatePicker, Button } from "antd";
import DashboardLayout from "../dashboard/DashboardLayout";
import "../../stylesheets/Form.css";

const { Option } = Select;

const DeviceMaster = () => {
  const [formData, setFormData] = useState({
    pia: "Select PIA",
    state: "Select State",
    center: "Select Center",
    deviceName: "",
    deviceSerialNo: "",
    ipAddress: "",
    transactionStamp: "",
    opStamp: "",
    timeZone: "",
    gpsDeviceSerial: "",
    hostel: "",
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
          <h5 className="text-title mb-5 mt-3">Device Head Details</h5>

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
                <label className="label-style">Select Center</label>
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
                <label className="label-style">
                  Device Name <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Device Name"
                  className="text-input-field"
                  value={formData.deviceName}
                  onChange={(e) => handleChange(e.target.value, "deviceName")}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Device Serial Number <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Device Serial Number"
                  className="text-input-field"
                  value={formData.deviceSerialNo}
                  onChange={(e) =>
                    handleChange(e.target.value, "deviceSerialNo")
                  }
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  IP Address <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="IP Address"
                  className="text-input-field"
                  value={formData.ipAddress}
                  onChange={(e) => handleChange(e.target.value, "ipAddress")}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Transaction Stamp <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Transaction Stamp"
                  className="text-input-field"
                  value={formData.transactionStamp}
                  onChange={(e) =>
                    handleChange(e.target.value, "transactionStamp")
                  }
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Op Stamp <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Op Stamp"
                  className="text-input-field"
                  value={formData.opStamp}
                  onChange={(e) => handleChange(e.target.value, "opStamp")}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Time Zone <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Time Zone"
                  className="text-input-field"
                  value={formData.timeZone}
                  onChange={(e) => handleChange(e.target.value, "timeZone")}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  GPS Device Serial <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="GPS Device Serial"
                  className="text-input-field"
                  value={formData.gpsDeviceSerial}
                  onChange={(e) =>
                    handleChange(e.target.value, "gpsDeviceSerial")
                  }
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-2 card-label">
                <label className="label-style">
                  Hostel/Center <span className="text-danger">*</span>
                </label>
                <input
                  placeholder="Hostel/Center"
                  className="text-input-field"
                  value={formData.hostel}
                  onChange={(e) => handleChange(e.target.value, "hostel")}
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-danger my-3">
                {"Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DeviceMaster;
