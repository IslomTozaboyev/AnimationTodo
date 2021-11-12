import { useState } from "react";

export const UseFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setErr(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, err];
};
