const resolveEnvVar = (envVarName: string) => {
  const envVar = process.env[envVarName];
  if (envVar === undefined) {
    throw new Error(`${envVarName} is undefined`);
  }
  return envVar;
};

export default resolveEnvVar;
