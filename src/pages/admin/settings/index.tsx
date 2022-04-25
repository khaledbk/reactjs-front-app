import React from "react";
import { Card, Row } from "antd";
import { useAuth } from "../../../utils/hooks/useAuth";
export const Settings = () => {
  const { currentUser } = useAuth();
  return (
    <Card
      hoverable
      title={<span style={{ position: "absolute", left: 20 }}>Settings</span>}
      bordered={true}
      headStyle={{ fontWeight: "bold" }}
    >
      <Row gutter={[16, 16]}></Row>
    </Card>
  );
};
