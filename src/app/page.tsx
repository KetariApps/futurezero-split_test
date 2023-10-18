import { Space } from "antd";
import IntakeForm from "./components/IntakeForm";
import overrides from "@/css/overrides.module.css";
import randomArrayItem from "@/helpers/randomArrayItem";
import { Metadata } from "next";
import { DynamicContent } from "./components/DynamicContent";
import { copy } from "./components/copy";
import { Footer } from "./components/Footer";
import Image from "next/image";
import PreflightForm from "./components/IntakeForm/PreflightForm";

export async function generateMetadata(): Promise<Metadata> {
  const { testA, testB } = copy;
  const pageOptions = [testA, testB];
  const { title } = randomArrayItem(pageOptions);
  return { title };
}

export default async function Home() {
  return (
    <Space
      direction="vertical"
      size="large"
      className={overrides["ant-space__full-width"]}
    >
      <Image
        src="/futureZeroLogo.png"
        width={234}
        height={50}
        alt="Future Zero logo"
      />
      <DynamicContent />
      <IntakeForm />
      <Footer />
    </Space>
  );
}
