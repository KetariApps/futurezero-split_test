import { LinkOutlined } from "@ant-design/icons";
import { Checkbox, Form, Typography, Space } from "antd";
import { RuleObject } from "antd/es/form";
import Link from "next/link";
import { useCallback } from "react";

const { Text } = Typography;

export default function OptIn() {
  const validator = useCallback(async (_: RuleObject, agreed: any) => {
    if (
      agreed === undefined ||
      agreed === null ||
      agreed === "" ||
      agreed === false
    ) {
      throw new Error("You must agree to continue.");
    }
  }, []);
  return (
    <Form.Item
      required={true}
      name="opt-in"
      validateTrigger={["onChange", "onBlur"]}
      rules={[{ validator }]}
      valuePropName="checked"
    >
      <Space>
        <Checkbox />
        <Text>
          I agree to the{" "}
          <Link target="_blank" href="/tos">
            terms
            <LinkOutlined style={{ marginLeft: 4 }} />
          </Link>
        </Text>
      </Space>
    </Form.Item>
  );
}
