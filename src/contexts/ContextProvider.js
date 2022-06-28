import React, { createContext, useContext, useState } from "react";

const StateContent = createContext();

const initialState = {
	chat: false,
	cart: false,
	useProfile: false,
	notification: false,
};

export const ContentProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);

	return (
		<StateContent.Provider value={{ activeMenu, setActiveMenu }}>{children}</StateContent.Provider>
	);
};

export const useStateContext = () => useContext(StateContent);
