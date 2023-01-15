import React, { useState, createContext } from "react";
// import { useWallet } from "@martifylabs/mesh-react";
import { useWallet } from "@meshsdk/react";
import { BrowserWallet } from "@martifylabs/mesh";

export const WalletContext = createContext();

const WalletProvider = function ({ children }) {
    const { connect, connected, disconnect } = useWallet();
    const [nameWallet, setNameWallet] = useState("");
    const [balance, setBalance] = useState([]);
    const [address, setAddress] = useState("");
    const [wallets, setWallets] = useState("");

    const connectWallet = async function (walletName) {
        try {
            await connect(walletName);
            setNameWallet(walletName);
            const wallet = await BrowserWallet.enable(walletName);
            setWallets(BrowserWallet.getInstalledWallets());
            const balances = await wallet.getBalance();
            setBalance(balances);
            const address = await wallet.getChangeAddress();
            setAddress(address);
        } catch (error) {
            console.log(error);
        }
    };

    const disconnectWallet = async function () {
        try {
            if (!connected) {
                return;
            }
            await disconnect();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <WalletContext.Provider
            value={{
                address,
                balance,
                wallets,
                connected,
                disconnect,
                connectWallet,
                nameWallet,
            }}
        >
            {children}
        </WalletContext.Provider>
    );
};

export default WalletProvider;
