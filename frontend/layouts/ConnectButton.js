import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import InformationAccount from "./InformationAccount";
import { WalletContext } from "../contexts/WalletContext";
import showInformationAction from "../store/show-slice";

const styles = {
    connectButton: `flex items-center justify-center text-center rounded-[8px] font-[500] h-[40px] w-[131.61px] py-[16px] text-[#ffffff] bg-[#ED8936] hover:bg-[#C05621]`,
};

const ConnectButton = function ({ connectButton }) {
    const { connected } = useContext(WalletContext);

    const showInformation = useSelector(function (state) {
        return state.show.isShowInformation;
    });
    const dispatch = useDispatch();
    const handleShowInformation = function () {
        dispatch(showInformationAction.actions.showInformation());
    };

    if (!connected) {
        return (
            <div>
                <button
                    onClick={() => connectButton()}
                    className={styles.connectButton}
                >
                    Connect Wallet
                </button>
            </div>
        );
    }
    return (
        <button
            onClick={handleShowInformation}
            className="inline-flex items-center justify-center relative select-none appearance-none rounded-md font-semibold h-[44px] w-[67px] px-[16px] bg-[#EDF2F7]"
        >
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WFnA54h3YI02YzQ4_BZlORyUh6xR8rpdRELLi03m&s"
                alt=""
                className="w-[35px] h-[35px]"
            />
            {showInformation && <InformationAccount />}
        </button>
    );
};

export default ConnectButton;
