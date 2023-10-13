import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
export interface FormEntry {
  ["home-address"]: string;
  ["opt-in"]: boolean;
  email: string;
}

export default function formatFormEntry(data: FormEntry) {
  const properties: CreatePageParameters["properties"] = {
    "home-address": {
      title: [
        {
          text: {
            content: data["home-address"],
          },
        },
      ],
    },
    email: { email: data.email },
    "opt-in": {
      checkbox: data["opt-in"],
    },
    "submitted-on": {
      date: {
        start: dayjs().utc().format(),
      },
    },
  };
  return properties;
}
