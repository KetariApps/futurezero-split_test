"use client";

import { Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { copy } from "../copy";

const { Title, Text } = Typography;
export const DynamicContent = () => {
  const [version, setVersion] = useState<{ title: string; prompt: string }>();

  useEffect(() => {
    const { title } = document;
    const { testA, testB } = copy;
    const version = [testA, testB].find((option) => option.title === title);
    setVersion(version);
  }, []);

  return (
    <Space direction="vertical">
      <Title level={2}>{version?.prompt}</Title>
    </Space>
  );
};
