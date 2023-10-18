"use client";

import {
  LoadingOutlined,
  CheckCircleOutlined,
  MehOutlined,
} from "@ant-design/icons";
import { Result, Space, Typography } from "antd";
import Show from "../show";

const { Text } = Typography;
export interface FeedbackProps {
  sending: boolean;
  error: boolean;
  done: boolean;
}
const Feedback = ({ sending, error, done }: FeedbackProps) => {
  const icon = sending ? (
    <LoadingOutlined />
  ) : error ? (
    <MehOutlined />
  ) : (
    <CheckCircleOutlined />
  );
  return (
    <Result
      status={error ? "error" : "success"}
      title={sending ? "Talking with robots..." : error ? "Oh no.." : "Thanks!"}
      icon={icon}
      subTitle={
        sending === false && (
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Show
              when={error}
              otherwise={
                <Show when={done}>
                  <Text>
                    Our team will crunch the numbers and get back to you.
                  </Text>
                </Show>
              }
            >
              <Text>
                Unfortunately, we ran into an issue. Please try again later...
              </Text>
            </Show>
          </Space>
        )
      }
    />
  );
};
export default Feedback;
