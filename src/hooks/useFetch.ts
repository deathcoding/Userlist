import { useEffect, useState } from "react";

interface IUseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export default function useFetch<T>(url: string): IUseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
