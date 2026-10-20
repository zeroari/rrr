
import {useAccount, useContractWrite, useWaitForTransaction} from "wagmi";
import {formatEther, parseEther} from "viem";
import {
    getChainID,
    getContractABI,
    getContractAddress, getUSDContractABI,
    getUSDContractAddress,
    zeroAddress
} from "../../modules/helper.js";
import {getAllowanceValue} from "../../modules/GetContractDetails.ts";

const SearchProfileStage = (props: any) => {
    const {address} = useAccount();
    // const getUserStageDetails: any = getUserStageInfoWithHash(address ? address : zeroAddress(), checkLevel(parseInt(props.stageValue)).toString())
    const stageNames = [{name: 'A1', gold: 11, diamond: 22, total: 33}, {
        name: 'B2',
        gold: 22,
        diamond: 44,
        total: 66
    }, {name: 'C3', gold: 44, diamond: 88, total: 132}, {name: 'D4', gold: 88, diamond: 176, total: 264}, {
        name: 'E5',
        gold: 176,
        diamond: 352,
        total: 528
    }, {name: 'F6', gold: 352, diamond: 704, total: 1056}, {
        name: 'G7',
        gold: 704,
        diamond: 1408,
        total: 2112
    }, {name: 'H8', gold: 1408, diamond: 2816, total: 4224}, {
        name: 'I9',
        gold: 2816,
        diamond: 5632,
        total: 8448
    }, {name: 'J10', gold: 5632, diamond: 11264, total: 16896}, {
        name: 'K11',
        gold: 11264,
        diamond: 22528,
        total: 33792
    }, {name: 'L12', gold: 22528, diamond: 45056, total: 67584}]

    let allowanceData: any;
    ({allowanceData} = getAllowanceValue(address ? address : zeroAddress));

    const {isLoading, write} = useContractWrite({
        address: getContractAddress(),
        abi: getContractABI(),
        functionName: 'upgrade',
        onSuccess(data) {
            console.log(data)
        },
        onError(data) {
            console.log(data.stack)
        }
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
            // setState({...state,textButton: "Register"})
        }
    })


    const upgrade = () => {

        if (parseInt(formatEther(allowanceData)) >= props.diff) {
            write({
                value: parseEther("0")
            })
        } else {
            approveWrite({
                args: [getContractAddress(), parseEther(props.diff.toString())]
            })
        }
    }

    function checkIsLoading() {
        return waitIsLoading || approveIsLoading || isLoading
    }

    return (
        <>
            <div className={"flex flex-col bg-gray-500/20 p-4 rounded-lg backdrop-blur"}>
                {/*<h2 className={"font-bold text-2xl "}>Your Active Plan</h2>*/}
                <div className={"flex flex-wrap gap-6 rounded-lg "}>
                    {/*<span className={'text-center self-center'}>Your Active Plan: {props.stageValue}</span>*/}
                    {/*&nbsp;*/}
                    <button className={'btn btn-primary hidden'} disabled={checkIsLoading()} onClick={upgrade}>Upgrade
                        Plan
                    </button>
                    {/*<span className={'text-center self-center'}>Pay {props.diff}$ For Next Plan</span>*/}

                    <div className={'grid w-full gap-2'}>
                        <div className={'bg-gray-600/80 p-3 rounded-lg flex justify-between items-center'}>
                            <span className={'font-bold md:text-center w-1/4'}>Name</span>
                            <span className={'font-bold text-center w-1/4'}>Gold</span>
                            <span className={'font-bold text-center w-1/4'}>Diamond</span>
                            <span className={'font-bold text-center w-1/4'}>Upgrade</span>
                        </div>
                        {
                            stageNames.map((item) => {
                                if (item.total === parseInt(props.stageValue)*2) {
                                    return <div
                                        className={'bg-gray-600/80 p-3 rounded-lg flex justify-between items-center'}
                                        key={item.name}>
                                        <span className={'text-xl font-bold md:text-center w-1/4'}>{item.name}</span>
                                        <span className={' font-bold text-center w-1/4'}>{item.gold}$</span>
                                        <span className={' font-bold text-center w-1/4'}>{item.diamond}$</span>
                                        <button className={'btn btn-sm font-bold md:text-center bg-green-600 hover:bg-green-700 rounded-full w-1/4'} disabled={checkIsLoading()} >
                                            {checkIsLoading()?<span className="loading loading-spinner"></span>:item.total+'$'}
                                        </button>

                                    </div>
                                } else if(item.total < parseInt(props.stageValue)*2){
                                    return <div
                                        className={'bg-gray-600/80 p-3 rounded-lg flex justify-between items-center'}
                                        key={item.name}>
                                        <span className={'text-xl font-bold md:text-center w-1/4'}>{item.name}</span>
                                        <span className={' font-bold text-center w-1/4'}>{item.gold}$</span>
                                        <span className={' font-bold text-center w-1/4'}>{item.diamond}$</span>
                                        <button disabled={true}
                                                className={'btn btn-sm font-bold text-gray-800/70 md:text-center bg-gray-400/30 rounded-full w-1/4'}>{item.total}$
                                        </button>

                                    </div>
                                }else {
                                    return <div
                                        className={'bg-gray-600/80 p-3 rounded-lg flex justify-between items-center'}
                                        key={item.name}>
                                        <span className={'text-xl font-bold md:text-center w-1/4'}>{item.name}</span>
                                        <span className={' font-bold text-center w-1/4'}>{item.gold}$</span>
                                        <span className={' font-bold text-center w-1/4'}>{item.diamond}$</span>
                                        <button disabled={true}
                                                className={'btn btn-sm font-bold md:text-center !bg-gray-800 rounded-full w-1/4'}>{item.total}$
                                        </button>

                                    </div>
                                }

                            })
                        }
                    </div>


                </div>

            </div>

        </>
    )

}
export default SearchProfileStage;