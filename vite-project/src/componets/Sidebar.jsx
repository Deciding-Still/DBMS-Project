import { useState } from 'react'

import viteLogo from '/vite.svg'

import sidebarStyles from "./Sidebar.module.css";
import { IconChevronDown } from "@tabler/icons-react";
import { Link } from 'react-router-dom';


const Sidebar = ({ modalRef }) => {
    const companyDetails = {
        companyName: "NITK Store",
        companyLink: "link-to-company",
        companyThumbnail: "companythumbnail.png",
    };
    const companyTabs = [
        { name: "Home", icon: "home.png", id: 0 },
        { name: "Sales", icon: "home.png", id: 1 },
        { name: "Products", icon: "products.png", id: 2 },
        { name: "Customer", icon: "delivery.png", id: 3 },
        { name: "Employee", icon: "marketing.png", id: 4 },
        { name: "Analytics", icon: "analytics.png", id: 5 },
        { name: "Payments", icon: "payments.png", id: 6 },

        { name: "Discounts", icon: "discounts.png", id: 7 },

        { name: "Branch", icon: "appearance.png", id: 8 },

    ];


    return (
        <div className={sidebarStyles.container} ref={modalRef}>
            <div className={sidebarStyles.allcompanySpecificStuff}>
                <div className={sidebarStyles.companyHeader}>
                    <div className={sidebarStyles.companyHeaderLeft}>
                        <div className={sidebarStyles.companyThumbnail}>
                            <img
                                src={companyDetails.companyThumbnail}
                                alt="Nishyant logo"
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
                                Visit store
                            </a>
                        </div>

                        <div className={sidebarStyles.companyTabsToggle}>
                            <IconChevronDown color="#fff" />
                        </div>
                    </div>
                </div>

                <div className={sidebarStyles.companyTabs}>
                    {companyTabs.map((tab) => {
                        return (
                            <Link
                                to={`/${(tab.name)}`}
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

export default Sidebar;
