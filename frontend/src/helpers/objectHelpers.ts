// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeEmptyParams = (obj: { [key: string]: any }) =>
  Object.keys(obj).reduce(
    (acc, key) =>
      obj[key] !== undefined && obj[key] !== '' && obj[key] !== null
        ? { [key]: obj[key], ...acc }
        : acc,
    {},
  );

