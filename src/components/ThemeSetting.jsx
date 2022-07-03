import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSetting = () => {
  const { setColor, setMode, currentColor, setThemeSettings, currentMode } = useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400 pl-3">
        <div className="flex justify-between items-center p-4">
          <p className="font-semibold text-lg">Setting</p>
          <button
            type="button"
            onClick={() => {
              setThemeSettings(false);
            }}
            className="rounded-full text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel color="rgb(153,171,180)" />
          </button>
        </div>
        <div className="flex flex-col border-t-1 border-color p-4">
          <p className="capitalize font-semibold text-lg">theme option</p>
          <div className="mt-4 ">
            <input
              type="radio"
              name="theme"
              id="light"
              onClick={setMode}
              value="Light"
              className="cursor-pointer"
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              light
            </label>
          </div>
          <div className="mt-4 ">
            <input
              type="radio"
              name="theme"
              id="dark"
              onClick={setMode}
              value="Dark"
              className="cursor-pointer"
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="flex flex-col border-t-1 border-color p-4">
          <p className="capitalize font-semibold text-lg">theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((colorBox, index) => (
              <TooltipComponent key={index} content={colorBox.name} position="TopCenter">
                <div className="relative mt-2 cursor-pointer gap-0 items-center">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: colorBox.color }}
                    onClick={() => setColor(colorBox.color)}
                  >
                    <BsCheck className={`ml-2 text-2xl text-white ${colorBox.color !== currentColor && "hidden"}`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSetting;
