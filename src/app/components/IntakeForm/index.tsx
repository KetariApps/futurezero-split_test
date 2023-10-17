"use client";

import { Card } from "antd";
import { FormEntry } from "@/helpers/formatFormEntry";
import useSubmitForm from "@/hooks/useSubmitForm";
import Show from "./../show";
import Confirm from "./confirm";
import PrimaryForm from "./PrimaryForm";

const IntakeForm = () => {
  const { sending, error, done, submitForm } = useSubmitForm();

  const submitted = sending || error || done;
  const handleSubmit = (values: any) => {
    submitForm({
      database_id: process.env.NEXT_PUBLIC_INTAKE_DB,
      data: values as FormEntry,
    });
  };
  return (
    <Card>
      <Show
        when={submitted}
        otherwise={<PrimaryForm onFinish={handleSubmit} sending={sending} />}
      >
        <Confirm sending={sending} error={error} />
      </Show>
    </Card>
  );
};
export default IntakeForm;
