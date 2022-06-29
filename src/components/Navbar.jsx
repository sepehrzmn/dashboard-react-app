import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import Avatar from "../data/avatar.jpg";
import { useStateContext } from "../contexts/ContextProvider";
import { Chat, Cart, UserProfile, Notification } from "../components";

const NavbarButton = ({ title, customFunc, icon, color, dotColor }) => {
	return (
		<TooltipComponent content={title} position="BottomCenter">
			<button
				type="button"
				onClick={customFunc}
				className={`text-[${color}] relative text-xl rounded-full p-3 hover:bg-light-gray`}>
				<span
					className={`bg-[${dotColor}] absolute inline-flex rounded-full  h-2 w-2 top-2 right-2`}
				/>
				{icon}
			</button>
		</TooltipComponent>
	);
};

const Navbar = () => {
	const {
		activeMenu,
		setActiveMenu,
		isChecked,
		setIsChecked,
		handleClick,
		screenSize,
		setScreenSize,
	} = useStateContext();

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener("resize", handleResize);

		handleResize();

		return window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<nav className="flex justify-between p-2 md:mx-6 relative">
			<NavbarButton
				title="Menu"
				customFunc={() => setActiveMenu((preventActiveMenu) => !preventActiveMenu)}
				color="blue"
				icon={<AiOutlineMenu />}
			/>
			<div className="flex">
				<NavbarButton
					title="Menu"
					customFunc={() => handleClick("cart")}
					color="blue"
					icon={<FiShoppingCart />}
				/>
				<NavbarButton
					title="Chat"
					customFunc={() => handleClick("chat")}
					color="blue"
					dotColor="#03C9D7"
					icon={<BsChatLeft />}
				/>
				<NavbarButton
					title="Notifications"
					customFunc={() => handleClick("notification")}
					color="blue"
					dotColor="#03C9D7"
					icon={<RiNotification3Line />}
				/>
				<TooltipComponent content="Profile" position="BottomCenter">
					<div
						className="flex items-center gap-2 p-1 cursor-pointer hover:bg-light-gray rounded-lg text-gray-400 text-14"
						onClick={() => {
							handleClick("userProfile");
						}}>
						<img src={Avatar} alt="userProfile" className="rounded-full w-8 h-8" />
						<p>
							<span>Hi, </span>
							<span className="font-bold ml-1">Micheal</span>
						</p>
						<MdKeyboardArrowDown />
					</div>
				</TooltipComponent>
				{isChecked.chat && <Chat />}
				{isChecked.cart && <Cart />}
				{isChecked.userProfile && <UserProfile />}
				{isChecked.notification && <Notification />}
			</div>
		</nav>
	);
};

export default Navbar;
