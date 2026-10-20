import {Link, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {getChainID} from "../../modules/helper.js";
import {useAccount, useNetwork, useSwitchNetwork} from "wagmi";
// import {SwipeableDrawer} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
const DashboardLayout = () => {
    const {isConnected} = useAccount();
    const [state, setState] = useState({
        showProfile: false
    });
    const network = useNetwork();
    const switchNetwork = useSwitchNetwork();
    // const [drawer,setDrawer] = useState(false)
    useEffect(() => {
        if (network?.chain?.id !== getChainID()) {
            switchNetwork.switchNetwork?.(getChainID())
        }
    }, [switchNetwork.switchNetwork]);


    useEffect(() => {
        if (sessionStorage.getItem('address')) {

            setState({...state, showProfile: true})

        }
        if (!isConnected) {
            setState({...state, showProfile: false})
            sessionStorage.clear();
        }
    }, [isConnected, sessionStorage.getItem('address')])



    return (
        <>
            {/*<SwipeableDrawer*/}
            {/*    anchor={'left'}*/}
            {/*    open={drawer}*/}
            {/*    onClose={setDrawer(false)}*/}
            {/*    onOpen={setDrawer(true)}*/}
            {/*>*/}
            {/*    <span>link</span>*/}
            {/*</SwipeableDrawer>*/}
            <div
                className="navbar scroll-m-1 bg-cyan-500/10 backdrop-blur sticky top-0 border-b-2 border-gray-700 z-[1]">
                <div className="navbar-start">
                    <details className="dropdown lg:hidden">
                        <summary className="m-1 btn bg-transparent border-0"><MenuIcon/></summary>
                        <ul tabIndex={0} className=" w-screen menu dropdown-content z-[2] p-2 shadow rounded-box bg-base-100" >
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={'/register'}>Register</Link></li>
                            {
                                state.showProfile && <li>
                                    <Link to={"/profile"}>Profile</Link>
                                </li>
                            }
                        </ul>
                    </details>
                    {/*<button>button</button>*/}
                    {/*<div className="dropdown"  >*/}
                    {/*    <label tabIndex={0} className="btn btn-ghost lg:hidden" >*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"*/}
                    {/*             stroke="currentColor">*/}
                    {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                    {/*                  d="M4 6h16M4 12h8m-8 6h16"/>*/}
                    {/*        </svg>*/}
                    {/*    </label>*/}
                    {/*    <ul tabIndex={0} className=" w-screen menu dropdown-content z-[2] p-2 shadow rounded-box bg-base-100" >*/}
                    {/*        <li><Link to={"/"}>Home</Link></li>*/}
                    {/*        <li><Link to={'/register'}>Register</Link></li>*/}
                    {/*        {*/}
                    {/*            state.showProfile && <li>*/}
                    {/*                <Link to={"/profile"}>Profile</Link>*/}
                    {/*            </li>*/}
                    {/*        }*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    <Link to={"/"}><img src="./logo-icon.svg" alt="" width={"50px"}/></Link>

                </div>
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                        {
                            state.showProfile && <li>
                                <Link to={"/profile"}>Profile</Link>
                            </li>
                        }
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className={""}>
                        <w3m-button size={'sm'} balance={'hide'}/>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
export default DashboardLayout;