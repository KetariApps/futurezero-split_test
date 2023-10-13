import { useCallback, useMemo, useState } from "react";
import useDebounce from "./useDebounce";

export interface AutocompleteApiResponse {
  results: AddressResult[];
  query: QueryProp;
}
export interface QueryProp {
  text: string;
  parsed: { housenumber: string; street: string; expected_type: string };
}
export interface AddressResult {
  country_code: string;
  housenumber: string;
  street: string;
  country: string;
  county: string;
  datasource: [Object];
  postcode: string;
  state: string;
  district: string;
  city: string;
  suburb: string;
  state_code: string;
  lon: number;
  lat: number;
  formatted: string;
  address_line1: string;
  address_line2: string;
  timezone: [Object];
  plus_code: string;
  plus_code_short: string;
  result_type: string;
  rank: [Object];
  place_id: string;
}

export default function useAutocompleteAddress(debounce: number = 500) {
  const [partialAddress, setPartialAddress] = useState<string>();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [options, setOptions] = useState<AddressResult[]>();
  const debouncedPartialAddress = useDebounce(partialAddress, debounce);

  const requestAddress = useCallback(
    async (partialAddress: string | undefined) => {
      if (partialAddress === undefined) {
        return;
      }
      setSending(true);
      try {
        const response = await fetch("/api/validate/address", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(partialAddress),
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
          const data = (await response.json()) as AutocompleteApiResponse;

          if ("message" in data) {
            setError(true);
          } else {
            setOptions(data.results);
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
