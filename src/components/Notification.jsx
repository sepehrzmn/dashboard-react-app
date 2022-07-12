import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from ".";

const Notification = () => {
  const { currentColor, handleClick } =
    useStateContext();

  return (
    <div className="nav-item absolute left-0 sm:left-auto sm:right-5 md:right-40 top-16 w-full sm:w-96">
      <div className="bg-white dark:bg-secondary-dark-bg dark:text-slate-100 rounded-xl p-3 ">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <p className="font-semibold text-lg">
              Notification
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
              className="flex items-center leading-8 gap-5 border-b-1 border-color p-3"
            >
              <img
                src={item.image}
                alt={item.message}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold ">
                  {item.message}
                </p>
                <p className="text-gray-500 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
