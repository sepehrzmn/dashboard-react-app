import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLinks = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 cursor-default";
  const normalLinks =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg m-2 text-gray-700 dark:text-slate-300 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden md:hover:overflow-auto overflow-auto pb-10">
      {activeMenu && (
        <>
          <div
            className="flex justify-between items-center
					 w-full"
          >
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="flex items-center gap-3 ml-3 mt-4 text-xl
							 font-extrabold tracking-tight text-slate-900
							dark:text-white"
            >
              <SiShopware /> <span>Shopping</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {
                  setActiveMenu(!activeMenu);
                }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden ml-9"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title} className="text-gray-400 m-3 mt-4 uppercase">
                <p>{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={`${link.name}`}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) => (isActive ? activeLinks : normalLinks)}
                    style={({ isActive }) => (isActive ? { backgroundColor: currentColor } : {})}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
