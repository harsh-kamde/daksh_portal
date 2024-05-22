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
    setMonthlyAttendanceData,
    setActualAttendanceData,
    setCourseData,
    setBatchData,
    role,
  } = useAuth();

  const district = localStorage.getItem("district")?.replace(/"/g, "");
  const userRole = localStorage.getItem("role")?.replace(/"/g, "");

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formattedData = {
      ...formData,
    };

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
        const { allAttendanceData, courseData, batchData } =
          await response.json();
        console.log("Actual Attendance Data : ", allAttendanceData);
        console.log("Course Data : ", courseData);
        console.log("Batch Data : ", batchData);

        setCourseData(courseData);
        setBatchData(batchData);
        setMonthlyAttendanceData(allAttendanceData);
        setActualAttendanceData(allAttendanceData);

        alert("Monthly Record Find Successful");
        navigate("/student-reports/month-wise-attendance-report/report");
      } else {
        alert("Data not found :)");
      }
    } catch (error) {
      alert("Server Error");
    } finally {
      // setIsLoading(false);
    }
  };

  const stateOptions = () => {
    if (userRole === "admin") {
      return (
        <>
          <Option value="Madhya Pradesh">Madhya Pradesh</Option>
          <Option value="Uttar Pradesh">Uttar Pradesh</Option>
        </>
      );
    } else {
      if (
        district === "Bhopal" ||
        district === "Raisen" ||
        district === "Morena" ||
        district === "Gwalior" ||
        district === "Bhind" ||
        district === "Khandwa"
      ) {
        return (
          <>
            <Option value="Madhya Pradesh">Madhya Pradesh</Option>
          </>
        );
      } else {
        return (
          <>
            <Option value="Uttar Pradesh">Uttar Pradesh</Option>
          </>
        );
      }
    }
  };

  const districtOptions = () => {
    if (formData.state === "Madhya Pradesh") {
      return userRole === "admin" ? (
        <>
          <Option value="Bhopal">Bhopal</Option>
          <Option value="Raisen">Raisen</Option>
          <Option value="Morena">Morena</Option>
          <Option value="Gwalior">Gwalior</Option>
          <Option value="Bhind">Bhind</Option>
          <Option value="Khandwa">Khandwa</Option>
        </>
      ) : (
        <>
          <Option value={district}>{district}</Option>
        </>
      );
    } else if (formData.state === "Uttar Pradesh") {
      return userRole === "admin" ? (
        <>
          <Option value="Farrukhabad">Farrukhabad</Option>
          <Option value="Moradabad">Moradabad</Option>
        </>
      ) : (
        <>
          <Option value={district}>{district}</Option>
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
          <Option value="Welder (GTAW)">Welder (GTAW)</Option>
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
          <Option value="Welder (GTAW)">Welder (GTAW)</Option>
        </>
      );
    } else if (formData.district === "Gwalior") {
      return (
        <>
          <Option value="Customer Care Executive">
            Customer Care Executive
          </Option>
          <Option value="Jute Products Stitching Operator">
            Jute Products Stitching Operator
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
          <Option value="Jute Products Stitching Operator">
            Jute Products Stitching Operator
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
    return (
      <Option value="Mathura Devi Shiksha Prasar Evam Samaj Kalyan Samiti">
        Mathura Devi Shiksha Prasar Evam Samaj Kalyan Samiti
      </Option>
    );
  };

  const batchOptions = () => {
    if (formData.district === "Bhopal" && formData.course === "Welder (GTAW)") {
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
    } else if (
      formData.district === "Khandwa" &&
      formData.course === "Jute Products Stitching Operator"
    ) {
      return (
        <>
          <Option value="005068">005068</Option>
          <Option value="005069">005069</Option>
          <Option value="005070">005070</Option>
        </>
      );
    } else if (
      formData.district === "Khandwa" &&
      formData.course === "Self Employed Tailor"
    ) {
      return (
        <>
          <Option value="005065">005065</Option>
          <Option value="005066">005066</Option>
          <Option value="005067">005067</Option>
        </>
      );
    } else if (
      formData.district === "Moradabad" &&
      formData.course === "Customer Care Executive"
    ) {
      return (
        <>
          <Option value="005139">005139</Option>
          <Option value="005140">005140</Option>
          <Option value="005142">005142</Option>
        </>
      );
    } else if (
      formData.district === "Moradabad" &&
      formData.course === "Account Executive"
    ) {
      return (
        <>
          <Option value="005137">005137</Option>
          <Option value="005138">005138</Option>
          <Option value="005141">005141</Option>
        </>
      );
    } else if (
      formData.district === "Morena" &&
      formData.course === "Welder (GTAW)"
    ) {
      return (
        <>
          <Option value="004229">004229</Option>
          <Option value="004230">004230</Option>
          <Option value="004231">004231</Option>
        </>
      );
    } else if (
      formData.district === "Morena" &&
      formData.course === "Self Employed Tailor"
    ) {
      return (
        <>
          <Option value="004226">004226</Option>
          <Option value="004227">004227</Option>
          <Option value="004228">004228</Option>
        </>
      );
    } else if (
      formData.district === "Morena" &&
      formData.course === "Customer Care Executive"
    ) {
      return (
        <>
          <Option value="004216">004216</Option>
          <Option value="004224">004224</Option>
          <Option value="004225">004225</Option>
        </>
      );
    } else if (
      formData.district === "Bhind" &&
      formData.course === "Self Employed Tailor"
    ) {
      return (
        <>
          <Option value="004547">004547</Option>
          <Option value="004553">004553</Option>
          <Option value="004694">004694</Option>
        </>
      );
    } else if (
      formData.district === "Bhind" &&
      formData.course === "Customer Care Executive"
    ) {
      return (
        <>
          <Option value="004561">004561</Option>
          <Option value="004565">004565</Option>
          <Option value="004680">004680</Option>
        </>
      );
    } else if (
      formData.district === "Farrukhabad" &&
      formData.course === "Customer Care Executive"
    ) {
      return (
        <>
          <Option value="004212">004212</Option>
          <Option value="004213">004213</Option>
          <Option value="004214">004214</Option>
        </>
      );
    } else if (
      formData.district === "Farrukhabad" &&
      formData.course === "Self Employed Tailor"
    ) {
      return (
        <>
          <Option value="004209">004209</Option>
          <Option value="004210">004210</Option>
          <Option value="004211">004211</Option>
        </>
      );
    } else if (
      formData.district === "Gwalior" &&
      formData.course === "Jute Products Stitching Operator"
    ) {
      return (
        <>
          <Option value="004257">004257</Option>
          <Option value="004258">004258</Option>
          <Option value="004260">004260</Option>
        </>
      );
    } else if (
      formData.district === "Gwalior" &&
      formData.course === "Customer Care Executive"
    ) {
      return (
        <>
          <Option value="004251">004251</Option>
          <Option value="004252">004252</Option>
          <Option value="004253">004253</Option>
        </>
      );
    } else if (
      formData.district === "Raisen" &&
      formData.course === "Customer Care Executive"
    ) {
      return (
        <>
          <Option value="004263">004263</Option>
          <Option value="003949">003949</Option>
          <Option value="003930">003930</Option>
        </>
      );
    } else if (
      formData.district === "Raisen" &&
      formData.course === "Self Employed Tailor"
    ) {
      return (
        <>
          <Option value="004262">004262</Option>
          <Option value="003948">003948</Option>
          <Option value="003929">003929</Option>
        </>
      );
    } else {
      return null;
    }
  };

  const batchTypeOptions = () => {
    if (
      formData.batch === "003970" ||
      formData.batch === "003672" ||
      formData.batch === "005068" ||
      formData.batch === "005065" ||
      formData.batch === "005140" ||
      formData.batch === "005137" ||
      formData.batch === "004229" ||
      formData.batch === "004226" ||
      formData.batch === "004216" ||
      formData.batch === "004561" ||
      formData.batch === "004553" ||
      formData.batch === "004212" ||
      formData.batch === "004209" ||
      formData.batch === "004258" ||
      formData.batch === "004252" ||
      formData.batch === "003930" ||
      formData.batch === "003929"
    ) {
      return (
        <>
          <Option value="OBC">OBC</Option>
        </>
      );
    } else if (
      formData.batch === "003922" ||
      formData.batch === "003921" ||
      formData.batch === "005070" ||
      formData.batch === "005067" ||
      formData.batch === "005142" ||
      formData.batch === "005141" ||
      formData.batch === "004231" ||
      formData.batch === "004227" ||
      formData.batch === "004225" ||
      formData.batch === "004694" ||
      formData.batch === "004680" ||
      formData.batch === "004213" ||
      formData.batch === "004210" ||
      formData.batch === "004257" ||
      formData.batch === "004251" ||
      formData.batch === "004263" ||
      formData.batch === "004262"
    ) {
      return (
        <>
          <Option value="SK">SK</Option>
        </>
      );
    } else if (
      formData.batch === "003920" ||
      formData.batch === "003919" ||
      formData.batch === "005069" ||
      formData.batch === "005066" ||
      formData.batch === "005139" ||
      formData.batch === "005138" ||
      formData.batch === "004230" ||
      formData.batch === "004228" ||
      formData.batch === "004224" ||
      formData.batch === "004565" ||
      formData.batch === "004547" ||
      formData.batch === "004214" ||
      formData.batch === "004211" ||
      formData.batch === "004260" ||
      formData.batch === "004253" ||
      formData.batch === "003949" ||
      formData.batch === "003948"
    ) {
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
                  {stateOptions()}
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
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MonthWiseAttendanceReport;
