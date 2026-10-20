import {Link} from "react-router-dom";

export default function Footer(){
    return(
        <footer className="bg-base-200 sm:px-4">
            <div className="container mx-auto pt-12 px-4 relative">
                <div className="-mx-4 flex flex-wrap gap-6 items-end mb-12">

                    <div className="px-4 w-full lg:w-auto ml-auto">
                        <div className="flex-wrap gap-2 inline-flex sm:gap-4">
                            <Link
                                to="https://discord.com/invite/8MKKBtvufZ"
                                className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-success hover:to-primary-500 inline-block p-1 rounded-full text-white to-primary-400"
                                aria-label="discord"
                            >
                                {/*<img className={"w-10 h-10"} src={discord} alt="discord"/>*/}
                            </Link>{" "}
                            <Link
                                to="https://twitter.com/Boundlessworlld"
                                className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-success hover:to-primary-500 inline-block p-1 rounded-full to-primary-400"
                                aria-label="twitter"
                            >
                                {/*<img className={"w-10 h-10 rounded-full"} src={xLogo} alt="twitter"/>*/}

                            </Link>{" "}

                            <Link
                                to="https://www.linkedin.com/company/boundlessworld/"
                                className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-success hover:to-primary-500 inline-block p-1 rounded-full to-primary-400"
                                aria-label="twitter"
                            >
                                {/*<img className={"w-10 h-10 rounded-full"} src={linkdin} alt="linkdien"/>*/}

                            </Link>{" "}
                            <Link
                                to="https://t.me/boundlessworld_group"
                                className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-success hover:to-primary-500 inline-block p-1 rounded-full text-white to-primary-400"
                                aria-label="youtube"
                            >
                                {/*<img className={"w-10 h-10 rounded-full"} src={telegram} alt="telegram"/>*/}

                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="my-6 opacity-20" />
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full p-4 xl:w-4/12">
                        <Link
                            to="#"
                            className="font-bold gap-2 hover:text-gray-300 inline-flex items-center leading-none mb-6 text-3xl text-white uppercase"
                        >
                            {/*<img className={"rounded-full bg-gray-50"} src="./blb-logo.svg" width={80} height={80} alt=""/>*/}
                            <span>Black Alpha</span>
                        </Link>
                        <p className="font-light mb-4">
                            {/*blb profitable staking platform.*/}
                        </p>

                    </div>

                    <div className="p-4 w-full sm:w-6/12 lg:w-4/12 xl:w-2/12">
                        <h2 className="font-bold mb-6 text-primary-500 text-xl">
                            {" "}
                            Links{" "}
                        </h2>
                        <ul>
                            <li className="mb-4">
                                <Link to="/" className="hover:text-secondary text-white">
                                    Home
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/dashboard" className="hover:text-secondary text-white">
                                    Dashboard
                                </Link>
                            </li>
                            {/*<li className="mb-4">*/}
                            {/*    <Link to="/staking" className="hover:text-secondary text-white">*/}
                            {/*        Staking*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            {/*<li className="mb-4">*/}
                            {/*    <Link to="/support" className="hover:text-secondary text-white">*/}
                            {/*        Support*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    {/*<div className={" flex justify-end "}>*/}
                        <div className="px-4 w-full lg:w-6/12 xl:w-5/12 mt-12">
                            {/*<h2 className="font-bold mb-4 text-2xl text-center">*/}
                            {/*    Join the movement, stay updated*/}
                            {/*</h2>*/}
                            {/*<form>*/}
                            {/*    <div className="bg-white border border-gray-300 flex overflow-hidden p-1 rounded-full">*/}
                            {/*        <input*/}
                            {/*            className="appearance-none flex-1 outline-none px-4 py-1 text-gray-600 w-full"*/}
                            {/*            placeholder="Enter email..."*/}
                            {/*            type="email"*/}
                            {/*        />*/}
                            {/*        <button*/}
                            {/*            type="submit"*/}
                            {/*            className="btn btn-primary  inline-block px-6 py-2 rounded-full text-white to-primary-400"*/}
                            {/*        >*/}
                            {/*            Sign Up*/}
                            {/*        </button>*/}
                            {/*    </div>*/}
                            {/*</form>*/}
                        </div>
                    {/*</div>*/}
                </div>

                <div className="py-4">
                    <hr className="mb-4 opacity-20" />
                    <div className="flex flex-wrap -mx-4  items-center">
                        <div className="px-4 py-2 w-full md:flex-1">
                            <p>&copy; 2022 - 2023. All Rights Reserved - BlackAlpha</p>
                        </div>
                        <div className="px-4 py-2 w-full sm:w-auto">
                            <Link
                                to="#"
                                className="hover:text-primary-600 text-primary-500"
                            >
                                Privacy Policy
                            </Link>{" "}
                            |{" "}
                            <Link
                                to="#"
                                className="hover:text-primary-600 text-primary-500"
                            >
                                Terms of Use
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}