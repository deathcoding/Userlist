export function setValueToStore<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Can't write to local storage! Error:", error);
  }
}
