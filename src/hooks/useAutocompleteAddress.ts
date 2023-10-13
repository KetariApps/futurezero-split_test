import { useCallback, useMemo, useState } from "react";
import useDebounce from "./useDebounce";

export default function useAutocompleteAddress(debounce: number = 500) {
  const [partialAddress, setPartialAddress] = useState<string>();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [options, setOptions] = useState<any>();
  const debouncedPartialAddress = useDebounce(partialAddress, debounce);

  const requestAddress = useCallback(
    async (partialAddress: string | undefined) => {
      if (partialAddress === undefined) {
        return;
      }
      console.log(partialAddress);
      setSending(true);
      try {
        const response = await fetch("/api/validate/address", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: partialAddress,
        });

        if (!response.ok) {
          console.error(
            "Failed to auto-complete address. Status:",
            response.status
          );

          response.text().then((body) => {
            console.error("Response Body:", body);
          });
          setError(true);
        } else {
          const { message } = await response.json();

          if (message === "Error") {
            setError(true);
          } else {
            setOptions(message);
            setError(false);
          }
        }
      } catch (error) {
        console.error("Error sending address:", error);
        setError(true);
      } finally {
        setSending(false);
      }
    },
    []
  );

  useMemo(async () => {
    await requestAddress(debouncedPartialAddress);
  }, [debouncedPartialAddress]);

  return { setPartialAddress, sending, error, options };
}
