"use client";

import { Radio, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import Show from "../../show";

const { Title } = Typography;
const PreflightForm = ({
  onError,
  onVerifiedTarget,
  onSending,
}: {
  onError: () => void;
  onSending: () => void;
  onVerifiedTarget: (result: boolean) => void;
}) => {
  const [homeOwner, setHomeOwner] = useState<string>();
  const [intentToBuy, setIntentToBuy] = useState<string>();
  const [confirm, setConfirm] = useState<string>();

  useEffect(() => {
    console.log(homeOwner, intentToBuy);
    if (homeOwner === undefined || intentToBuy === undefined) return;

    if (homeOwner === "no" && intentToBuy === "no") {
      console.log("invalid");
    }
  }, [homeOwner, intentToBuy]);
  return (
    <Space align="center">
      <Title level={4} style={{ width: "100%", margin: 0 }}>
        <Show when={!homeOwner} otherwise={"Are you planning to buy a home?"}>
          Are you a home owner?
        </Show>
      </Title>
      <Radio.Group
        onChange={(e) => {
          if (homeOwner === undefined) {
            setHomeOwner(e.target.value);
          }
          if (homeOwner === "no") {
            setIntentToBuy(e.target.value);
          }
        }}
      >
        <Radio.Button value="yes">Yes</Radio.Button>
        <Radio.Button value="no">No</Radio.Button>
      </Radio.Group>
    </Space>
  );
};
export default PreflightForm;
