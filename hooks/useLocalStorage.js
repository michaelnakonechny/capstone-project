import { useCallback, useEffect, useState } from 'react';

export default function useLocalStorage(key, defaultValues) {
  const [values, setValues] = useState(defaultValues);

  const setStateAndUpdateLocalStorage = useCallback(
    (value) => {
      setValues(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  useEffect(() => {
    const stored = window.localStorage.getItem(key);
    if (stored !== null) {
      setValues(JSON.parse(stored));
    }
  }, [key]);

  return [values, setStateAndUpdateLocalStorage];
}
