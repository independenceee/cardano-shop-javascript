import React from "react";
import WalletProvider from "./WalletContext";
const ContextProvider = function ({ children }) {
    return <WalletProvider>{children}</WalletProvider>;
};

export default ContextProvider;
