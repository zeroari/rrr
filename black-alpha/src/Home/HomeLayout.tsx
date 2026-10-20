import {Link, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAccount} from "wagmi";
import MenuIcon from "@mui/icons-material/Menu";

const HomeLayout = () => {
    const {isConnected} = useAccount();
    const [state, setState] = useState({
        showProfile: false
    });

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
                className="navbar scroll-m-1 bg-cyan-500/10 backdrop-blur sticky top-0 border-b-2 border-gray-700 z-[999]">
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
                            {/*<li><Link to={'/profile/chart'}>Chart</Link></li>*/}

                        </ul>
                    </details>


                    <Link to={"/"}><img className={"shadow"} src="./logo-icon.png" alt="" width={"50px"}/></Link>

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
                        {/*<li>*/}
                        {/*    <Link to={"/profile"}>Profile</Link>*/}
                        {/*</li>*/}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <w3m-button size={'sm'} balance={'hide'}/>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
export default HomeLayout;