import React, { useEffect } from "react";
import { Decommas, ChainName } from "@decommas/sdk";

const API_KEY = "e176f1b01d4b4b212e45c3285aea71416c765768";
const decommas = new Decommas(API_KEY);

const DataFetching = () => {
  const getNamespacesUseCases = async () => {
    const getTokensParams = {
      address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    };

    const getTransactionDetailParams = {
      chainName: ChainName.MAINNET,
      txHash:
        "0x1d13160c69bac11b359585f37ffe8ba421e9f775852ea25b5b3b1ffab1f217de",
    };

    const getNftParams = {
      chainName: ChainName.MAINNET,
      contractAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
      tokenId: 1,
    };

    const tokens = await decommas.address.getTokens(getTokensParams);
    console.log(tokens);

    const transactionDetails = await decommas.tx.getDetail(
      getTransactionDetailParams
    );
    console.log(transactionDetails);

    const nftMetadata = await decommas.metadata.getNft(getNftParams);
    console.log(nftMetadata);
  };

  useEffect(() => {
    getNamespacesUseCases();
  }, []);

  return <div>Fetching data...</div>;
};

export default DataFetching;
