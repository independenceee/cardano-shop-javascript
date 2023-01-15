import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageSliders from "./ImageSliders";

const datas = [
    {
        id: 1,
        url: "https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBanner1.bfee48c0.jpeg&w=3840&q=75",
    },
    {
        id: 2,
        url: "https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBanner4.e619d7ee.jpg&w=3840&q=75",
    },
    {
        id: 2,
        url: "https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBanner3.460fa765.jpg&w=3840&q=75",
    },
    {
        id: 2,
        url: "https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBanner2.1e467930.jpg&w=3840&q=75",
    },
    {
        id: 2,
        url: "https://shop.cardano2vn.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBanner1.bfee48c0.jpeg&w=3840&q=75",
    },
];

const ImageSlider = function () {
    let setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Slider {...setting}>
            {datas.map((url, index) => (
                <ImageSliders key={url.id} url={url.url} />
            ))}
        </Slider>
    );
};

export default ImageSlider;
