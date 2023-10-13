import { NotionAPI } from "notion-client";
import { Space } from "antd";
import NotionClientRenderer from "./components/notionClientRenderer";
import IntakeForm from "./components/IntakeForm";
import overrides from "@/css/overrides.module.css";
import {
  NEXT_PUBLIC_TEST_A,
  NEXT_PUBLIC_TEST_B,
  NEXT_PUBLIC_TEST_C,
} from "@/lib/constants";
import randomArrayItem from "@/helpers/randomArrayItem";
import type { Metadata } from "next";

const pageOptions = [
  NEXT_PUBLIC_TEST_A,
  NEXT_PUBLIC_TEST_B,
  NEXT_PUBLIC_TEST_C,
];

export const dynamic = "force-dynamic";

const randomPageVersion = (options: string[]) => {
  const id = randomArrayItem(options);
  if (id === NEXT_PUBLIC_TEST_A) {
    return { title: "FutureZero - Increase your home's value", id };
  } else if (id === NEXT_PUBLIC_TEST_B) {
    return { title: "FutureZero - Reduce your home's carbon impact", id };
  } else {
    return {
      title: "FutureZero - Make your home a healthier place to live",
      id,
    };
  }
};
const { title, id } = randomPageVersion(pageOptions);

export const metadata: Metadata = {
  title,
};
export default async function Home() {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(id);
  const pageTitle = recordMap.block[id].value.properties?.title[0][0];

  return (
    <Space
      direction="vertical"
      size="large"
      className={overrides["ant-space__full-width"]}
    >
      <NotionClientRenderer recordMap={recordMap} title={pageTitle} />
      <IntakeForm />
    </Space>
  );
}
