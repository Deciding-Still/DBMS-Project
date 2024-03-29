import headerStyles from "./Eheader.module.css";

import { IconHelp, IconSearch, IconMenu2 } from "@tabler/icons-react";

const Eheader = ({ isSideBarOpen, setIsSideBarOpen }) => {
	return (
		<div className={headerStyles.container}>
			{/* <div className={headerStyles.headerLeft}>
				<div
					className={headerStyles.sideBarToggle}
					onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
					<IconMenu2 size={22} />
				</div>

				<div className={headerStyles.pageTitle}>Payments</div>

				<div className={headerStyles.pageHelp}>
					<IconHelp size={15} />

					<span className={headerStyles.pageHelpText}>
						How it works
					</span>
				</div>
			</div> */}

			{/* <div className={headerStyles.searchBarContainer}>
				<span className={headerStyles.searchIcon}>
					<IconSearch size={16} color="#808080" />
				</span>
				<input
					type="text"
					className={headerStyles.searchInput}
					placeholder="Search features, tutorials, etc."
				/>
			</div>

			<div className={headerStyles.headerRight}>
				<div className={headerStyles.headerRightIcon}>
					<img src="headericon1.png" alt="icon1" />
				</div>

				<div className={headerStyles.headerRightIcon}>
					<img src="headericon2.png" alt="icon2" />
				</div>
			</div> */}
		</div>
	);
};

export default Eheader;