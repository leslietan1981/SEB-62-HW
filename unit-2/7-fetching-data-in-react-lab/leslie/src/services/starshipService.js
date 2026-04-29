import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsPending(true);
    setIsError(false);
    setError(null);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        setIsError(true);
        setError("Fetch error.");
      }

      const resData = await res.json();
      setData(resData);
    } catch (error) {
      setIsError(true);
      setError(error instanceof Error ? error.message : "Error in starshipService.");
    }

    setIsPending(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isPending, isError, error };
};

const getStarshipsData = () => {
  return useFetch("https://swapi.info/api/starships");
};

export { getStarshipsData };
