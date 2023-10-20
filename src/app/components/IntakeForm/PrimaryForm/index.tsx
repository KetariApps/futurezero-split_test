"use client";

import { Alert, Button, Form, Space, Typography } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import overrideClasses from "@/css/overrides.module.css";
import Email from "./fields/Email";
import OptIn from "./fields/OptIn";
import { FormInstance } from "antd/es/form/Form";
import HomeAddress from "./fields/HomeAddress";
import useAutocompleteAddress from "@/hooks/useAutocompleteAddress";
import styles from "../intakeForm.module.css";
import Link from "next/link";
import { copy } from "../../copy";
import { FormEntry } from "@/helpers/formatFormEntry";

const { Text, Title } = Typography;
const PrimaryForm = ({
  handleSubmit,
  form,
}: {
  handleSubmit: (values: any) => void;
  form: FormInstance;
}) => {
  const { options, setPartialAddress } = useAutocompleteAddress(300);

  const { howItWorks } = copy;
  const { submitButton, alertMessage } = copy.components.intakeForm;
  const autocompleteOptions = options
    ? options.map(({ formatted }) => ({ value: formatted }))
    : [];
  return (
    <Space
      direction="vertical"
      className={overrideClasses["ant-space__full-width"]}
    >
      <Title level={4} style={{ width: "100%" }}>
        {howItWorks}
      </Title>
      <Form
        form={form}
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
        onFinish={handleSubmit}
      >
        <Space
          direction="vertical"
          size="small"
          className={overrideClasses["ant-space__full-width"]}
        >
          <Space
            direction="vertical"
            className={overrideClasses["ant-space__full-width"]}
            size={0}
          >
            <HomeAddress size="large" options={autocompleteOptions} />
            <Email size="large" />
            <OptIn />
          </Space>
          <Alert
            style={{ marginBottom: 16 }}
            message={
              <Text>
                {alertMessage.main}
                <Link target="_blank" href="/tos" style={{ marginLeft: 4 }}>
                  {alertMessage.link}
                  <LinkOutlined style={{ marginLeft: 4 }} />
                </Link>
              </Text>
            }
            type="info"
          />
          <Form.Item>
            <Button
              className={styles.submitButton}
              type="primary"
              size="large"
              htmlType="submit"
            >
              {submitButton}
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </Space>
  );
};
export default PrimaryForm;
