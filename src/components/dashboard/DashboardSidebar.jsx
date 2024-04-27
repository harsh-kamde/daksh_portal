import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../stylesheets/DashboardSidebar.css";
import { Button, Drawer } from "antd";

import {
  FaTable,
  FaCalendarPlus,
  FaPrescription,
  FaClock,
  FaFileInvoice,
  FaStar,
  FaRegStar,
  FaUserCog,
  FaBlog,
  FaSignOutAlt,
  FaLock,
  FaHeartbeat,
  FaHome,
  FaListUl,
  FaRegAddressCard,
  FaRegCommentDots,
} from "react-icons/fa";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const items = [
  { label: "Dashboard", key: "/", icon: <AppstoreOutlined /> },

  {
    label: "Masters",
    key: "/master",
    icon: <MailOutlined />,
    children: [
      {
        label: "Device Master",
        key: "/master/device-master",
        icon: <MailOutlined />,
      },
      {
        label: "Center Master",
        key: "/master/center-master",
        icon: <MailOutlined />,
      },
      {
        label: "Course Map",
        key: "/master/course-map",
        icon: <MailOutlined />,
      },
      {
        label: "Batch Master",
        key: "/master/batch-master",
        icon: <MailOutlined />,
      },
      {
        label: "Student Master",
        key: "/master/student-master",
        icon: <MailOutlined />,
      },
      {
        label: "Faculty Master",
        key: "/master/faculty-master",
        icon: <MailOutlined />,
      },
      {
        label: "Faculty Map",
        key: "/master/faculty-map",
        icon: <MailOutlined />,
      },
    ],
  },

  {
    label: "View",
    key: "/view",
    icon: <SettingOutlined />,
    children: [
      {
        label: "Device List",
        key: "/view/device-list",
        icon: <MailOutlined />,
      },
      {
        label: "Center List",
        key: "/view/center-list",
        icon: <MailOutlined />,
      },
      {
        label: "Course List",
        key: "/view/course-list",
        icon: <MailOutlined />,
      },
      {
        label: "Batch List",
        key: "/view/batch-list",
        icon: <MailOutlined />,
      },
      {
        label: "Student List",
        key: "/view/student-list",
        icon: <MailOutlined />,
      },
      {
        label: "Faculty List",
        key: "/view/faculty-list",
        icon: <MailOutlined />,
      },
    ],
  },

  {
    label: "Student Reports",
    key: "/student-reports",
    icon: <SettingOutlined />,
    children: [
      {
        label: "Daily Attendance Report",
        key: "/student-reports/daily-attendance-report",
        icon: <MailOutlined />,
      },
      {
        label: "Student Progress",
        key: "/student-reports/student-progress",
        icon: <MailOutlined />,
      },
      {
        label: "Batch Wise Attendance Report",
        key: "/student-reports/batch-wise-attendance-report",
        icon: <MailOutlined />,
      },
      {
        label: "Month Wise Attendance Report",
        key: "/student-reports/month-wise-attendance-report",
        icon: <MailOutlined />,
      },
    ],
  },

  {
    label: "Faculty Reports",
    key: "/faculty-reports",
    icon: <SettingOutlined />,
    children: [
      {
        label: "Employee Attendance Report",
        key: "/faculty-reports/employee-attendance-report",
        icon: <MailOutlined />,
      },
    ],
  },

  {
    label: "Change Password",
    key: "/change-password",
    icon: <MailOutlined />,
  },
  {
    label: "Sign Out",
    key: "sign-out",
    icon: <MailOutlined />,
  },
];

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        return func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const DashboardSidebar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
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
      navigate(key);
    }
  };

  return (
    <div className="profile-sidebar p-3 rounded">
      {/* Show Drawer Button in Small Devices */}
      <Button
        type="primary"
        shape="circle"
        icon={<i class="fa-solid fa-user" />}
        size="large"
        className="dashboard-drawer-btn"
        onClick={showDrawer}
      />

      <nav className="dashboard-menu dashboard-menu-sidebar">
        <Menu
          onClick={onMenuClick}
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={items}
        />
      </nav>

      <Drawer title="Dashboard" onClose={onClose} open={open}>
        <nav className="dashboard-menu">
          <Menu
            onClick={onMenuClick}
            mode="inline"
            defaultSelectedKeys={["/"]}
            items={items}
          />
        </nav>
      </Drawer>
    </div>
  );
};
export default DashboardSidebar;
