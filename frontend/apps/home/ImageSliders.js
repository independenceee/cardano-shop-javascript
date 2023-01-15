import React from "react";
import Link from "next/link";

const ImageSliders = function ({ url }) {
    return (
        <div className="">
            <Link href="">
                <img src={url} alt="" />
            </Link>
        </div>
    );
};

export default ImageSliders;
