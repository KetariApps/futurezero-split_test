"use client";

import { PropsWithChildren } from "react";
import { ConfigProvider } from "antd";
import { AntdProvider } from "./antdProvider";

export function AntdStyleProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: "#F4F7F5",
          colorPrimary: "#598B2C",
          colorLink: "#4D6CFA",
          colorTextLightSolid: "#F0F7F4",
          colorTextBase: "#232c33",
          colorBgLayout: "#F4F7F5",
          colorBgContainer: "#F4F7F5",
          colorSuccess: "#309FEE",
          colorError: "#F26419",
          colorWarning: "#E8AA14",
          colorInfoBg: "#ECF0FE",
          colorInfoBorder: "#6484F7",
          colorInfoText: "#6484F7",
          borderRadius: 4,
        },
        components: {
          Menu: {},
        },
      }}
    >
      <AntdProvider>{children}</AntdProvider>
    </ConfigProvider>
  );
}
