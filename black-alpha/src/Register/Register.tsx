import {useAccount, useContractWrite, useWaitForTransaction} from "wagmi";
import {
    getChainID,
    getContractABI,
    getContractAddress,
    getUSDContractABI,
    getUSDContractAddress, zeroAddress
} from "../modules/helper.js";
import {formatEther, parseEther} from "viem";
import {getAllowanceValue, useGetUserInfoWithHash} from "../modules/GetContractDetails.ts";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

const Register = () => {
    const [state, setState] = useState(
        {textButton: "Register"}
    );
    const {address, isConnected} = useAccount();
    // @ts-ignore
    const getUserInfoWithH: any = useGetUserInfoWithHash(address ? address : zeroAddress());
    let allowanceData: any;
    ({allowanceData} = getAllowanceValue(address ? address : zeroAddress));


    const {isLoading, write} = useContractWrite({
        address: getContractAddress(),
        abi: getContractABI(),
        functionName: 'register',
        chainId: getChainID(),
    })

    const {isLoading: approveIsLoading, write: approveWrite, data: approveData} = useContractWrite({
        address: getUSDContractAddress(),
        abi: getUSDContractABI(),
        functionName: 'approve',
        chainId: getChainID(),

    })

    const {isLoading: waitIsLoading} = useWaitForTransaction({
        confirmations: 1,
        hash: approveData?.hash,
        chainId: getChainID(),
        onSuccess() {
            setState({...state, textButton: "Register"})
        }
    })

    useEffect(() => {
    }, [getUserInfoWithH])


    function checkIsLoading() {
        return waitIsLoading || approveIsLoading || isLoading
    }

    const registerUser = (e: any) => {
        console.log(getUserInfoWithH)
        e.preventDefault();
        if (!isConnected) {
            toast.error("Wallet Not Connected!")
            return;
        }
        if (getUserInfoWithH[13] === "Active User") {
            toast.error("You Have Already Registered!")
            return;
        }


        if (parseInt(formatEther(allowanceData)) >= 33) {

            write({
                args: [e.target.username.value, e.target.referral.value],
                value: parseEther("0")
            })
        } else {
            setState({...state, textButton: "Approve"})
            approveWrite({
                args: [getContractAddress(), parseEther("33")]
            })
        }

    }


    return (
        <>
            {/*<ParticleBack>*/}
                <div className={"mx-auto max-w-screen-xl"}>
                    <div className={"flex flex-col items-center gap-6 pt-12"}>
                        <div className={'bg-base-300 px-10 py-4'}>
                            <span className={"font-bold text-2xl "}>Register stage in BlackAlpha</span>
                            <br/>
                            <span
                                className={' '}>Please connect your wallet and then go through the register process</span>
                        </div>

                        <form onSubmit={registerUser}
                              className={"flex flex-col gap-4 border rounded-lg w-[380px] px-10 py-6"}>


                            <div className={'w-full'}>
                            <span>Enter the referral username</span>
                                <input className={"input input-secondary w-full"} id={"referral"}
                                       placeholder={"referrer username"} type="text"/>
                            </div>
                            <div className={'w-full'}>
                                <span>Enter your username</span>
                                <input className={"input input-secondary w-full"} id={"username"}
                                       placeholder={"username"}
                                       type="text"/>
                            </div>

                            <span>Stage V1</span>
                            <div
                                className={'w-full border-secondary border rounded-lg p-2 flex flex-row justify-between -mt-4'}>
                                <div className={'text-center'}>
                                    <span>Gold </span>
                                    <br/>
                                    <span>11 </span><span className={'text-green-600'}>$</span>
                                </div>
                                <div className={'text-center'}>
                                    <span>Diamond </span>
                                    <br/>
                                    <span>22 </span><span className={'text-green-600'}>$</span>
                                </div>
                                <div className={'text-center'}>
                                    <span>Total</span>
                                    <br/>
                                    <span>33 </span><span className={'text-green-600'}>$</span>
                                </div>
                                <div>
                                    <input type="checkbox" className={'checkbox mt-3 checkbox-secondary'}/>
                                </div>

                            </div>

                            <button disabled={checkIsLoading()}
                                    className={"btn btn-primary"}>{state.textButton}</button>
                        </form>
                    </div>
                    <div className={'bg-base-300 px-10 py-4 my-4 mb-14'}></div>
                    </div>
            {/*</ParticleBack>*/}
        </>
    )
}
export default Register;