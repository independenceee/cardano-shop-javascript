import React from "react";
import { useRouter } from "next/router";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
                    101 lời khuyên tài chính cá nhân từ thái phạm.
                </p>
                <div className="flex items-center justify-between mt-[2.5rem]">
                    <div className="flex items-center rounded-[8px] border-[1px] border-[rgb(160,174,192)] shadow-product overflow-hidden">
                        <div className="flex items-center justify-center h-[36px] transition-all duration-300 ease-in-out py-[5px] px-[10px] hover:bg-gray-300">
                            <GrSubtract />
                        </div>
                        <p className="font-[600] px-[10px]">1</p>
                        <div className="flex items-center justify-center h-[36px] transition-all duration-300 ease-in-out py-[5px] px-[10px] hover:bg-gray-300">
                            <GrAdd />
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <p className="text-[28px] font-[700] mr-[0.5rem]">1</p>
                        <span className="relative p-0 m-0 border-0 opacity-100 bg-none overflow-hidden w-[25px] h-[25px] inline-block box-border">
                            <img
                                className="absolute inset-0 box-border block p-0 border-none m-auto w-0 h-0 min-h-full min-w-full max-h-full max-w-full object-cover"
                                src="https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAdaCoinSmall.ecf61ff1.png&w=32&q=75"
                                alt=""
                            />
                        </span>
                    </div>
                </div>
                <div className="mt-[1.25rem] grow-1">
                    <p className="text-[14px] font-[600]">
                        Product description
                    </p>
                </div>
                <p className="max-h-[290px] overflow-y-auto text-15px opacity-50 mt-[0.75rem] text-black">
                    Thể hiện ngay trong chính tiêu đề của cuốn sách, “101 lời
                    khuyên về tài chính cá nhân từ Thái Phạm” bao gồm 101 lời
                    khuyên của Thái Phạm được phân bổ trong 7 chương sách, đi từ
                    mở tư duy để bạn có lối tiếp cận đồng tiền như một người
                    giàu, giúp bạn tháo dỡ được những nghi ngại của bản thân khi
                    làm việc với những con số, hiểu được dòng chảy tiền bạc
                    trong đời sống của bạn, cho đến chào đón những ý tưởng mới
                    để đầu tư len lỏi và chuyển động cùng bạn, ngoài ra còn có
                    cả chủ đề tiền bạc trong hôn nhân và cuộc sống. Con số 101
                    cũng mang ý nghĩa cung cấp những kiến thức nền tảng, “a bờ
                    cờ” nhất, để dù độc giả không có kiến thức nền về kinh tế,
                    tài chính đi chăng nữa, vẫn có thể tự tin để hiểu và ứng
                    dụng được.
                </p>
                <div className="flex items-center justify-center mt-[2.5rem] p-[15px] bg-orange-400 cursor-pointer text-white rounded-[12px] shadow-product transition-all duration-300 ease-out hover:bg-orange-500">
                    <AiOutlineShoppingCart className="w-[25px] h-[25px]" />
                    <p className="ml-[0.75rem] ">ADD TO CART</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
