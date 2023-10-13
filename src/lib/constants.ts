import addDashesToUUID from "@/helpers/addDashesToUuid";
import resolveEnvVar from "@/helpers/resolveEnvVar";

export const NEXT_PUBLIC_TEST_A = addDashesToUUID(
  resolveEnvVar("NEXT_PUBLIC_TEST_A")
);
export const NEXT_PUBLIC_TEST_B = addDashesToUUID(
  resolveEnvVar("NEXT_PUBLIC_TEST_B")
);
export const NEXT_PUBLIC_TEST_C = addDashesToUUID(
  resolveEnvVar("NEXT_PUBLIC_TEST_C")
);
export const NEXT_PUBLIC_TOS = addDashesToUUID(
  resolveEnvVar("NEXT_PUBLIC_TOS")
);
