import React, {
  createContext,
  useContext,
  useState,
} from "react";

const StateContent = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContentProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] =
    useState(true);
  const [isChecked, setIsChecked] =
    useState(initialState);
  const [screenSize, setScreenSize] =
    useState(undefined);
  const [currentColor, setCurrentColor] =
    useState("#1A97F5");
  const [currentMode, setCurrentMode] =
    useState("Light");
  const [themeSettings, setThemeSettings] =
    useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem(
      "themeMode",
      e.target.value
    );

    setThemeSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("themeColor", color);

    setThemeSettings(false);
  };

  const handleClick = (clicked = false) => {
    if (!clicked) {
      setIsChecked(initialState);
      return;
    }
    setIsChecked({
      ...initialState,
      [clicked]: true,
    });
  };

  const value = {
    activeMenu,
    setActiveMenu,
    isChecked,
    setIsChecked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    currentMode,
    setMode,
    setColor,
    setThemeSettings,
    themeSettings,
  };

  return (
    <StateContent.Provider value={value}>
      {children}
    </StateContent.Provider>
  );
};

export const useStateContext = () =>
  useContext(StateContent);
