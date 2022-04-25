import React from "react";
import { Profile } from "./profile";
import { Settings } from "./settings";
import { Divider } from "antd";
export const AdminDashboard = () => {
  return (
    <div>
      <Profile />
      <Divider />
      <Settings />
    </div>
  );
};
