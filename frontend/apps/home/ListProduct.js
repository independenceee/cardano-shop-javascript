import React from "react";
import Product from "./Product";

const products = [
    {
        id: 1,
        name: "MacBook",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 2,
        name: "Lenovo Yoga",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 3,
        name: "Dell lattitude",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 4,
        name: "HP Pavillion",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
        title: "101 lời khuyên tài chính cá nhân từ Thái Phạm",
    },
];

const ListProduct = function () {
    return (
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 auto-cols-auto mt-[50px] p-[20px] gap-[1.5rem] ">
            {products.map(function (product, index) {
                return (
                    <Product
                        id={product.id}
                        key={product.id}
                        image={product.imgURL}
                        price={product.price}
                        title={product.title}
                    />
                );
            })}
        </div>
    );
};

export default ListProduct;
