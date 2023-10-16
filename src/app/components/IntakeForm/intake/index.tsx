"use client";

import { Alert, Button, Form, Space, Typography } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import overrideClasses from "@/css/overrides.module.css";
import Email from "./fields/Email";
import OptIn from "./fields/OptIn";
import { useForm } from "antd/es/form/Form";
import HomeAddress from "./fields/HomeAddress";
import useAutocompleteAddress from "@/hooks/useAutocompleteAddress";
import styles from "../intakeForm.module.css";
import Link from "next/link";
import { copy } from "../../copy";

const { Text, Title } = Typography;
const Intake = ({
  sending,
  onFinish,
}: {
  sending: boolean;
  onFinish: (values: any) => void;
}) => {
  const [intakeForm] = useForm();

  const { options, setPartialAddress } = useAutocompleteAddress(300);
  const { howItWorks } = copy;
  const autocompleteOptions = options
    ? options.map(({ formatted }) => ({ value: formatted }))
    : [];
  return (
    <Space direction="vertical">
      <Title level={4}>{howItWorks}</Title>
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
        onFinish={onFinish}
      >
        <Space
          direction="vertical"
          size="small"
          className={overrideClasses["ant-space__full-width"]}
        >
          <HomeAddress
            disabled={sending}
            size="large"
            options={autocompleteOptions}
          />
          <Email disabled={sending} size="large" />
          <OptIn disabled={sending} />
          <Alert
            message={
              <Text>
                By submitting this form, you agree to the
                <Link target="_blank" href="/tos" style={{ marginLeft: 4 }}>
                  terms
                  <LinkOutlined style={{ marginLeft: 4 }} />
                </Link>
              </Text>
            }
            type="info"
          />
          <Form.Item>
            <Button
              className={styles.submitButton}
              loading={sending}
              type="primary"
              size="large"
              htmlType="submit"
            >
              Analyze my home
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </Space>
  );
};
export default Intake;
