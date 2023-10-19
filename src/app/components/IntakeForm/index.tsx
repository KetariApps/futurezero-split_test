"use client";

import { Card, Result } from "antd";
import Show from "./../show";
import Feedback from "./Feedback";
import PrimaryForm from "./PrimaryForm";
import { useCallback, useMemo, useState } from "react";
import useSubmitForm from "@/hooks/useSubmitForm";
import { FormEntry } from "@/helpers/formatFormEntry";
import PreflightForm, { PreflightValues } from "./PreflightForm";
import { useForm } from "antd/es/form/Form";
import { SmileOutlined } from "@ant-design/icons";

const IntakeForm = () => {
  const [intakeForm] = useForm<FormEntry>();
  const { sending, error, done, submitForm } = useSubmitForm();
  const [validTarget, setValidTarget] = useState<boolean>();
  const [preflightValues, setPreflightValues] = useState<PreflightValues>();
  const submitting = useMemo(() => {
    return done || error || sending;
  }, [done, error, sending]);

  const submitFormEntry = useCallback((values: FormEntry) => {
    submitForm({
      database_id: process.env.NEXT_PUBLIC_INTAKE_DB!,
      data: values,
    });
  }, []);

  console.log(validTarget);

  return (
    <Card style={{ display: "flex", justifyContent: "center" }}>
      <Show
        when={submitting || validTarget === false}
        otherwise={
          <Show
            when={validTarget === true}
            otherwise={
              <PreflightForm
                onTargetValidated={({ valid, values }) => {
                  setValidTarget(valid);
                  setPreflightValues(values);
                }}
                onInvalidTarget={(preflightValues) =>
                  submitFormEntry({
                    ...preflightValues,
                    ...intakeForm.getFieldsValue(),
                  })
                }
              />
            }
          >
            <PrimaryForm
              handleSubmit={(primaryValues) =>
                submitFormEntry({ ...primaryValues, ...preflightValues })
              }
              form={intakeForm}
            />
          </Show>
        }
      >
        <Show
          when={validTarget === false}
          otherwise={<Feedback sending={sending} error={error} done={done} />}
        >
          <Result
            icon={<SmileOutlined />}
            status="success"
            title="Thank you for your interest in decarbonizing your home!"
            subTitle="Unfortunately, we are only able to perform analyses for home owners or home buyers at this time."
          />
        </Show>
      </Show>
    </Card>
  );
};
export default IntakeForm;
