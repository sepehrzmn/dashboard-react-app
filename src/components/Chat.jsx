import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { chatData } from "../data/dummy";
import Button from "./Button";
import { useStateContext } from "../contexts/ContextProvider";

const Chat = () => {
  const { currentColor, handleClick } =
    useStateContext();

  return (
    <div className="absolute top-16 left-0 sm:left-auto sm:right-14 md:right-40 dark:text-slate-100 w-full sm:w-96 nav-item px-2 ">
      <div className="bg-white dark:bg-secondary-dark-bg rounded-xl p-3  ">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <p className="font-semibold text-lg">
              Messages
            </p>
            <button
              type="button"
              className="text-xs rounded p-1 px-2 bg-orange-500 text-white"
            >
              5 New
            </button>
          </div>
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
        <div className="mt-5">
          {chatData.map((item, index) => (
            <div
              key={index}
              className="flex item-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.message}
                  className="rounded-full w-10 h-10"
                />
                <span
                  style={{
                    background: currentColor,
                  }}
                  className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                />
              </div>
              <div>
                <p className="font-semibold">
                  {item.message}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
