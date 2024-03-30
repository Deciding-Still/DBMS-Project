import { useState } from 'react'

import viteLogo from '/vite.svg'

import sidebarStyles from "./Esidebar.module.css";
import { IconChevronDown } from "@tabler/icons-react";
import { Link } from 'react-router-dom';


const Esidebar = ({ modalRef }) => {
    const companyDetails = {
        companyName: "XYZ Stores",
        companyThumbnail: "../src/assets/storefront_FILL0_wght400_GRAD0_opsz24.png",
    };
    const companyTabs = [
        { name: "Home", icon: "", id: 0 },
        { name: "Sales", icon: "", id: 1 },
        { name: "Products", icon: "", id: 2 },
        { name: "Customer", icon: "", id: 3 },

        // { name: "Discounts", icon: "discounts.png", id: 4 },



    ];


    return (
        <div className={sidebarStyles.container} ref={modalRef}>
            <div className={sidebarStyles.allcompanySpecificStuff}>
                <div className={sidebarStyles.companyHeader}>
                    <div className={sidebarStyles.companyHeaderLeft}>
                        <div className={sidebarStyles.companyThumbnail}>
                            <img
                                src={companyDetails.companyThumbnail}
                                alt="NITK LOGO"
                            />
                        </div>
                    </div>

                    <div className={sidebarStyles.companyHeaderRight}>
                        <div className={sidebarStyles.companyDetails}>
                            <div className={sidebarStyles.companyName}>
                                {companyDetails.companyName}
                            </div>

                            <a
                                href={companyDetails.companyLink}
                                className={sidebarStyles.companyLink}>
                            </a>
                        </div>

                        {/* <div className={sidebarStyles.companyTabsToggle}>
                            <IconChevronDown color="#fff" />
                        </div> */}
                    </div>
                </div>

                <div className={sidebarStyles.companyTabs}>
                    {companyTabs.map((tab) => {
                        return (
                            <Link
                                to={`./${(tab.name)}`}
                                key={tab.id}
                                className={`${sidebarStyles.tabItem} `}>
                                <div className={sidebarStyles.tabIcon}>
                                    <img src={tab.icon} alt="" />
                                </div>

                                <div className={sidebarStyles.tabName}>
                                    {tab.name}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* <div className={sidebarStyles.availableCreditsLeft}>
                    <div className={sidebarStyles.walletIcon}>
                        <img src="wallet.png" alt="" />
                    </div>
                </div>
{/* 
                <div className={sidebarStyles.availableCreditsRight}>
                    <div className={sidebarStyles.availableCreditsText}>
                        Available credits
                    </div>

                    <div className={sidebarStyles.availableCreditsAmt}>
                        222.10
                    </div>
                </div> */}

        </div>
    );
}

export default Esidebar;
