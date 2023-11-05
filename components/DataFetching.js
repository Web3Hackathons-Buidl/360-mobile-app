import React, { useEffect, useState } from "react";
import axios from "axios";
import ajax from "ajax";
import { Decommas } from "@decommas/sdk";
import { processEnv } from "@next/env";
import dotenv from "dotenv";
import handler from "app/api/whoami.js";

const cors = require("cors"); // Import the cors package

dotenv.config();
const API_KEY = "e176f1b01d4b4b212e45c3285aea71416c765768";
const decommas = new Decommas(API_KEY);

const DataFetcher = () => {
  const [decommasData, setDecommasData] = useState([]);
  console.log(DataFetcher);
  console.log(decommasData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const balances = await decommas.address.getTokens({
          address: ethereumAddress,
        });
        console.log(balances);
        const address = "0x81D9069957Bfbd6fb29C3b0686Ce78397FF3E009";
        console.log(address);
        const apiKey = process.env.DECOMMAS_API_KEY;
        const tokens = await decommas.address.getTokens({ address }, apiKey);
        console.log(tokens);
        // return tokens;
        setDecommasData(tokens);
      } catch (error) {
        console.error("Error fetching Decommas data:", error);
        // return [];
      }
    };
    const ethereumAddress = "0x81D9069957Bfbd6fb29C3b0686Ce78397FF3E009";
    fetchData();
  }, []);

  return (
    <div>
      {decommasData.length > 0 ? (
        decommasData.map((token, index) => (
          <div key={index}>
            {/* Display the DeCommas data here */}
            <p>Name: {token.name}</p>
            <p>Symbol: {token.symbol}</p>
            <p>Actual_Price: {token.actual_price}</p>
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
