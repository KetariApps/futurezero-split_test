import { NotionAPI } from "notion-client";
import { notFound } from "next/navigation";
import NotionClientRenderer from "../components/notionClientRenderer";
import { NEXT_PUBLIC_TOS } from "@/lib/constants";
const Tos = async () => {
  const notion = new NotionAPI();

  try {
    const id = NEXT_PUBLIC_TOS;
    const recordMap = await notion.getPage(id);
    const pageTitle = recordMap.block[id].value.properties?.title[0][0];

    return <NotionClientRenderer recordMap={recordMap} title={pageTitle} />;
  } catch (error) {
    notFound();
  }
};
export default Tos;
