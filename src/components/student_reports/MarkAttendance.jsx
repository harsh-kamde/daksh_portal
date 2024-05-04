import React, { useState } from "react";
import { Button } from "antd";
import { Input, DatePicker, Select } from "antd";
import "../../stylesheets/MarkAttendance.css";
import DashboardLayout from "../dashboard/DashboardLayout";
import moment from "moment";
import { useAuth } from "../../store/auth";
import { API_URL } from "../../store/apiurl";
import { Outlet } from "react-router-dom";
const attendance_url = `${API_URL}/api/v1/attendance/markAttendance`;
const student_url = `${API_URL}/api/v1/student/getEnrolledStudents`;

const { Option } = Select;

const MarkAttendance = () => {
  const centerData = localStorage.getItem("center_data");
  const data = JSON.parse(centerData);
  const district = data.district;

  const { courseData, authorizationToken } = useAuth();
  const [studentData, setStudentData] = useState();
  const [attendanceData, setAttendanceData] = useState({});

  console.log("District : ", district);
  console.log("Course Data : ", courseData);

  const [formData, setFormData] = useState({
    course: "Select Course",
    batch: "Select Batch",
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const inLat =
    district === "Bhopal"
      ? "23.259933"
      : (district === "Raisen") === "23.3303"
      ? district === "Morena"
        ? "26.5000000"
        : district === "Gwalior"
        ? "26.218287"
        : (district === "Bhind") === "26.558735"
      : "21.825733";

  const outLat =
    district === "Bhopal"
      ? "23.259933"
      : (district === "Raisen") === "23.3303"
      ? district === "Morena"
        ? "26.5000000"
        : district === "Gwalior"
        ? "26.218287"
        : (district === "Bhind") === "26.558735"
      : "21.825733";

  const inLong =
    district === "Bhopal"
      ? "77.412613"
      : (district === "Raisen") === "77.7811"
      ? district === "Morena"
        ? "78.000000"
        : district === "Gwalior"
        ? "78.182831"
        : (district === "Bhind") === "78.787280"
      : "76.352570";

  const outLong =
    district === "Bhopal"
      ? "77.412613"
      : (district === "Raisen") === "77.7811"
      ? district === "Morena"
        ? "78.000000"
        : district === "Gwalior"
        ? "78.182831"
        : (district === "Bhind") === "78.787280"
      : "76.352570";

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Selected Course:", formData.course);
    console.log("Selected Batch:", formData.batch);
    console.log("Selected Date:", selectedDate);
    const formattedData = {
      ...formData,
    };

    try {
      const response = await fetch(student_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        const students = await response.json();
        setStudentData(students);
        alert("Students Fetched Successfully!");
        console.log(students);
        console.log(studentData);
      } else {
        alert("Data not found :)");
      }
    } catch (error) {
      alert("Server Error");
    } finally {
      // setIsLoading(false);
    }
  };

  const disabledDate = (current) => {
    return current && current > moment().endOf("day");
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setSelectedDate(dateString);
  };

  const courseOptions = () => {
    if (district === "Bhopal") {
      return (
        <>
          <Option value="Welder (GTAW)">Welder (GTAW)</Option>
          <Option value="Customer Care Executive">
            Customer Care Executive
          </Option>
        </>
      );
    } else if (district === "Raisen") {
      return (
        <>
          <Option value="Customer Care Executive">
            Customer Care Executive
          </Option>
          <Option value="Self Employed Tailor">Self Employed Tailor</Option>
        </>
      );
    } else if (district === "Morena") {
      return (
        <>
          <Option value="Customer Care Executive">
            Customer Care Executive
          </Option>
          <Option value="Self Employed Tailor">Self Employed Tailor</Option>
          <Option value="Welder (GTAW)">Welder (GTAW)</Option>
        </>
      );
    } else if (district === "Gwalior") {
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
    } else if (district === "Bhind") {
      return (
        <>
          <Option value="Customer Care Executive">
            Customer Care Executive
          </Option>
          <Option value="Self Employed Tailor">Self Employed Tailor</Option>
        </>
      );
    } else if (district === "Khandwa") {
      return (
        <>
          <Option value="Jute Products Stiching Operator">
            Jute Products Stiching Operator
          </Option>
          <Option value="Self Employed Tailor">Self Employed Tailor</Option>
        </>
      );
    } else if (district === "Farrukhabad") {
      return (
        <>
          <Option value="Customer Care Executive">
            Customer Care Executive
          </Option>
          <Option value="Self Employed Tailor">Self Employed Tailor</Option>
        </>
      );
    } else if (district === "Moradabad") {
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

  const batchOptions = () => {
    if (district === "Bhopal" && formData.course === "Welder (GTAW)") {
      return (
        <>
          <Option value="003970">003970</Option>
          <Option value="003922">003922</Option>
          <Option value="003920">003920</Option>
        </>
      );
    } else if (
      district === "Bhopal" &&
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
      district === "Khandwa" &&
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
      district === "Khandwa" &&
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
      district === "Moradabad" &&
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
      district === "Moradabad" &&
      formData.course === "Account Executive"
    ) {
      return (
        <>
          <Option value="005137">005137</Option>
          <Option value="005138">005138</Option>
          <Option value="005141">005141</Option>
        </>
      );
    } else if (district === "Morena" && formData.course === "Welder (GTAW)") {
      return (
        <>
          <Option value="004229">004229</Option>
          <Option value="004230">004230</Option>
          <Option value="004231">004231</Option>
        </>
      );
    } else if (
      district === "Morena" &&
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
      district === "Morena" &&
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
      district === "Bhind" &&
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
      district === "Bhind" &&
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
      district === "Farrukhabad" &&
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
      district === "Farrukhabad" &&
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
      district === "Gwalior" &&
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
      district === "Gwalior" &&
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
      district === "Raisen" &&
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
      district === "Raisen" &&
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

  const handleInTimeChange = (studentId, value) => {
    setAttendanceData((prevData) => ({
      ...prevData,
      [studentId]: { ...prevData[studentId], inTime: value },
    }));
  };

  const handleOutTimeChange = (studentId, value) => {
    setAttendanceData((prevData) => ({
      ...prevData,
      [studentId]: { ...prevData[studentId], outTime: value },
    }));
  };

  const handleSubmit = async () => {
    
    console.log("Attendance Data:", attendanceData);
    const formattedData = {
      date: selectedDate,
      attendance_data: attendanceData,
      inLat: inLat,
      inLong: inLong,
      outLat: outLat,
      outLong: outLong,
    };

    

    // console.log(formattedData)

    try {
      const response = await fetch(attendance_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(formattedData),
      });

      console.log(formattedData);

      if (response.ok) {
        alert("Attendance Marked Successfully!");
        setAttendanceData({});
      } else {
        alert("Data not found :)");
        setAttendanceData({});
      }
    } catch (error) {
      alert("Server Error");
    } finally {
      // setIsLoading(false);
    }

    setAttendanceData({});
  };

  return (
    <>
      <DashboardLayout>
        <div className="profile-setting">
          <div className="w-100 rounded p-2">
            <h5 className="text-title mb-5 mt-3">Mark Attendance</h5>

            <form className="row form-row" onSubmit={onSubmit}>
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
                    {batchOptions()}
                  </Select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group mb-2">
                  <DatePicker
                    onChange={(date, dateString) => onChange(date, dateString)}
                    disabledDate={disabledDate}
                    style={{ width: "100%", padding: "12px" }}
                  />
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="btn my-3">
                  {"Get Students"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="attendance-mark">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>In Time</th>
                <th>Out Time</th>
              </tr>
            </thead>
            <tbody>
              {studentData &&
                studentData.map((student, index) => (
                  <tr key={index}>
                    <td>{student.student_name}</td>
                    <td>
                      <Input
                        placeholder="In Time"
                        onChange={(e) =>
                          handleInTimeChange(
                            student._id + "___" + student.user_id,
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td>
                      <Input
                        placeholder="Out Time"
                        onChange={(e) =>
                          handleOutTimeChange(
                            student._id + "___" + student.user_id,
                            e.target.value
                          )
                        }
                      />
                    </td>
                  </tr>
                ))}
              <Button className="my-4" type="primary" onClick={handleSubmit}>
                Mark Attendance
              </Button>
            </tbody>
          </table>
        </div>
      </DashboardLayout>
    </>
  );
};

export default MarkAttendance;
