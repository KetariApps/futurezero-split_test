import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
export interface FormEntry {
  version: string;
  homeOwner: boolean;
  homeBuyer: boolean;
  ["home-address"]: string | undefined;
  ["opt-in"]: boolean | undefined;
  email: string | undefined;
}

export default function formatFormEntry(data: FormEntry) {
  const properties: CreatePageParameters["properties"] = {
    "submission-id": {
      title: [
        {
          text: {
            content: uuid(),
          },
        },
      ],
    },
    version: {
      rich_text: [
        {
          text: {
            content: data.version,
          },
        },
      ],
    },
    "home-address": {
      rich_text: [
        {
          text: {
            content: data["home-address"] || "",
          },
        },
      ],
    },
    email: { email: data.email || null },
    "home-owner": {
      checkbox: data.homeOwner || false,
    },
    "home-buyer": {
      checkbox: data.homeBuyer || false,
    },
    "opt-in": {
      checkbox: data["opt-in"] || false,
    },
    "submitted-on": {
      date: {
        start: dayjs().utc().format(),
      },
    },
  };
  return properties;
}
