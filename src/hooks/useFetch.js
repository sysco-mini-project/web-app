import { useEffect, useState } from "react";

const useFetch = (func) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const response = await func();
        setData(response.data);
        setLoading(true);

        // alert('data got')
      } catch (err) {
        console.log("errrrrrrrrrror ");
        console.log(err);
        setError(err);
        // alert('data error')
      } finally {
        setLoading(false);
      }
    })();
  }, [func]);

  return [data, error, loading, setData, setLoading];
};

export { useFetch };
