import { Checkbox, Form, Typography, Space } from "antd";

const { Text } = Typography;

export default function OptIn({ disabled }: { disabled: boolean }) {
  return (
    <Form.Item required={true} name="opt-in" valuePropName="checked">
      <Space>
        <Checkbox disabled={disabled} />
        <Text>
          Please reach out to me with deep energy retrofit information.
        </Text>
      </Space>
    </Form.Item>
  );
}
