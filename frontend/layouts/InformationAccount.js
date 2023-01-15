import React, { useContext } from "react";
import { WalletContext } from "../contexts/WalletContext";

const InformationAccount = function ({}) {
    const { address, balance, disconnect } = useContext(WalletContext);

    return (
        <div className=" rounded-md shadow-md absolute py-[8px] bg-[#ffffff] font-bold text-[14px] text-[#1A202C] w-[350px] flex flex-col items-start top-[54px] right-0">
            <div className="px-[12px] py-[6px] flex items-center select-none w-full h-[33px]">
                <p className="mr-[4px]">Address:</p>
                <p className="" title={address}>
                    {address.slice(0, 33)}...
                </p>
            </div>
            <div className="px-[12px] py-[6px] flex items-center w-full h-[33px] justify-between">
                <div className="mr-[4px]">Balance: </div>
                <div className="flex items-center ">
                    <div className="mr-[10px]">{balance[0].quantity}</div>
                    <img
                        src="https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAdaCoinSmall.ecf61ff1.png&w=32&q=75"
                        alt=""
                        className="w-[20px] h-[20px]"
                    />
                </div>
            </div>
            <div className="px-[12px] py-[6px] flex items-center select-none w-full h-[33px]">
                <p className="mr-[12px]">View order details</p>
            </div>

            <div
                onClick={() => disconnect()}
                className="px-[12px] py-[10px] justify-center  flex items-center select-none w-full h-[33px]"
            >
                <p className="mr-[12px] hover:border-blue-400 hover:border-[1px] hover:border-solid px-[10px] py-[2px] rounded">
                    DISCONNECT
                </p>
            </div>
        </div>
    );
};

export default InformationAccount;
