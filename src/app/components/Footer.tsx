"use client";

import { Typography } from "antd";
import { copy } from "./copy";

const { Text } = Typography;
export const Footer = () => {
  const { aboutUs } = copy;
  return (
    <footer>
      <Text>{aboutUs}</Text>
    </footer>
  );
};
