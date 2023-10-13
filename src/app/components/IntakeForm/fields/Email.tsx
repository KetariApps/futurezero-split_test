import validateEmail from "@/helpers/validateEmail";
import { Form, Input, InputProps } from "antd";
import { RuleObject } from "antd/es/form";
import { useCallback } from "react";

export default function Email({ size }: { size: InputProps["size"] }) {
  const validator = useCallback(async (_: RuleObject, email: string) => {
    if (validateEmail(email) === false) {
      throw new Error("Enter a valid email address.");
    }
  }, []);
  return (
    <Form.Item
      label="Email"
      required={true}
      name="email"
      validateTrigger={["onBlur"]}
      rules={[{ validator }]}
    >
      <Input size={size} type="email" placeholder="your@email.com" />
    </Form.Item>
  );
}
