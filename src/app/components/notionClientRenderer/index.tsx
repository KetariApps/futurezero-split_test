"use client";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// // used for code syntax highlighting (optional)
// import "prismjs/themes/prism-tomorrow.css";

// // used for rendering equations (optional)
// import "katex/dist/katex.min.css";
import Image from "next/image";
import Link from "next/link";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";

import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import { Typography } from "antd";

const { Title } = Typography;
export default function NotionClientRenderer({
  recordMap,
  title,
}: {
  recordMap: ExtendedRecordMap;
  title: string;
}) {
  const blockEntries = Object.entries(recordMap.block);
  const editorBlockIds = blockEntries
    .filter(([k, v]) => v.role === "editor")
    .map(([k]) => k);
  const cleanedBlocks = Object.fromEntries(
    blockEntries
      .filter(([_, v]) => v.role === "reader")
      .map(([k, v]) => {
        const cleanedContent = v.value.content
          ? v.value.content.filter((id) => !editorBlockIds.includes(id))
          : [];

        v.value.content = cleanedContent;

        return [k, v];
      })
  );
  const correctedRecordMap = { ...recordMap, block: cleanedBlocks };
  return (
    <>
      {title && <Title level={1}>{title}</Title>}
      <NotionRenderer
        components={{
          Code,
          nextImage: Image,
          nextLink: Link,
          Collection,
        }}
        recordMap={correctedRecordMap}
      />
    </>
  );
}
