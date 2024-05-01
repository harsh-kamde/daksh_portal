import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";

// master
import DeviceMaster from "./components/masters/DeviceMaster";
import CenterMaster from "./components/masters/CenterMaster";
import CourseMap from "./components/masters/CourseMap";
import BatchMaster from "./components/masters/BatchMaster";
import StudentMaster from "./components/masters/StudentMaster";
import FacultyMaster from "./components/masters/FacultyMaster";
import FacultyMap from "./components/masters/FacultyMap";

// view
import DeviceList from "./components/view/DeviceList";
import CenterList from "./components/view/CenterList";
import CourseList from "./components/view/CourseList";
import BatchList from "./components/view/BatchList";
import StudentList from "./components/view/StudentList";
import FacultyList from "./components/view/FacultyList";

import Login from "./components/Login";

// student reports
import DailyAttendanceReport from "./components/student_reports/DailyAttendanceReport";
import StudentProgress from "./components/student_reports/StudentProgress";
import BatchWiseAttendanceReport from "./components/student_reports/BatchWiseAttendanceReport";
import MonthWiseAttendanceReport from "./components/student_reports/MonthWiseAttendanceReport";

// faculty reports
import EmployeeAttendanceReport from "./components/faculty_reports/EmployeeAttendanceReport";

import ChangePassword from "./components/ChangePassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />

        {/* master */}
        <Route path="/masters/device-master" element={<DeviceMaster />} />
        <Route path="/masters/center-master" element={<CenterMaster />} />
        <Route path="/masters/course-map" element={<CourseMap />} />
        <Route path="/masters/batch-master" element={<BatchMaster />} />
        <Route path="/masters/student-master" element={<StudentMaster />} />
        <Route path="/masters/faculty-master" element={<FacultyMaster />} />
        <Route path="/masters/faculty-map" element={<FacultyMap />} />

        {/* view */}
        <Route path="/view/device-list" element={<DeviceList />} />
        <Route path="/view/center-list" element={<CenterList />} />
        <Route path="/view/course-list" element={<CourseList />} />
        <Route path="/view/batch-list" element={<BatchList />} />
        <Route path="/view/student-list" element={<StudentList />} />
        <Route path="/view/faculty-list" element={<FacultyList />} />

        {/* student reports */}
        <Route
          path="/student-reports/daily-attendance-report"
          element={<DailyAttendanceReport />}
        />
        <Route
          path="/student-reports/student-progress"
          element={<StudentProgress />}
        />
        <Route
          path="/student-reports/batch-wise-attendance-report"
          element={<BatchWiseAttendanceReport />}
        />
        <Route
          path="/student-reports/month-wise-attendance-report"
          element={<MonthWiseAttendanceReport />}
        />

        {/* faculty reports */}
        <Route
          path="/faculty-reports/employee-attendance-report"
          element={<EmployeeAttendanceReport />}
        />

        <Route path="/password/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
};

export default App;
