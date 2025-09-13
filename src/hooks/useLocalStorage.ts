import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { getStoredValue } from "../utils/getStoredValue";
import { setValueToStore } from "../utils/setValueToStore";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(getStoredValue(key, initialValue));

  useEffect(() => {
    setValueToStore(key, value);
  }, [key, value]);

  return [value, setValue];
}
