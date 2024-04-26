import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Master", "1", <MailOutlined />, [
    getItem("Device Master", "11"),
    getItem("Center Master", "12"),
    getItem("Course Map", "13"),
    getItem("Batch Master", "14"),
    getItem("Student Master", "15"),
    getItem("faculty Master", "16"),
    getItem("faculty Map", "17"),
  ]),
  getItem("View", "2", <AppstoreOutlined />, [
    getItem("Device List", "21"),
    getItem("Center List", "22"),
    getItem("Course List", "23"),
    getItem("Batch List", "24"),
    getItem("Student List", "25"),
    getItem("Faculty List", "26"),
    
  ]),
  getItem("Student Report", "3", <SettingOutlined />, [
    getItem("Daily-Attendance Report", "31"),
    getItem("Student Progress", "32"),
    getItem("Batch Wise Attendance Report", "33"),
    getItem("Month Wise Attendance Report", "34"),
  ]),
  getItem("Faculty Report", "4", <SettingOutlined />, [
    getItem("Employee-Attendance Report", "41"),
  ]),
  getItem("Password", "5", <SettingOutlined />, [
    getItem("Change Password", "51"),
  ]),
  getItem("Dashboard", "6", <SettingOutlined />, [
    getItem("Dashboard", "61"),
  ]),
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
const levelKeys = getLevelKeys(items);
const App = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["231"]}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={items}
    />
  );
};
export default App;
