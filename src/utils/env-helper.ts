export const getEnv = (key: any) => {
  return (window as any).env[key];
};
