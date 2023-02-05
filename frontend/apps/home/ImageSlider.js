import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import ImageSliders from "./ImageSliders";

const ImageSlider = function () {
    let setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const [slider, setSlider] = useState([]);

    useEffect(() => {
        const fetchAllSlider = async function () {
            try {
                const dataslider = await axios.get(
                    "http://localhost:5000/api/sliders",
                );
                setSlider(dataslider.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllSlider();
    }, []);

    return (
        <Slider {...setting}>
            {slider.map((url, index) => (
                <ImageSliders key={url.id} url={url.url} />
            ))}
        </Slider>
    );
};

export default ImageSlider;
