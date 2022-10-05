import { useCallback, useEffect, useState } from 'react';

export default function useLocalStorage(key, defaultValues) {
  //

  useEffect(() => {
    const defaultValuesString = JSON.stringify(defaultValues);
    window.localStorage.setItem(key, defaultValuesString);
  }, []);

  const [values, setValues] = useState(defaultValues);
  return [values, setValues];
}
