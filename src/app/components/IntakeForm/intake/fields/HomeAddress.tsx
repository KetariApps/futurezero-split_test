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
  return (
    <Form.Item
      label="Home address"
      required={true}
      name="home-address"
      validateTrigger={["onChange", "onBlur"]}
      rules={[
        { required: true, message: "Please enter the address of your home" },
      ]}
    >
      <AutoComplete
        popupClassName="home-address-search-dropdown"
        style={{ width: "100%" }}
        options={options}
        size={size}
      >
        <Input
          disabled={disabled}
          size={size}
          placeholder="Enter the address of your home"
        />
      </AutoComplete>
    </Form.Item>
  );
}
