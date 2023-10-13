import { Form, Input, InputProps } from "antd";

export default function HomeAddress({ size }: { size: InputProps["size"] }) {
  return (
    <Form.Item
      label="Home address"
      required={true}
      name="home-address"
      validateTrigger={["onChange", "onBlur"]}
      rules={[{ required: true, message: "Please enter your home address" }]}
    >
      <Input size={size} />
    </Form.Item>
  );
}
