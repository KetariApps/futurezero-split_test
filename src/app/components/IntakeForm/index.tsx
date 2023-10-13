"use client";

import { Button, Form, Space } from "antd";
import overrideClasses from "@/css/overrides.module.css";
import Email from "./fields/Email";
import OptIn from "./fields/OptIn";
import { useForm } from "antd/es/form/Form";
import HomeAddress from "./fields/HomeAddress";
import useDebounce from "@/hooks/useDebounce";
import { useMemo, useState } from "react";
import useAutocompleteAddress from "@/hooks/useAutocompleteAddress";

const IntakeForm = () => {
  const [intakeForm] = useForm();

  const { options, sending, error, setPartialAddress } =
    useAutocompleteAddress();

  console.log(options, sending, error);
  return (
    <Form
      form={intakeForm}
      layout="vertical"
      style={{ width: "100%", textAlign: "left" }}
      name="contact-info"
      scrollToFirstError={true}
      onFieldsChange={(changedFields) => {
        const homeAddressField = changedFields.find(({ name }) =>
          name.includes("home-address")
        );
        if (homeAddressField === undefined) {
          return;
        }
        setPartialAddress(homeAddressField.value);
      }}
    >
      <Space
        direction="vertical"
        size="small"
        className={overrideClasses["ant-space__full-width"]}
      >
        <HomeAddress size="large" />
        <Email size="large" />
        <OptIn />
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit">
            Analyze my home
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};
export default IntakeForm;
