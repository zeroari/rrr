import {getContractDetails} from "../modules/GetContractDetails.ts";

const ContractDetails = ()=>{
    const getContractDetail:any = getContractDetails();
    const stageNames = [{name:'A1',gold:11,diamond:22,total:33},{name:'B2',gold:22,diamond:44,total: 66},{name:'C3',gold:44,diamond: 88,total: 132},{name:'D4',gold:88,diamond: 176,total: 264},{name:'E5',gold:176,diamond: 352,total: 528},{name:'F6',gold:352,diamond: 704,total: 1056},{name:'G7',gold:704,diamond: 1408,total: 2112},{name:'H8',gold:1408,diamond: 2816,total: 4224},{name:'I9',gold:2816,diamond: 5632,total: 8448},{name:'J10',gold:5632,diamond: 11264,total: 16896},{name:'K11',gold:11264,diamond: 22528,total: 33792},{name:'L12',gold:22528,diamond: 45056,total: 67584}]

    return(
        <>
            <div className={"grid md:grid-cols-2 gap-4 mx-auto "}>
                <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg "}>
                    <span>Stage Entrance </span>
                    <div className={"flex flex-wrap gap-2 items-center justify-center font-bold text-2xl mt-2"}>{
                        getContractDetail?.[5].map((item:String,index:number)=>{
                            return(
                                <div key={"B"+index} className={"w-20 h-20 bg-gray-800 flex flex-col items-center justify-center rounded-lg"}>
                                    <span className={"font-light"}>{stageNames[index].total}$</span>
                                    <span>{item}</span>
                                </div>
                            )
                        })
                    }</div>
                </div>
                <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg "}>
                    <span>Diamond Stage Pay</span>
                    <div className={"flex flex-wrap gap-2 items-center justify-center font-bold text-2xl mt-2"}>{
                        getContractDetail?.[6].map((item:String,index:number)=>{
                            return(
                                <div key={"C"+index} className={"w-20 h-20 bg-gray-800 flex flex-col items-center justify-center rounded-lg"}>
                                    <span className={"font-light"}>{stageNames[index].total}$</span>
                                    <span>{item}</span>
                                </div>
                            )
                        })
                    }</div>
                </div>
                <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg "}>
                    <span>Golden Stage Pay </span>
                    <div className={"flex flex-wrap gap-2 items-center justify-center font-bold text-2xl mt-2"}>{
                        getContractDetail?.[7].map((item:String,index:number)=>{
                            return(
                                <div key={"D"+index} className={"w-20 h-20 bg-gray-800 flex flex-col items-center justify-center rounded-lg"}>
                                    <span className={"font-light"}>{stageNames[index].total}$</span>
                                    <span>{item}</span>
                                </div>
                            )
                        })
                    }</div>
                </div>
                <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg "}>
                    <span>Diamond Stage Flash </span>
                    <div className={"flex flex-wrap gap-2 items-center justify-center font-bold text-2xl mt-2"}>{
                        getContractDetail?.[8].map((item:String,index:number)=>{
                            return(
                                <div key={"E"+index} className={"w-20 h-20 bg-gray-800 flex flex-col items-center justify-center rounded-lg"}>
                                    <span className={"font-light"}>{stageNames[index].total}$</span>
                                    <span>{item}</span>
                                </div>
                            )
                        })
                    }</div>
                </div>

                <div className={"flex flex-col text-center bg-base-200 p-2 rounded-lg "}>
                    <span>Golden Stage Flash </span>
                    <div className={"flex flex-wrap gap-2 items-center justify-center font-bold text-2xl mt-2"}>{
                        getContractDetail?.[9].map((item:String,index:number)=>{
                            return(
                                <div key={"F"+index} className={"w-20 h-20 bg-gray-800 flex flex-col items-center justify-center rounded-lg"}>
                                    <span className={"font-light"}>{stageNames[index].total}$</span>
                                    <span>{item}</span>
                                </div>
                            )
                        })
                    }</div>
                </div>
            </div>
        </>
    )
}
export default ContractDetails;