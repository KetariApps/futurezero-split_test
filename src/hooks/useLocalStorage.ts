import { useState, useEffect } from 'react';

type SetValue<T> = T | ((prevValue: T) => T);

function useLocalStorage<T>(
  key: string,
  initialValue: T | undefined = undefined
): [T | undefined, (value: SetValue<T | undefined>) => void] {
  // Get the initial value from local storage or use the provided initial value
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create state to hold the current value
  const [value, setValue] = useState<T | undefined>(initial);

  // Update local storage whenever the state changes
  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
