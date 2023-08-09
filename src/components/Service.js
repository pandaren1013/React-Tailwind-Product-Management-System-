import React from "react";
import { Free, Hand, Key } from "../assets";
const Service = () => {
  return (
    <div className=" md:p-16 p-6 text-center">
      <div>
        <p className="text-rose-600 text-[30px] max-[420px]:text-[25px]">What we Serve</p>
      </div>
      <div className="text-[60px] font-bold max-[420px]:text-[40px] dark:text-white">
        <p>Fruit And Vegetable Delivered To Your Home</p>
      </div>
      <div className="flex md:flex-row flex-col my-20 gap-20">
        <div className="flex flex-col  p-10 rounded-[10px] dark:text-white">
          <img alt="noImg" src={Free} className="pb-14"/>
          <p className="text-[30px]">Free shipping</p>
          <p className="text-slate-600 text-[20px] dark:text-slate-400">
            Enjoy Order in a hand using the fresness of groceries
          </p>
        </div>
        
        <div className="flex flex-col  p-10 rounded-[10px] dark:text-white">
          <img alt="noImg" src={Hand} />
          <p className="text-[30px]">15 days returns</p>
          <p className="text-slate-600 text-[20px] dark:text-slate-400">
            Order in a handy way using the freshness of the groceries
          </p>
        </div>
        <div className="flex flex-col  p-10 rounded-[10px] dark:text-white">
          <img alt="noImg" src={Key} />
          <p className="text-[30px]">Secure checkout</p>
          <p className="text-slate-600 text-[20px] dark:text-slate-400">
            If you get rotten items - return immediately to us.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Service;
