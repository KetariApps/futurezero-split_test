import { copy } from "@/app/components/copy";
import { Checkbox, Form, Typography, Space } from "antd";

const { Text } = Typography;

export default function OptIn({ disabled }: { disabled: boolean }) {
  const { optIn } = copy.components.intakeForm.fields;
  return (
    <Form.Item required={true} name="opt-in" valuePropName="checked">
      <Checkbox disabled={disabled} />
      <Text style={{ marginLeft: 8 }}>{optIn}</Text>
    </Form.Item>
  );
}
