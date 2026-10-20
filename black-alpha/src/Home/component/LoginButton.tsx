import {useAccount, useSignMessage} from "wagmi";
import {useEffect, useState} from "react";
import {recoverMessageAddress} from "viem";
import {makeRandom, useGetUserInfoWithHash} from "../../modules/GetContractDetails.ts";
import {useNavigate} from "react-router-dom";
import {useWeb3Modal} from "@web3modal/wagmi/react";
import {zeroAddress} from "../../modules/helper.js";
import {toast} from "react-toastify";

const LoginButton = ()=>{
    const generatedRandom = makeRandom(16);
    const [state,setState] = useState({
        randomKey:generatedRandom,
        signedMessage:"",
        recovered:""
    });
    const {address,isConnected} = useAccount();
    const {open} = useWeb3Modal()
    const navigate = useNavigate();
    const getUserInfoWithH:any = useGetUserInfoWithHash(address?address:zeroAddress());
    console.log(getUserInfoWithH)

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
                    sessionStorage.setItem("username",getUserInfoWithH?.[1])
                    navigate("/profile");
                }
            }

        })()


    },[signMessageData,sessionStorage.getItem("address")])



    const login = async ()=>{
        if (!isConnected)
            open?.()
        else if(getUserInfoWithH?.[13] !== "Active User"){
            toast('you are not registered! please register first!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else if (sessionStorage.getItem('address'))
            navigate("/profile");
        else
            signMessage?.();

    }

    return(
        <button className={"btn btn-outline border-white px-10"} onClick={login}>Login</button>

    )
}
export default LoginButton;