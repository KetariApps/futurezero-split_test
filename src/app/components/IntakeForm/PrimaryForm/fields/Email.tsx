import { copy } from "@/app/components/copy";
import validateEmail from "@/helpers/validateEmail";
import { Form, Input, InputProps } from "antd";
import { RuleObject } from "antd/es/form";
import { useCallback } from "react";

export default function Email({
  size,
  disabled,
}: {
  size: InputProps["size"];
  disabled?: boolean;
}) {
  const { placeholder, errorMessage } = copy.components.intakeForm.fields.email;
  const validator = useCallback(async (_: RuleObject, email: string) => {
    if (validateEmail(email) === false) {
      throw new Error(errorMessage);
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
      <Input
        disabled={disabled}
        size={size}
        type="email"
        placeholder={placeholder}
      />
    </Form.Item>
  );
}
