import {Link, useSearchParams} from "react-router-dom";
import {getContractDetails, useGetUserInfo, getUserStageInfo} from "../../modules/GetContractDetails.ts";
import {useEffect} from "react";
import ProfileStage from "../../Profile/ProfileStage.tsx";
const UserProfile = ()=>{
    const [searchParams] = useSearchParams();
    const getUserDetails:any = useGetUserInfo(searchParams.get("username"))
    const getUserStageDetails:any = getUserStageInfo(searchParams.get("username"))
    const getContractDetail:any = getContractDetails();

    useEffect(()=>{
        console.log(getUserDetails)

    })
    const copyToClipboard = async (text:string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('copied to clipboard');
        } catch (error) {
            alert('Error copying to clipboard');
        }
    };

    return(
        <>
            {
                getUserDetails && getUserDetails?.[13] !== "Unregistered User" ?
                    <section
                        className={"mx-auto max-w-screen-xl pt-1 max-md:px-6 gap-x-4 flex flex-col justify-center content-around"}>

                        <div className={'w-full grid md:grid-cols-2 gap-2 md:gap-10'}>
                            <div className={"flex flex-col w-full pt-4"}>
                                <div className={"flex flex-row items-center gap-3"}>
                                    <div
                                        className={"relative p-2 rounded-full bg-gradient-to-r from-secondary to-primary"}>
                                        <span className="absolute right-4 bottom-2 flex h-3 w-3">
                                            <span
                                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                            <span
                                                className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                        </span>
                                        <div className={"relative  bg-white rounded-full w-fit"}>
                                            <img src="./wolf.jpg" className={" rounded-full w-[110px]"} alt=""/>
                                        </div>
                                    </div>
                                    <div className={"flex flex-col gap-1"}>
                                    {/*<span*/}
                                    {/*    className={"text-white font-mono max-sm:text-sm"}>{address?.slice(0, 5) + '...' + address?.slice(37, 42)}*/}
                                    {/*    <button onClick={() => copyAddress(address)}*/}
                                    {/*            className={' font-mono font-bold text-blue-700 md:text-lg rounded-full mb-1'}>&nbsp;<ContentCopyIcon/></button>*/}
                                    {/*</span>*/}
                                        <span className={"md:text-xl font-mono font-bold "}>Reagent ID: <Link
                                            to={'/dashboard?username='+getUserDetails?.[1]}
                                            className={'text-blue-700 md:text-lg bg-blue-600/10 px-2 py-1 rounded-full'}>{getUserDetails?.[1]}</Link></span>
                                        <span
                                            className={" md:text-xl font-mono font-bold "}>Root surface: <span
                                            className={'text-white'}>{getUserDetails?.[3]}</span></span>
                                        <span className={"md:text-xl font-mono font-bold "}>Account ID: <span
                                            className={'text-white'}>{getUserDetails?.[4]}</span></span>
                                    </div>

                                </div>

                                <span className={"max-sm:text-sm mt-2"}>Joined In : <span
                                    className={'text-white'}>{getUserStageDetails?.[0]}</span></span>

                                <div className={"my-4 rounded-lg p-4 bg-gray-700"}>
                                    <span className={"text-lg font-semibold text-gray-500"}>Personal Link </span>
                                    {/*<span*/}
                                    {/*    className={"text-blue-600 font-semibold"}>blackalpha.com/r?r={getUserDetails?.[4]}</span>*/}
                                    <button
                                        className={'w-full btn border-0 bg-blue-600 text-white/80 rounded-full mt-2'}
                                        onClick={() => copyToClipboard('https://blackalpha.com/register?referral=' + getUserDetails?.[4])}> Copy Link
                                    </button>

                                    {/*<Link to={"https://blackalpha.com/register?referral="+getUserDetails[4]}><span className={"text-blue-600 font-semibold"}>https://blackalpha.com/register?referral={getUserDetails[4]}</span></Link>*/}
                                </div>
                                {/*disabled={!(parseInt(getUserDetails?.[7].slice(8, 20)) > 0)}*/}


                                <div className={"grid grid-cols-2 gap-2 "}>

                                    <div className={'relative rounded-xl bg-base-200/50 p-6 flex flex-col gap-2'}>
                                        <span className={'text-gray-400'}>Team</span>
                                        <img className={'absolute right-4 -z-10'} width={'80px'} src="./group.png" alt="gg"/>
                                        <span
                                            className={'text-xl font-bold'}>{parseInt(getUserDetails?.[8]) + parseInt(getUserDetails?.[9]) || "0"}</span>
                                    </div>

                                    <div className={'relative rounded-xl  bg-base-200/50 p-6 flex flex-col gap-2'}>
                                        <span className={'text-gray-400'}>Team Paid</span>
                                        <img className={'absolute right-3 top-8 -z-10'} width={'65px'}
                                             src="./validating-ticket.png" alt="gg"/>
                                        <span
                                            className={'text-xl font-bold'}>{parseInt(getUserDetails?.[10]) + parseInt(getUserDetails?.[11]) + ' $' || "0"}</span>
                                    </div>


                                </div>
                                <div className={'relative mt-2 rounded-xl bg-base-200/50 p-6 flex flex-col gap-2'}>
                                    <span className={'text-gray-400'}>Today Earn</span>
                                    <img className={'absolute right-4 top-10 -z-10'} width={'80px'} src="./revenue.png"
                                         alt="gg"/>

                                    <span
                                        className={'text-xl font-bold'}>{getUserStageDetails?.[3].split('-')[0]}</span>
                                    <span
                                        className={'text-xl font-bold'}>{getUserStageDetails?.[3].split('-')[1]}</span>
                                </div>


                                <div className={"grid grid-cols-2 gap-2 mt-2"}>

                                    <div className={' rounded-xl bg-base-200 p-6 flex flex-col gap-2'}>
                                        <span className={'text-gray-400'}>Left User</span>
                                        <span
                                            className={'text-xl font-bold'}>{getUserDetails?.[4] || "nobody"}</span>
                                    </div>

                                    <div className={' rounded-xl  bg-base-200 p-6 flex flex-col gap-2'}>
                                        <span className={'text-gray-400'}>Right User</span>
                                        <span
                                            className={'text-xl font-bold'}>{getUserDetails?.[5] || "nobody"}</span>
                                    </div>


                                </div>



                                <div className={'w-full mb-4'}>
                                    <div className={'flex flex-col items-center bg-base-200 justify-center rounded-lg mb-4 py-3'}>
                                        <span>All business partners </span>
                                        <span className={'font-bold text-xl'}> {parseInt(getUserDetails?.[8]) + parseInt(getUserDetails?.[9])}</span>
                                    </div>
                                    <div className={'w-full grid grid-cols-2 text-gray-800'}>

                                        <div className={'flex flex-col items-center justify-center bg-error rounded-l-full py-3'}>
                                            <span>partners on the left</span>
                                            <span className={'font-bold text-xl'}> {getUserDetails?.[8]}</span>
                                        </div>
                                        <div className={'flex flex-col items-center justify-center rounded-r-full bg-success py-3'}>
                                            <span>partners on the right</span>
                                            <span className={'font-bold text-xl '}>{getUserDetails?.[9]}</span>
                                        </div>
                                    </div>

                                </div>
                                <ProfileStage stageValue={getUserDetails?.[2]}
                                              diff={parseInt(getUserDetails?.[12])}/>

                            </div>


                            <div className={"w-full "}>

                                <div className={"flex flex-col gap-4"}>
                                    <h2 className={"font-bold text-xl "}>Contract information</h2>
                                    <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg "}>
                                        <span>Total User</span>
                                        <span className={"font-bold text-xl text-secondary"}>{getContractDetail?.[0]}</span>
                                    </div>
                                    <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg "}>
                                        <span>Total Entrance</span>
                                        <span className={"font-bold text-xl text-green-600"}>{getContractDetail?.[2]}</span>
                                    </div>
                                    <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg "}>
                                        <span>Today User Entrance</span>
                                        <span className={"font-bold text-xl text-secondary"}>{getContractDetail?.[1]}</span>
                                    </div>
                                    <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg "}>
                                        <span>Today Entrance</span>
                                        <span className={"font-bold text-xl text-green-600"}>{getContractDetail?.[3] > 0 || '0$'}</span>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </section>
                    :
                    <div>
                        <span>User Not Found</span>
                    </div>
            }

        </>
    )
}
export default UserProfile;