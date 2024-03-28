import Eheader from "./Eheader";
import Esidebar from "./Esidebar";
import layoutStyles from "./Elayout.module.css";
import { IconSquareX } from "@tabler/icons-react";

import { useEffect, useState, useRef } from "react";

const ELayout = ({ children }) => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
	const modalRef = useRef(null);

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
				className={`${layoutStyles.sidebar} ${
					!isSideBarOpen && layoutStyles.hidden
				}`}>
				<Esidebar modalRef={modalRef} />

				<div
					className={`${layoutStyles.closeSideBar}`}
					onClick={() => setIsSideBarOpen(false)}>
					<IconSquareX size={36} />
				</div>
			</div>

			<div className={layoutStyles.main}>
				<Eheader
					isSideBarOpen={isSideBarOpen}
					setIsSideBarOpen={setIsSideBarOpen}
				/>

				<div className={layoutStyles.children}>{children}</div>
			</div>
		</div>
	);
};

export default ELayout;