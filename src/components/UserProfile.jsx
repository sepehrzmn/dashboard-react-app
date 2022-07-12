import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { userProfileData } from "../data/dummy";
import Button from "./Button";
import AvatarImage from "../data/avatar.jpg";
import { useStateContext } from "../contexts/ContextProvider";

const UserProfile = () => {
  const { currentColor, handleClick } =
    useStateContext();

  return (
    <div className="absolute top-16 right-0 dark:text-slate-100 w-full sm:w-96 nav-item px-2 ">
      <div className="bg-white dark:bg-secondary-dark-bg rounded-xl p-3  ">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">
            User Profile
          </p>
          <div
            onClick={handleClick}
            className="inline-block rounded-full"
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
        <div className="flex gap-5 item-center border-b-1 border-color pb-6 mt-6">
          <img
            src={AvatarImage}
            alt="Micheal"
            className="rounded-full h-24 w-24"
          />
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-xl">
              Michael Roberts
            </p>

            <p className="text-gray-500 text-sm font-semibold">
              info@shop.com
            </p>
            <p className="text-gray-500 text-xs">
              Administrator
            </p>
          </div>
        </div>
        <div>
          {userProfileData.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464d]"
            >
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  background: item.iconBg,
                }}
                className="p-2 w-10 h-10 rounded-full flex justify-center items-center"
              >
                {item.icon}
              </button>
              <div>
                <p className="font-semibold">
                  {item.title}
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
            text="Logout"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
