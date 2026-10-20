import proccessAnimation from "../../../public/ProccessAnimation.json";
import Lottie from "lottie-react";
import {getContractAddress, useSliceAddress} from "../../modules/helper.js";
import LaunchIcon from '@mui/icons-material/Launch';
import {getContractDetails} from "../../modules/GetContractDetails.ts";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {toast} from "react-toastify";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function HowToStartModule() {
    const contractInfo: any = getContractDetails();

    const copyAddress = () => {
        navigator.clipboard.writeText(getContractAddress())
        toast.success('Address Copied!')
    }

    return (
        <>
            <div className={'w-full  py-2 bg-base-300 border-t-2 border-secondary'}>
                <span className={'text-3xl font-bold ml-2'}>Contract Information</span>

            </div>
            <section
                className={"bg-base-100 flex flex-col items-center justify-center px-8  "}>

                {/*<h3 className={"text-3xl font-bold"}>How to start stake and plan</h3>*/}
                <br/>
                <div
                    className={"w-full grid lg:grid-cols-3 mt-8 bg-transparent backdrop-blur container mx-auto z-[2] border-primary border-2 rounded-3xl"}>
                    <div className={"flex flex-col items-center justify-center p-4  rounded-3xl"}>


                        <div className={'bg-base-100/50 p-2 rounded-full mt-4'}>
                            <span className={"md:text-xl mb-4"}>{useSliceAddress(getContractAddress())}
                                <button onClick={copyAddress}><ContentCopyIcon className={'text-blue-600'}/></button></span>
                        </div>

                        <a className={'mt-4'} target={'_blank'}
                           href={'https://mumbai.polygonscan.com/address/' + getContractAddress()}><span
                            className={'text-blue-700 text-lg bg-blue-600/10 p-3 rounded-full mt-2'}>Polygon Scan<LaunchIcon/></span></a>
                        {/*<Link className={"btn btn-primary"} to={"https://blbapi.boundlessworld.org/public/NET.pdf"}>Download PDF</Link>*/}
                    </div>
                    <div className={"flex flex-col items-center justify-center"}>
                        <Lottie animationData={proccessAnimation} loop={true} className={"w-2/3"}/>

                    </div>
                    <div className={"flex flex-col items-center justify-center p-4  rounded-3xl"}>
                        <div className={'flex flex-col'}>

                            <span className={"text-2xl "}>Total Entrance </span>
                            <span
                                className={" text-2xl font-bold text-center text-green-600"}> {contractInfo?.[1] + ' $' || '0$'}  </span>
                        </div>
                        <div className={'flex flex-col mt-4'}>
                            <span className={"text-2xl "}>Total User </span>

                            <span
                                className={" text-2xl font-bold text-center text-secondary"}> {contractInfo?.[0] || '0 '}
                                &nbsp;<PeopleAltIcon/>  </span>
                        </div>
                        {/*<span>According to your stake amount, choose a plan and go to staking and plan section. Connect your wallet and then enter the referral code.</span>*/}
                    </div>

                </div>
                <div className={" absolute right-0 z-[1]  "}>
                    <img className={"-mt-32"} src="../../../public/about_shape1.png" alt=""/>
                </div>

            </section>
        </>

    )
}
