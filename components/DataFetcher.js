import React, { useEffect, useState } from "react";
import { Decommas } from "@decommas/sdk";
import dotenv from "dotenv";
import { processEnv } from "@next/env";

dotenv.config();
const API_KEY = "e176f1b01d4b4b212e45c3285aea71416c765768";
const decommas = new Decommas(API_KEY);

const DataFetcher = () => {
  const [decommasData, setDecommasData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const address = "0x5C0b2E97109a6aee0F40D63B5d70F6e9DD137240";
        const apiKey = "e176f1b01d4b4b212e45c3285aea71416c765768";

        const tokens = await decommas.address.getTokens({ address }, apiKey);
        console.log("Tokens:", tokens);

        setDecommasData(tokens);
      } catch (error) {
        console.error("Error fetching Decommas data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("DATA", decommasData);

  return (
    <div>
      {decommasData?.result.length > 0 ? (
        decommasData?.result.map((token, index) => (
          <div key={index}>
            {/* Display the DeCommas data here */}
            <p>Name: {token.name}</p>
            <p>Symbol: {token.symbol}</p>
            <p>Actual_Price: {token.actual_price}</p>
            <br />
            {/* Add more fields as needed */}
          </div>
        ))
      ) : (
        <p>Fetching Data...</p>
      )}
    </div>
  );
};

export default DataFetcher;
