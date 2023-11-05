"use client";
import React, { useEffect, useState } from "react";

const initialState = {
  wallet: null,
  isMetamaskInstalled: false,
  status: "loading",
  balance: null,
};

function metamaskReducer(state, action) {
  switch (action.type) {
    case "connect": {
      const { wallet, balance } = action;
      const newState = { ...state, wallet, balance, status: "idle" };
      const info = JSON.stringify(newState);
      window.localStorage.setItem("metamaskState", info);

      return newState;
    }
    case "disconnect": {
      window.localStorage.removeItem("metamaskState");
      if (typeof window.ethereum !== undefined) {
        window.ethereum.removeAllListeners(["accountsChanged"]);
      }
      return { ...state, wallet: null, balance: null };
    }
    case "pageLoaded": {
      const { isMetamaskInstalled, balance, wallet } = action;
      return { ...state, isMetamaskInstalled, status: "idle", wallet, balance };
    }
    case "loading": {
      return { ...state, status: "loading" };
    }
    case "idle": {
      return { ...state, status: "idle" };
    }
    default: {
      throw new Error("Unhandled action type");
    }
  }
}

const MetamaskContext = React.createContext({
  state: initialState,
  dispatch: () => {},
});

function MetamaskProvider({ children }) {
  const [state, dispatch] = useState(initialState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ethereumProviderInjected = typeof window.ethereum !== "undefined";
      const isMetamaskInstalled =
        ethereumProviderInjected && Boolean(window.ethereum.isMetaMask);

      const local = window.localStorage.getItem("metamaskState");

      if (local) {
        // TODO: Implement your local storage parsing logic
      }

      dispatch({
        type: "pageLoaded",
        isMetamaskInstalled,
        wallet: null, // Replace with your wallet data
        balance: null, // Replace with your balance data
      });
    }
  }, []);

  return (
    <MetamaskContext.Provider value={{ state, dispatch }}>
      {children}
    </MetamaskContext.Provider>
  );
}

function useMetamask() {
  const context = React.useContext(MetamaskContext);
  if (!context) {
    throw new Error("useMetamask must be used within a MetamaskProvider");
  }
  return context;
}

export { MetamaskProvider, useMetamask };
