import { useState } from "react";
import { Link } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function HomeNavbar() {

    const [dropdownStatus, setDropdownStatus] = useState(false);

    const handleDropdown = () => {
        dropdownStatus ? setDropdownStatus(false) : setDropdownStatus(true);
        console.log(dropdownStatus);
    };


    const linkItems = [
        { name: "Home", icon: DashboardIcon, link: "/", active: true },
        { name: "Staking", icon: GroupsIcon, link: "/staking" },
        { name: "Dashboard", icon: AddCardIcon, link: "/dashboard?page=dashboard" },
        { name: "IEO", icon: CreditScoreIcon, link: "#" },
        { name: "About", icon: AccountTreeIcon, link: "/about" },
    ];

    return (
        <>
            <nav className="navbar bg-base-300">
                <div className="navbar-start">
                    <div className="flex items-center justify-start">

                        <Link to="#" className="flex ml-1 md:mr-24 z-40">
                            {/* <img src="./wolf-small.png" alt="logo" /> */}
                            <img
                                src={"./blb-logo.svg"}
                                className="h-8 mr-3 rounded-full bg-white"
                                alt="FlowBite Logo"
                            />
                            &nbsp;
                            <span className="self-center text-base-content text-lg font-semibold sm:text-2xl whitespace-nowrap ">
                  Boundless
                </span>
                            <span className=" self-center text-lg text-primary font-bold sm:text-2xl whitespace-nowrap">
                  World
                </span>
                        </Link>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/dashboard"}>Dashboard</Link></li>
                        <li><Link to={"/staking"}>Staking</Link></li>
                        <li><Link to={"/support"}>Support</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    &nbsp;
                </div>
            </nav>

            <aside
                id="logo-sidebar"
                className={
                    "fixed top-0 left-0 z-10 w-64 h-screen pt-4 transition-transform md:-translate-x-full backdrop-blur bg-opacity-70 bg-base-300 " +
                    (dropdownStatus ? "translate-x-0" : "-translate-x-full")
                }
                aria-label="Sidebar"
            >
                <div className={"flex flex-row"}>
                    <button
                        onClick={handleDropdown}
                        data-drawer-target="logo-sidebar"
                        data-drawer-toggle="logo-sidebar"
                        aria-controls="logo-sidebar"
                        type="button"
                        className="ml-2 z-50 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                            ></path>
                        </svg>
                    </button>
                    <Link to="#" className="flex ml-1 md:mr-24 z-40">
                        {/* <img src="./wolf-small.png" alt="logo" /> */}
                        <img
                            src={"./blb-logo.svg"}
                            className="h-8 mr-3 rounded-full bg-white"
                            alt="FlowBite Logo"
                        />
                        &nbsp;
                        <span className="self-center text-base-content text-lg font-semibold sm:text-2xl whitespace-nowrap ">
                  Boundless
                </span>
                        <span className=" self-center text-lg text-primary font-bold sm:text-2xl whitespace-nowrap">
                  World
                </span>
                    </Link>
                </div>


                <div className="h-full backdrop-blur bg-opacity-70 px-3 pb-4 overflow-y-auto mt-4 ">

                    <ul className="space-y-2 font-medium menu menu-compact">
                        {linkItems.map((item) => {
                            const IconComp = item.icon;

                            return (
                                <li key={item.name}>
                                    <Link
                                        to={item.link}
                                        className={
                                            "flex items-center p-2 rounded-lg text-base " +
                                            (item.active ? "active" : "dark:hover:bg-gray-400/40")
                                        }
                                    >
                                        <IconComp
                                            className={
                                                "w-6 h-6  transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white bg-teal-500/20 rounded-md " +
                                                (item.active
                                                    ? "active"
                                                    : "text-primary dark:text-secondry")
                                            }
                                        />

                                        <span
                                            className={
                                                "flex-1 ml-3 whitespace-nowrap " +
                                                (item.active ? "" : "text-primary dark:text-secondry")
                                            }
                                        >
                      {item.name}
                    </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </aside>
        </>
    );
}
