import React, { createContext, useContext, useState } from "react";

const StateContent = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContentProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isChecked, setIsChecked] = useState(initialState);
	const [screenSize, setScreenSize] = useState(undefined);
	const handleClick = (clicked) => {
		setIsChecked((preventIsChecked) => ({ ...initialState, [clicked]: true }));
	};

	const value = {
		activeMenu,
		setActiveMenu,
		isChecked,
		setIsChecked,
		handleClick,
		screenSize,
		setScreenSize,
	};

	return <StateContent.Provider value={value}>{children}</StateContent.Provider>;
};

export const useStateContext = () => useContext(StateContent);
