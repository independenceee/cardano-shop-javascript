import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";

const styles = {};

const Product = function ({ id, price, title, image }) {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleAddToCart = async function () {
        try {
            await dispatch(
                cartAction.addToCart({
                    image,
                    id,
                    price,
                }),
            );

            await router.push("/cart");
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuyNow = async function (e) {
        try {
            e.preventDefault();
            await router.push("/checkout");
        } catch (error) {
            console.log(error);
        }
    };

    const handleRouter = function (id) {
        router.push(`/product/${id}`);
    };
    return (
        <div
            onClick={() => {handleRouter(id)}}
            className="w-[auto] h-[473.9px] flex flex-col overflow-hidden bg-[#ffffff] cursor-pointer border-[2px] border-transparent py-[20px] px-[10px] rounded-[12px] transition-all shadow-product hover:border-[2px] hover:border-blue-400 hover:border-solid hover:transition hover:duration-500"
        >
            <div className="">
                <span className="flex items-center justify-center">
                    <img
                        className="w-[280px] h-[258px]"
                        src="https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProduct1.ef8175c5.png&w=384&q=75"
                        alt=""
                    />
                </span>
            </div>
            <p className="mt-[0.75rem]">{title}</p>
            <div className=" mt-[8px] flex items-center">
                <p className="mr-[8px] text-[#1A202C] font-[700] text-[15px]">
                    Price:
                </p>
                <p className="mr-[12px] text-[#1A202C] text-[20px] font-[700]">
                    {price}
                </p>
                <span className="">
                    <img
                        className=" w-[25px] h-[25px] mx-auto object-cover"
                        src="https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAdaCoinSmall.ecf61ff1.png&w=32&q=75"
                        alt=""
                    />
                </span>
            </div>
            <div className="grid gap-[0.75rem] grid-cols-2 mt-[0.75rem] w-full">
                <button
                    onClick={() => handleAddToCart()}
                    className="w-[auto] h-[40px] text-[#ffffff] rounded-[0.375rem] bg-[#ED8936] font-[400] py-0 px-[16px]"
                >
                    Add to cart
                </button>
                <button
                    onClick={() => handleBuyNow()}
                    className="w-[auto] h-[40px] text-[#ffffff] rounded-[0.375rem] bg-[#4299E1] font-[400] py-0 px-[16px]"
                >
                    Buy now
                </button>
            </div>
        </div>
    );
};

export default Product;
