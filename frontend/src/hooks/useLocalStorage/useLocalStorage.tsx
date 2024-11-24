import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/**
 * Function to copy text to the clipboard.
 * @param localStorageKey The text to copy to the clipboard.
 * @param initialState The text to copy to the clipboard.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the text was copied successfully, or `false` otherwise.
 */
export function useLocalStorage<S>(
  localStorageKey: string,
  initialState: S,
): [S, Dispatch<SetStateAction<S>>] {
  const localStorageState = JSON.parse(
    localStorage.getItem(localStorageKey) || JSON.stringify(initialState),
  );
  const [value, setValue] = useState(localStorageState);

  useEffect(() => {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(localStorageKey, serializedState);
  }, [localStorageKey, value]);

  return [value, setValue];
}
