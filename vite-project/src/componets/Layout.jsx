import Sidebar from "./Sidebar";
import Header from "./Header";
import { useLocation } from 'react-router-dom';

import layoutStyles from "./Layout.module.css";
import { IconSquareX } from "@tabler/icons-react";

import { useEffect, useState, useRef } from "react";

const Layout = ({ children }) => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
	const modalRef = useRef(null);
	const location = useLocation();

	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			setIsSideBarOpen(false);
		}
	};

	useEffect(() => {
		isSideBarOpen &&
			document.addEventListener("mousedown", (event) => {
				handleClickOutside(event);
			});

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isSideBarOpen]);

	return (
		<div className={layoutStyles.container}>
			<div
				className={`${layoutStyles.sidebar} ${!isSideBarOpen && layoutStyles.hidden
					}`}>
				<Sidebar modalRef={modalRef} />

				<div
					className={`${layoutStyles.closeSideBar}`}
					onClick={() => setIsSideBarOpen(false)}>
					<IconSquareX size={36} />
				</div>
			</div>

			<div className={layoutStyles.main}>
				<Header
					isSideBarOpen={isSideBarOpen}
					setIsSideBarOpen={setIsSideBarOpen}
				/>

				<div className={layoutStyles.children}>{children}
					{location.pathname === '/admin/Home' && 
						<>
							<div className=" text-5xl text-sky-800 mb-8 flex justify-center">
								Welcome to admin home page
								
							</div>
							<div>
								Welcome to our comprehensive management platform! This powerful site allows you to effortlessly manage all aspects of your business. Whether you need to add new customers or search through your extensive inventory, our user-friendly interface streamlines the process. Explore the various sections to create, edit, and organize your data with ease. Stay in control and optimize your operations with our efficient management system.
							</div>
						</>
					}
				</div>
			</div>
		</div>
	);
};

export default Layout;