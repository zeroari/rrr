import {useContractRead} from "wagmi";
import  {getContractABI, getContractAddress, getUSDContractABI, getUSDContractAddress, getChainID} from "./helper.js";
import {encodePacked, keccak256, parseUnits} from "viem";
// import {useState} from "react";

export const getContractDetails =()=>{
    return useContractRead({
        address: getContractAddress(),
        abi: getContractABI(),
        chainId:getChainID(),
        functionName: 'contractInfo',
        cacheTime:10
    }).data;
}

export const useGetUserInfo =(userName:any)=>{
    const {data}=useContractRead({
        address: getContractAddress(),
        abi: getContractABI(),
        chainId:getChainID(),
        functionName: 'userInfo',
        args:[userName,'0']
    });

    return data
}

export const useGetUserInfoWithHash =(userName:any)=>{
    const {data}=useContractRead({
        address: getContractAddress(),
        abi: getContractABI(),
        chainId:getChainID(),
        functionName: 'userInfo',
        args:['',useHashMaker(userName)]
    });

    return data
}

export const getUserStageInfo =(userName:any)=>{
    const {data}=useContractRead({
        address: getContractAddress(),
        abi: getContractABI(),
        chainId:getChainID(),
        functionName: 'userStageData',
        args:[userName,'0','0']
    });
    return data
}

export const useGetUserTree =(userName:any)=>{
    const {data}=useContractRead({
        address: getContractAddress(),
        abi: getContractABI(),
        chainId:getChainID(),
        functionName: 'userTree',
        args:[userName,'14']
    });
    return data
}


// export function useNewGetUserTree (){
//     const [data,setData] = useState();
//     function getTree(userName:any) {
//         const {data}=useContractRead({
//             address: getContractAddress(),
//             abi: getContractABI(),
//             chainId:getChainID(),
//             functionName: 'userTree',
//             args:[userName,'14']
//         });
//         // @ts-ignore
//         setData(data)
//     }
//     return[data,getTree]
// }

export const getUserStageInfoWithHash =(userName:any,stageNumber:string)=>{
    const {data}=useContractRead({
        address: getContractAddress(),
        abi: getContractABI(),
        chainId:getChainID(),
        functionName: 'userStageData',
        args:['',useHashMaker(userName),stageNumber]
    });

    return data
}

export const getAllowanceValue =(address:any)=>{
    const {data:allowanceData}= useContractRead({
        address: getUSDContractAddress(),
        abi: getUSDContractABI(),
        watch:true,
        chainId:getChainID(),
        functionName: 'allowance',
        args:[address,getContractAddress()]
    });

    return {allowanceData}
}

export function makeRandom(length:number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-!@#$%abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return 'Black Alpha-'+result;
}



export const useHashMaker =(address:any)=>{
    // @ts-ignore
    return parseUnits(keccak256(encodePacked(['address','string'],[address,"hashMakerNonce"])))
}


