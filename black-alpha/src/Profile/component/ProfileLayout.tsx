import {Link, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {getChainID} from "../../modules/helper.js";
import {useAccount, useNetwork, useSwitchNetwork} from "wagmi";
import MenuIcon from "@mui/icons-material/Menu";

const ProfileLayout = () => {
    const {isConnected} = useAccount();
    const [state, setState] = useState({
        showProfile: false
    });
    const network = useNetwork();
    const switchNetwork = useSwitchNetwork();

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
            <div
                className="navbar scroll-m-1 bg-cyan-500/10 backdrop-blur sticky top-0 border-b-2 border-gray-700 z-[1]">
                <div className="navbar-start">
                    <details className="dropdown">
                        <summary className="m-1 btn bg-transparent border-0"><MenuIcon/></summary>
                        <ul tabIndex={0} className=" w-screen menu dropdown-content z-[2] p-2 shadow rounded-box bg-base-100" >
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={'/register'}>Register</Link></li>
                            {
                                state.showProfile && <li>
                                    <Link to={"/profile"}>Profile</Link>
                                </li>
                            }
                            <li><Link to={'/profile/chart'}>Chart</Link></li>

                        </ul>
                    </details>

                    <Link to={"/"}><img src="../logo-icon.svg" alt="" width={"50px"}/></Link>

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
                        <li><Link to={'/profile/chart'}>Chart</Link></li>

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
export default ProfileLayout;