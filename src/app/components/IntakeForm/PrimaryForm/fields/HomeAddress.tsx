import { copy } from "@/app/components/copy";
import { AutoComplete, Form, Input, InputProps } from "antd";

export default function HomeAddress({
  size,
  options,
  disabled,
}: {
  size: InputProps["size"];
  options: { value: string }[];
  disabled: boolean;
}) {
  const { placeholder, errorMessage } =
    copy.components.intakeForm.fields.address;
  return (
    <Form.Item
      label="Home address"
      required={true}
      name="home-address"
      validateTrigger={["onChange", "onBlur"]}
      rules={[{ required: true, message: errorMessage }]}
    >
      <AutoComplete
        popupClassName="home-address-search-dropdown"
        style={{ width: "100%" }}
        options={options}
        size={size}
      >
        <Input disabled={disabled} size={size} placeholder={placeholder} />
      </AutoComplete>
    </Form.Item>
  );
}
