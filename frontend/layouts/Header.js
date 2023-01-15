import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CounterProduct from "./CounterProduct";
import ConnectButton from "./ConnectButton";
import Modal from "../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import modalActions from "../store/modal-slice";
import { WalletContext } from "../contexts/WalletContext";

const styles = {};

const Header = function () {
    const { connected } = useContext(WalletContext);
    const router = useRouter();

    const showModal = useSelector(function (state) {
        return state.modal.isShowModal;
    });

    useEffect(() => {
        if (connected) {
            handleHiddenModal();
        }
        return () => {};
    });

    const dispatch = useDispatch();

    const handleShowModal = function () {
        dispatch(modalActions.actions.showModalOptions());
    };

    const handleHiddenModal = function () {
        dispatch(modalActions.actions.hiddenModalOptions());
    };

    const moveToCart = function () {
        router.push("/cart");
    };

    return (
        <header className="h-[60px] fixed top-0 left-0 flex items-center justify-between w-full z-20 bg-[#ffffff] border-b-2 border-b-[rgb(207, 207, 207)] px-[16px] py-[8px]">
            <a className="flex items-center " href="/">
                <img
                    className="w-[40px] h-[40px]"
                    src="https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bee5964c.png&w=48&q=75"
                    alt=""
                />
                <p className="font-bold text-[20px] text-[#1A202c] ml-[12px]">
                    Cardano shop
                </p>
            </a>
            <nav className="flex items-center">
                <button
                    onClick={moveToCart}
                    className="flex items-center h-[44px] bg-[rgb(237,237,237)] py-[5px] px-[10px] min-w-[80px] cursor-pointer  rounded-[8px] mr-[12px]"
                >
                    <AiOutlineShoppingCart className="text-[25px]" />
                    <CounterProduct />
                </button>
                <ConnectButton connectButton={handleShowModal} />
            </nav>

            {showModal && (
                <Modal
                    showModal={handleShowModal}
                    hiddenModal={handleHiddenModal}
                />
            )}
        </header>
    );
};

export default Header;
