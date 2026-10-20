// @ts-nocheck
import React, {useRef, useState} from "react";
import { useContractRead} from "wagmi";
import {getStakingContractAbi, getStakingContractAddress} from "../../../helper.js";
import {formatEther} from "viem";

export default function PlanCalculator(){
    const [plans,setPlans] = useState([]);
    const [inputVal,setInputVal] = useState(1000);


    const {isSuccess} = useContractRead({
        address: getStakingContractAddress(),
        abi: getStakingContractAbi(),
        functionName: 'plans',
        onSuccess(data:any){
            data[0].map((item:any,index:any)=>{
                const dataStruct = {"time":item,"value":data[1][index]}
                setPlans(plans => [...plans, dataStruct])
            })
            setPlans(plans => [...plans])
        }
    })

    const onChange = (e:any)=>{
        setInputVal(e.target.value)
    }

    return(
        <section className={"bg-base-100 px-8 md:px-16 py-16 max-lg:gap-y-8 w-full flex flex-col justify-center items-center"}>
            <div className={"grid lg:grid-cols-2 container mx-auto gap-y-8 w-fit justify-center"}>
                <div className={"border-accent rounded-lg flex flex-col justify-center w-fit"}>
                    <span className={"px-8"}>Estimate your</span>
                    <span className={"text-5xl mt-4 font-bold px-8"}>Staking Rewards</span>
                    <span className={"mt-8 px-8"}>Estimate your rewards and see how simple it is to receive staking rewards with BLB.</span>
                    <span className={"mt-8 px-8"}>NOTE: There is no way to know how many nodes are running on the network, and how much BLB is being staked at any given time, so these calculations are educated estimates.</span>
                </div>
                <div className={"flex flex-col items-center justify-center w-fit"}>
                    <div className={"border-2 border-secondary rounded-3xl px-2 md:px-12 py-8 flex flex-col text-center justify-center"}>
                        <span className={"text-lg md:text-2xl font-bold mb-2"}>Total BLB Staked</span>
                        <div className={"mb-8 flex flex-row justify-center items-center "}>
                            <button className={"flex justify-center items-center md:text-xl font-bold rounded-l-full py-3 md:py-3 px-5 bg-primary"} onClick={()=>{setInputVal(inputVal-50)}}>-</button>
                            <input type="number" className={"input border-0 rounded-none border-none text-center font-bold text-sm md:text-lg xl:text-2xl 2xl:text-4xl appearance-none md:py-7 bg-gray-800"} value={inputVal} onChange={onChange}  />
                            <button  className={"flex justify-center items-center md:text-xl font-bold rounded-r-full py-3 md:py-3 px-5 bg-primary"} onClick={()=>{setInputVal(inputVal+50)}}>+</button>
                        </div>

                        {
                            plans?.map((item,index)=>(
                                <div className={"flex flex-col mt-4"} key={item+index}>
                                    <span className={"font-semibold max-sm:text-sm"}>{parseInt(item.time)/60/60/24} Days rewards:</span>
                                    <span className={"rounded-full font-bold bg-base-300 py-3 border-primary border text-sm lg:text-xl"}>{inputVal*formatEther(item.value)} BLB</span>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>

        </section>
    )
}