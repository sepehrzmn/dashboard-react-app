import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import {
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";

import { cartData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from ".";

const Cart = () => {
  const { currentColor, handleClick } =
    useStateContext();

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      <div className="h-screen float-right dark:text-slate-200 bg-white dark:bg-secondary-dark-bg transition-all md:w-400 py-8 px-4">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">
            Shopping Cart
          </p>
          <div
            className="rounded-full"
            onClick={handleClick}
          >
            <Button
              icon={<MdOutlineCancel />}
              color="rgb(153,171,180)"
              colorHover="light-gray"
              size="2xl"
              borderRadius="50%"
            />
          </div>
        </div>
        <div className="overflow-auto">
          {cartData.map((item, index) => (
            <div
              key={index}
              className="flex items-center leading-8 gap-5 border-1 my-2 border-color dark:border-slate-400 p-2 rounded-xl"
            >
              <img
                className="rounded-xl h-80 w-24"
                src={item.image}
                alt="item shopping"
              />
              <div>
                <p className="font-semibold">
                  {item.name}
                </p>
                <p className="text-gray-600 text-sm font-semibold">
                  {item.category}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <p className="font-semibold text-lg">
                    {item.price}
                  </p>
                  <div className="flex items-center border-1 border-r-0 border-color dark:border-slate-300 rounded ">
                    <p className="border-r-1 p-2 dark:border-slate-300 w-10 text-red-600 cursor-pointer text-lg flex justify-center items-center h-12">
                      <AiOutlineMinus />
                    </p>
                    <p className="border-r-1 p-2  dark:border-slate-300 w-10  text-gray-600  text-lg flex justify-center items-center h-12">
                      0
                    </p>
                    <p className="border-r-1 p-2 dark:border-slate-300 w-10 text-green-600 cursor-pointer text-lg flex justify-center items-center h-12">
                      <AiOutlinePlus />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">
              Sub Total
            </p>
            <p className="flex font-semibold">
              $890
            </p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500">Total</p>
            <p className="flex font-semibold">
              $890
            </p>
          </div>
          <div className="mt-5">
            <Button
              color="white"
              bgColor={currentColor}
              text="Place Order"
              borderRadius="10px"
              width="full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
