// import { MetaMaskButton } from "@metamask/superface";
import React, { useState, useEffect } from "react";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";
import Web3 from "web3";

const web3 = new Web3(window.ethereum);

const MetaMaskButtons = () => {
  const [userAddress, setUserAddress] = useState("");
  const [contractData, setContractData] = useState("");
  const CONTRACT_ADDRESS = "0xf7987A1CE54D462F9b00574c5Af62C2Ddfb20B64"; // Replace with your contract address
  const ABI = []; // Replace with your contract's ABI
  const newValue = 123; // Replace with the value you want to set

  const connectToMetaMask = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const userAddress = accounts[0];
      setUserAddress(userAddress);

      const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
      const data = await contract.methods.getData().call();
      setContractData(data);
    } catch (error) {
      if (error.code === 4001) {
        // User denied account authorization
        // Handle the case where the user denied the connection request
      } else if (error.code === -32602) {
        // MetaMask is not enabled
        // Handle the case where MetaMask is not available
      } else {
        // Handle other errors
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      // Enable MetaMask
      connectToMetaMask();
    } else {
      // Handle the case where MetaMask is not available
    }
  }, []);

  return (
    <div className="metamask">
      <WagmiConfig
        config={createConfig({
          autoConnect: true,
          publicClient: createPublicClient({
            chain: mainnet,
            transport: http(),
          }),
        })}
      >
        {/* <MetaMaskButton theme={"light"} color="white"></MetaMaskButton> */}
        <div>
          <p>User Address: {userAddress}</p>
          <p>Contract Data: {contractData}</p>
        </div>
      </WagmiConfig>
    </div>
  );
};

export default MetaMaskButtons;
