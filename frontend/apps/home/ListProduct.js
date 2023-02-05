import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const ListProduct = function () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async function () {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/products",
                );
                setProducts(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllProducts();
    }, []);
    return (
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 auto-cols-auto mt-[50px] p-[20px] gap-[1.5rem] ">
            {products.map(function (product, index) {
                return (
                    <Product
                        key={product.id}
                        id={product.id}
                        image={product.imgURL}
                        price={product.price}
                        title={product.name}
                    />
                );
            })}
        </div>
    );
};

export default ListProduct;
