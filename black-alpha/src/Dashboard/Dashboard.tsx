import {useEffect, useState} from "react";
import UserProfile from "./component/UserProfile.tsx";
import { useSearchParams} from "react-router-dom";
import {getContractDetails} from "../modules/GetContractDetails.js";
import { useNetwork, useSwitchNetwork} from "wagmi";
import {getChainID} from "../modules/helper.js";


const Dashboard = () => {
    const [state, setState] = useState({
        userName: "",
    });
    const network = useNetwork();
    const switchNetwork = useSwitchNetwork();
    // const getUserDetails:any = getUserInfo(state.userName);
    const getContractDetail:any = getContractDetails();
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        if (network?.chain?.id !== getChainID()){
            switchNetwork.switchNetwork?.(getChainID())
        }
    }, [switchNetwork.switchNetwork]);


    const searchForm = (e: any) => {
        e.preventDefault();
        setState({...state, userName: e.target.userName.value})
        setSearchParams("username="+e.target.userName.value)

        // console.log(getUser.data)
        // console.log(state.userName)

        // getUserDetail(e.target.userName.value);
    }

    return (
        <>
            {
                searchParams.get('username') ? <UserProfile/>
                    :
                    <div className={"mx-auto max-w-screen-xl"}>
                        <div className={"flex flex-wrap justify-center items-center mt-4 bg-base-200  p-2 rounded-lg"}>
                            <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg mx-10 "}>
                                <span>Total User</span>
                                <span className={"font-bold text-2xl"}>{getContractDetail?.[0]}</span>
                            </div>
                            <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg mx-10 "}>
                                <span>Total Entrance</span>
                                <span className={"font-bold text-2xl"}>{getContractDetail?.[1]}</span>
                            </div>
                            <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg mx-10 "}>
                                <span>Today User Entrance</span>
                                <span className={"font-bold text-2xl"}>{getContractDetail?.[2]} </span>
                            </div>
                            <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg mx-10 "}>
                                <span>ToDay Entrance</span>
                                <span className={"font-bold text-2xl"}>{getContractDetail?.[3]}</span>
                            </div>
                        </div>
                        {/*<DashboardUserSection />*/}
                        <div className={"w-full flex flex-row  mx-auto gap-4 rounded-lg mt-4"}>
                            <div className={"flex flex-row p-4 md:w-1/2  bg-base-200 rounded-lg"}>

                                <div className={" p-4  rounded-lg m-6 flex flex-col justify-center items-center"}>
                                    <div className={"flex flex-row  mb-4"}>
                                        <span className={"text-2xl font-bold text-white"}>Search Username</span>
                                    </div>

                                    <form className={"flex gap-3 "} onSubmit={searchForm}>
                                        <input className={"input input-secondary md:w-96"} type="text" id={"userName"}/>
                                        <button className={"btn btn-primary rounded-full"}>Search</button>
                                    </form>

                                </div>

                            </div>
                            <div className={"flex flex-row p-4 bg-base-200 md:w-1/2 rounded-lg"}>

                                <div className={"w-full p-4  rounded-lg m-6 flex flex-col justify-center items-center"}>
                                    <span className={'font-bold text-3xl'}>Search and find user profile</span>

                                </div>

                            </div>
                        </div>


                        <div className={"grid md:grid-cols-2 gap-4 mb-4 mt-4 mx-auto"}>
                            <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg "}>
                                <span>Total User</span>
                                <span className={"font-bold text-2xl"}>{getContractDetail?.[0]}</span>
                            </div>
                            <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg "}>
                                <span>Total Entrance</span>
                                <span className={"font-bold text-2xl"}>{getContractDetail?.[1]}</span>
                            </div>
                            <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg "}>
                                <span>Today User Entrance</span>
                                <span className={"font-bold text-2xl"}>{getContractDetail?.[2]}</span>
                            </div>
                            <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg "}>
                                <span>ToDay Entrance</span>
                                <span className={"font-bold text-2xl"}>{getContractDetail?.[3]}</span>
                            </div>
                        </div>
                        <div className={"grid md:grid-cols-2 gap-4 mx-auto "}>



                        </div>
                    </div>

            }


        </>
    )
}
export default Dashboard;