import React from "react";
import CartContent from "../apps/cart/CartContent";
import CartAction from "../apps/cart/CartAction";

const styles = {
    container: `bg-[rgb(246,246,246)] min-h-[calc(100vh -260px)] p-[20px] mt-[60px]`,
    wrapper: ``,
};

const Cart = function () {
    return (
        <div className={styles.container}>
            <div className="gird gap-[0.75rem] grid-cols-cart">
                <CartContent />
                <CartAction />
            </div>
        </div>
    );
};

export default Cart;
