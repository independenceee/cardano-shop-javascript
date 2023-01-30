import React from "react";
import { useRouter } from "next/router";

const ProductDetail = function () {
    const router = useRouter();
    const productId = router.query.id;
    return (
        <div className="grid gap-[24px] grid-cols-2 p-[10px] mt-[60px]">
            <div className="flex items-center justify-center border-[2px] border-solid border-[rgb(226,232,240)] shadow-product rounded-[12px]">
                <span className="inline-block w-[600px] h-[600px] overflow-hidden box-border bg-none opacity-100 border-0 m-0 p-0 relative">
                    <img
                        className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain"
                        src="https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProductLarge1.581114ed.png&w=640&q=75"
                        alt=""
                    />
                </span>
            </div>
            <div className="flex flex-col pt-[30px] px-[30px] pb-[0px]">
                <p className="leading-[1.5] font-[700] text-[26px]">
                    101 lời khuyên tài chính cá nhân từ thái phạm.{" "}
                </p>
            </div>
        </div>
    );
};

export default ProductDetail;
