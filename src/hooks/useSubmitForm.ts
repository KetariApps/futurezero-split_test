import formatFormEntry, { FormEntry } from "@/helpers/formatFormEntry";
import { useState, useCallback } from "react";

export interface SubmitFormProps {
  database_id: string;
  data: any;
}
export default function useSubmitForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const submitForm = useCallback(
    async ({ data, database_id }: SubmitFormProps) => {
      try {
        if (data === undefined || database_id === undefined) {
          throw new Error(
            "Could not submit form due to undefined request parameters"
          );
        }
        setSending(true);
        const response = await fetch("/api/notion/create-page", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            parent: { database_id },
            properties: formatFormEntry(data),
          }),
        });

        if (!response.ok) {
          console.error("Failed to create Notion page");
          setError(true);
        } else {
          setError(false);
          setDone(true);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setError(true);
      } finally {
        setSending(false);
      }
    },
    []
  );

  return {
    sending,
    error,
    done,
    submitForm,
  };
}
