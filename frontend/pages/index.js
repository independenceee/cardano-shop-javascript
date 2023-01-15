import React from "react";
import ImageSlider from "../apps/home/ImageSlider";
import ListProduct from "../apps/home/ListProduct";
const Home = function () {
    return (
        <main className="scroll-smooth overflow-hidden mt-[60px]">
            <ImageSlider />
            <ListProduct />
        </main>
    );
};
export default Home;
