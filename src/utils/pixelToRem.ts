export const pixelToRem = (...values: number[]) => {
  return values.reduce((acc, curr) => (acc += curr / 16 + `rem `), '').trim();
};
