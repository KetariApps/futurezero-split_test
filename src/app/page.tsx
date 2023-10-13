import { NotionAPI } from "notion-client";
import { Space } from "antd";
import NotionClientRenderer from "./components/notionClientRenderer";
// import { NEXT_PUBLIC_TEST_A } from "@/lib/constants";
import IntakeForm from "./components/IntakeForm";
import addDashesToUUID from "@/helpers/addDashesToUuid";
import overrides from "@/css/overrides.module.css";
import resolveEnvVar from "@/helpers/resolveEnvVar";

export default async function Home() {
  const notion = new NotionAPI();

  const id = addDashesToUUID(resolveEnvVar("NEXT_PUBLIC_TEST_A"));
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
