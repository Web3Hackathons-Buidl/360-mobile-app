import React, { useEffect, useState } from "react";
import { Decommas, ChainName } from "@decommas/sdk"; // Import ChainName
import { processEnv } from "@next/env";
import dotenv from "dotenv";

dotenv.config();
const API_KEY = "e176f1b01d4b4b212e45c3285aea71416c765768";
const decommas = new Decommas(API_KEY);

const DataFetcher = () => {
  const ethereumAddress = "0x81D9069957Bfbd6fb29C3b0686Ce78397FF3E009";

  const getVitalikERC20Balances = async (address) => {
    try {
      const balances = await decommas.address.getTokens({ address });
      console.log(balances);
    } catch (error) {
      console.error(error);
      // Handle the error as needed
    }
  };

  const fetchData = async () => {
    try {
      const address = "0x5C0b2E97109a6aee0F40D63B5d70F6e9DD137240";
      const tokens = await decommas.address.getTokens({ address });
      return tokens;
    } catch (error) {
      console.error("Error fetching Decommas data:", error);
      return [];
    }
  };

  const [decommasData, setDecommasData] = useState([]);

  useEffect(() => {
    fetchData().then((tokens) => {
      setDecommasData(tokens);
    });
  }, []);

  return (
    <div>
      <div>Fetching Data...</div>
      {decommasData.length > 0 ? (
        decommasData.map((token, index) => (
          <div key={index}>
            {/* Display the DeCommas data here */}
            <p>Name: {token.name}</p>
            <p>Symbol: {token.symbol}</p>
            {/* Add more fields as needed */}
          </div>
        ))
      ) : (
        <div>No Data Available.</div>
      )}
    </div>
  );
};

export default DataFetcher;
