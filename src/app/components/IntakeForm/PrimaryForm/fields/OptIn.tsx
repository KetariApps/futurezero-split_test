import { copy } from "@/app/components/copy";
import { Checkbox, Form, Space, Typography } from "antd";

const { Text } = Typography;

export default function OptIn({ disabled }: { disabled?: boolean }) {
  const { optIn } = copy.components.intakeForm.fields;
  return (
    <Space style={{ marginBottom: 16 }}>
      <Form.Item name="opt-in" valuePropName="checked" noStyle>
        <Checkbox disabled={disabled} onChange={(e) => console.log(e)} />
      </Form.Item>
      <Text>{optIn}</Text>
    </Space>
  );
}
