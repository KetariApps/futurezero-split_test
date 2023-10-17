"use client";

import { Divider, Space, Typography } from "antd";
import { copy } from "./copy";
import Image from "next/image";

const { Text } = Typography;
export const Footer = () => {
  const { aboutUs } = copy;
  return (
    <footer>
      <Space direction="vertical" align="center">
        <Text strong>{aboutUs}</Text>
        <Divider />
        <Image
          src="/futureZeroLogo.png"
          width={93.5}
          height={20}
          alt="Future Zero logo"
        />
      </Space>
    </footer>
  );
};
