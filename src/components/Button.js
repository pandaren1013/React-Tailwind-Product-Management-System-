import React from "react";
const Button=({styles})=>(
    <button className={`py-4 px-6 font-medium text-[18px] bg-rose-600 rounded-[10px] text-white ${styles}`}>
        Order Now
    </button>
);
export default Button;