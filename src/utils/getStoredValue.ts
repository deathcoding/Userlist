export function getStoredValue<T>(key: string, initialValue: T): T {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  } catch (error) {
    console.error("Can't read from local storage! Error:", error);
    return initialValue;
  }
}
