import addDashesToUUID from "@/helpers/addDashesToUuid";

export const resolveEnvVar = (envVarName: string) => {
  const envVar = process.env[envVarName];
  if (envVar === undefined) {
    throw new Error(`${envVarName} is undefined`);
  }
  return envVar;
};

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
