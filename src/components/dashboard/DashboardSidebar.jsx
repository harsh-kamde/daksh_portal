import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../stylesheets/DashboardSidebar.css";
import { Menu, Button, Drawer } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { useAuth } from "../../store/auth";


import {
  FaUserTie,
  FaChalkboardTeacher,
  FaBookOpen,
  FaLock,
  FaEye,
  FaSignOutAlt,
  FaClipboard
} from "react-icons/fa";

const DashboardSidebar = () => {

  const { LogoutUser } = useAuth();

  const navigate = useNavigate();

  const [selectedKey, setSelectedKey] = useState("/");

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("center_data");
    LogoutUser();
    navigate("/");
    alert("Logged out");
  };

  const items = [
    {
      label: "Dashboard",
      key: "/dashboard",
      icon: <AppstoreOutlined />,
      className: "sidebar-tab",
      style: { padding: "24px 28px" },
    },

    {
      label: "Masters",
      key: "/masters",
      icon: <FaUserTie />,
      className: "sidebar-tab",
      children: [
        {
          label: "Device Master",
          key: "/masters/device-master",
          className: "sidebar-item",
        },
        {
          label: "Center Master",
          key: "/masters/center-master",
          className: "sidebar-item",
        },
        {
          label: "Course Map",
          key: "/masters/course-map",
          className: "sidebar-item",
        },
        {
          label: "Batch Master",
          key: "/masters/batch-master",
          className: "sidebar-item",
        },
        {
          label: "Student Master",
          key: "/masters/student-master",
          className: "sidebar-item",
        },
        {
          label: "Faculty Master",
          key: "/masters/faculty-master",
          className: "sidebar-item",
        },
        {
          label: "Faculty Map",
          key: "/masters/faculty-map",
          className: "sidebar-item",
        },
      ],
    },

    {
      label: "View",
      key: "/view",
      icon: <FaEye />,
      className: "sidebar-tab",
      children: [
        {
          label: "Device List",
          key: "/view/device-list",
          className: "sidebar-item",
        },
        {
          label: "Center List",
          key: "/view/center-list",
          className: "sidebar-item",
        },
        {
          label: "Course List",
          key: "/view/course-list",
          className: "sidebar-item",
        },
        {
          label: "Batch List",
          key: "/view/batch-list",
          className: "sidebar-item",
        },
        {
          label: "Student List",
          key: "/view/student-list",
          className: "sidebar-item",
        },
        {
          label: "Faculty List",
          key: "/view/faculty-list",
          className: "sidebar-item",
        },
      ],
    },

    {
      label: "Attendance",
      key: "/attendance",
      icon: <FaClipboard />,
      className: "sidebar-tab",
      children: [
        {
          label: "Mark Attendance",
          key: "/attendance/mark-attendance",
          className: "sidebar-item",
        },
      ],
    },

    {
      label: "Student Reports",
      key: "/student-reports",
      icon: <FaBookOpen />,
      className: "sidebar-tab",
      children: [
        {
          label: "Daily Attendance Report",
          key: "/student-reports/daily-attendance-report",
          className: "sidebar-item",
        },
        {
          label: "Student Progress",
          key: "/student-reports/student-progress",
          className: "sidebar-item",
        },
        {
          label: "Batch Wise Attendance Report",
          key: "/student-reports/batch-wise-attendance-report",
          className: "sidebar-item",
        },
        {
          label: "Month Wise Attendance Report",
          key: "/student-reports/month-wise-attendance-report",
          className: "sidebar-item",
        },
      ],
    },

    {
      label: "Faculty Reports",
      key: "/faculty-reports",
      icon: <FaChalkboardTeacher />,
      className: "sidebar-tab",
      children: [
        {
          label: "Employee Attendance Report",
          key: "/faculty-reports/employee-attendance-report",
          className: "sidebar-item",
        },
      ],
    },

    {
      label: "Password",
      key: "/password",
      icon: <FaLock />,
      className: "sidebar-tab",
      children: [
        {
          label: "Change Password",
          key: "/password/change-password",
          className: "sidebar-item",
        },
      ],
    },
  ];

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onMenuClick = ({ key }) => {
    if (key === "sign-out") {
      // Sign out logic
    } else {
      setSelectedKey(key);
      navigate(key);
    }
  };

  return (
    <div className="profile-sidebar">
      {/* Show Drawer Button in Small Devices */}
      <Button
        type="primary"
        shape="circle"
        icon={<i class="fa-solid fa-bars"></i>}
        size="large"
        className="dashboard-drawer-btn"
        onClick={showDrawer}
      />

      <nav className="dashboard-menu dashboard-menu-sidebar">
        <Menu
          onClick={onMenuClick}
          mode="inline"
          selectedKeys={[selectedKey]}
          items={items}
          className="menus"
        />

        <ul style={{ paddingLeft: "13px" }}>
          <li style={{ listStyle: "none" }}>
            <Button
              icon={<FaSignOutAlt />}
              onClick={handleLogout}
              className="logout-btn"
            >
              Sign Out
            </Button>
          </li>
        </ul>
      </nav>

      <Drawer title="PM-DAKSH" onClose={onClose} open={open}>
        <nav className="dashboard-menu">
          <Menu
            onClick={onMenuClick}
            mode="inline"
            selectedKeys={[selectedKey]}
            items={items}
            className="menus"
            style={{ borderRight: "0" }}
          />

          <ul style={{ paddingLeft: "13px" }}>
            <li style={{ listStyle: "none" }}>
              <Button
                icon={<FaSignOutAlt />}
                onClick={handleLogout}
                className="logout-btn"
              >
                Sign Out
              </Button>
            </li>
          </ul>
        </nav>
      </Drawer>
    </div>
  );
};
export default DashboardSidebar;
