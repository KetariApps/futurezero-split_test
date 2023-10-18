"use client";

import { Card } from "antd";
import Show from "./../show";
import Feedback from "./Feedback";
import PrimaryForm from "./PrimaryForm";
import { useMemo, useState } from "react";
import useSubmitForm from "@/hooks/useSubmitForm";
import { FormEntry } from "@/helpers/formatFormEntry";
// import PreflightForm from "./PreflightForm";

const IntakeForm = () => {
  const { sending, error, done, submitForm } = useSubmitForm();

  const handleSubmit = (values: any) => {
    submitForm({
      database_id: process.env.NEXT_PUBLIC_INTAKE_DB,
      data: values as FormEntry,
    });
  };
  const [verifiedTarget, setVerifiedTarget] = useState<boolean>();
  const submitting = useMemo(() => {
    return done || error || sending;
  }, [done, error, sending]);

  return (
    <Card>
      <Show
        when={submitting || verifiedTarget === false}
        otherwise={
          // <Show
          //   when={verifiedTarget === true}
          //   otherwise={
          //     <PreflightForm
          //       onVerifiedTarget={setVerifiedTarget}
          //       onError={() => setError(true)}
          //       onSending={() => setSending(true)}
          //     />
          //   }
          // >
          <PrimaryForm handleSubmit={handleSubmit} />
          // </Show>
        }
      >
        <Feedback sending={sending} error={error} done={done} />
      </Show>
    </Card>
  );
};
export default IntakeForm;
