import {makeRandom, useGetUserInfoWithHash} from "../../modules/GetContractDetails.ts";
import {useAccount, useSignMessage} from "wagmi";
import {zeroAddress} from "../../modules/helper.js";
import {Link, useNavigate} from "react-router-dom";
import { useWeb3Modal } from '@web3modal/wagmi/react'
import  {useEffect, useState} from "react";
import { recoverMessageAddress } from 'viem'

const  DashboardUserSection =()=>{
    const generatedRandom = makeRandom(24);
    const [state,setState] = useState({
        randomKey:generatedRandom,
        signedMessage:"",
        recovered:""
    });
    const {address,isConnected} = useAccount();
    const {open} = useWeb3Modal()
    const navigate = useNavigate();

    const { data:signMessageData, signMessage } = useSignMessage({
        message: state.randomKey,
        onSuccess(data){
            setState({...state,signedMessage: data})
        }
    })

    useEffect(()=>{
        ;(async () => {
            if (signMessageData) {
                const recoveredAddress = await recoverMessageAddress({
                    message: state.randomKey,
                    signature: signMessageData,
                })
                if (address === recoveredAddress){
                    sessionStorage.setItem("address",recoveredAddress)
                    navigate("/profile");
                }
            }

        })()


    },[signMessageData,sessionStorage.getItem("address")])


    const getUserInfoWithH:any = useGetUserInfoWithHash(address?address:zeroAddress());


    const login = async ()=>{
        if (sessionStorage.getItem('address'))
            navigate("/profile");
        else
            signMessage?.();

    }

    // const test = async ()=>{
    //     sessionStorage.clear()
    //
    // }


    if (isConnected)
    return(
        <section className={" bg-cyan-500 m-4 rounded-lg p-2 mx-auto"}>
            {/*<button className={"btn btn-primary"} onClick={test}>Test</button>*/}
            {
                getUserInfoWithH?.[13]==="Active User"?
                    <div className={" bg-base-200 m-4 rounded-lg flex flex-col p-8"}>
                        <span className={"text-3xl font-bold text-white"}>Login to Black Alpha</span>
                        <span>earn and grow reach</span>
                        <button className={"btn btn-primary rounded-full w-fit mt-4"} onClick={login}>{sessionStorage.getItem('address')?"Profile":"Login"}</button>

                    </div>
                    :
                    <div className={"w-full bg-base-200 m-4 rounded-lg flex flex-col p-8"}>
                        <span className={"text-3xl font-bold text-white"}>Register to Black Alpha</span>
                        <span>earn and grow reach</span>
                        <Link to={'/register'} className={"btn btn-primary rounded-full w-fit mt-4"} >Register</Link>
                    </div>
            }

        </section>
    )
    else
        return (
            <>
                <section className={"w-full bg-base-200 m-4 rounded-lg flex flex-col p-8 mx-auto"}>
                    <span className={"text-3xl font-bold text-white"}>Connect To wallet for login And register in Black Alpha</span>
                    <span>earn and grow reach</span>
                    <button className={"btn btn-primary rounded-full w-fit mt-4"} onClick={()=>open?.()}>Connect To Wallet</button>
                    {/*<button className={"btn btn-primary rounded-full w-fit mt-4"} onClick={test}>test</button>*/}
                </section>
            </>
        )
}
export default DashboardUserSection;