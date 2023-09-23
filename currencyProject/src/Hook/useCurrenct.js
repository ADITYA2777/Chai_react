import { useEffect, useState } from "react";

async function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data[currency]);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [currency]);

  console.log(data);

  return data;
}

export default useCurrencyInfo;
