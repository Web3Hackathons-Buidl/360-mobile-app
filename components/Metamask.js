// 'use client'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { Metadata } from "@decommas/sdk/distCJS/business/namespaces/metadata";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        checkInstallationImmediately: false,
        dappMetadata: {
          name: "360 Mobile App",
          url: window.location.host,
        },
      }}
    >
      <App />
    </MetaMaskProvider>
  </React.StrictMode>
);
