"use client";

import { Radio, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import Show from "../../show";

export interface PreflightValues {
  homeOwner: boolean | undefined;
  homeBuyer: boolean | undefined;
}
const { Title } = Typography;
const PreflightForm = ({
  onTargetValidated,
  onInvalidTarget,
}: {
  onTargetValidated: (payload: {
    valid: boolean;
    values: PreflightValues;
  }) => void;
  onInvalidTarget: (values: PreflightValues) => void;
}) => {
  const [homeOwner, setHomeOwner] = useState<string>();
  const [homeBuyer, setHomeBuyer] = useState<string>();

  useEffect(() => {
    console.log(homeOwner, homeBuyer);
    if (homeOwner === undefined || homeBuyer === undefined) return;

    const values = {
      homeOwner:
        homeOwner === "no" ? false : homeOwner === "yes" ? true : undefined,
      homeBuyer:
        homeBuyer === "no" ? false : homeBuyer === "yes" ? true : undefined,
    };
    if (homeOwner === "no" && homeBuyer === "no") {
      onTargetValidated({ valid: false, values });
      onInvalidTarget(values);
    }

    if (homeOwner === "yes" || homeBuyer === "yes") {
      onTargetValidated({ valid: true, values });
    }
  }, [homeOwner, homeBuyer]);

  return (
    <Show
      when={!homeOwner}
      otherwise={
        <Space align="center" direction="vertical">
          <Title level={4} style={{ width: "100%", margin: 0 }}>
            Are you planning to buy a home?
          </Title>
          <Radio.Group
            onChange={(e) => {
              setHomeBuyer(e.target.value);
            }}
            value={homeBuyer}
          >
            <Radio.Button value="yes">Yes</Radio.Button>
            <Radio.Button value="no">No</Radio.Button>
          </Radio.Group>
        </Space>
      }
    >
      <Space align="center" direction="vertical">
        <Title level={4} style={{ width: "100%", margin: 0 }}>
          Are you a home owner?
        </Title>
        <Radio.Group
          onChange={(e) => {
            setHomeOwner(e.target.value);
          }}
          value={homeOwner}
        >
          <Radio.Button value="yes">Yes</Radio.Button>
          <Radio.Button value="no">No</Radio.Button>
        </Radio.Group>
      </Space>
    </Show>
  );
};
export default PreflightForm;
