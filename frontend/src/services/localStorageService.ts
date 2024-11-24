export const setItemToLocalStorage = (
  key: string,
  value: string | number | boolean | object,
): void => {
  window.localStorage?.setItem(key, JSON.stringify(value));
};

export const getItemFromLocalStorage = (key: string) =>
  window.localStorage ? JSON.parse(<string>window.localStorage.getItem(key)) : null;

export const removeKeyFromStorage = (name: string) =>
  hasLocalStorage() && window.localStorage.removeItem(name);
const hasLocalStorage = (): boolean => {
  try {
    const storage = window.localStorage;
    const testKey = 'localStorage test';
    storage.setItem(testKey, 'test');
    storage.getItem(testKey);
    storage.removeItem(testKey);
  } catch (e) {
    return false;
  }
  return true;
};
