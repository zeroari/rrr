import '../src/style/tree.scss'
import {redirect, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useGetUserTree} from "./modules/GetContractDetails.ts";

const Chart = () => {
    const [state,setState] = useState(['']);
    const [searchParams] = useSearchParams();
    const getUserTree = useGetUserTree(searchParams.get('username'))
    // const idRef = useRef('');

    useEffect(()=>{

        // @ts-ignore
        const arr:string[] = [searchParams.get('username'),...getUserTree]
        setState(arr)
    },[getUserTree,searchParams.get('username')])

    const BinaryTree = ({elements}:any) => {

        let buildTree: any;
        buildTree = (arr: any, index: number) => {
            if (index >= arr.length) {
                return null;
            }

            return {
                value: arr[index],
                left: buildTree(arr, 2 * index + 1),
                right: buildTree(arr, 2 * index + 2),
            };
        };

        const tree = buildTree(elements, 0);

        const renderTree = (node:any) => (
            <>

                {node && (
                    <>
                        {/*<section className="children flex justify-center w-full">*/}
                        <div className={'node  rounded-full w-[120px] h-[100px] px-7 cursor-pointer'} onClick={()=>window.location.replace('/dashboard/chart?username='+node?.value)}>
                            {node?.value?<img src="../logo-icon.svg" alt="" className={'mb-1'} width={"60px"}/>:<img src="../logo-icon-gray.png" alt="" className={'mb-1'} width={"60px"}/>}

                            {node?.value?<span className={'bg-blue-600/40 rounded-full py-1 px-3 mt-2'}>{node?.value}</span>:<span>unknown</span>}
                        </div>
                        {
                            (node.left || node.right) &&
                            <ul>
                                <li className={"flex border-white rounded-4xl relative backdrop-blur overflow-hidden "}>{renderTree(node?.left)}</li>
                                <li className={"flex border-white rounded-4xl relative backdrop-blur overflow-hidden "}>{renderTree(node?.right)}</li>
                            </ul>
                        }
                    </>
                )}
            </>
        );

        return (
            <>
                {renderTree(tree)}
            </>
        );
    };

// Example usage:

    const searchUser = (event:any)=>{
        // event.preventDefault()
        redirect('/dashboard/chart?username='+event.target.username.value)

    }

    return (
        <>
            <nav className={'max-w-screen-xl mx-auto bg-blue-600 h-16 rounded-lg mt-2 flex flex-row justify-center items-center p-4'}>
                <form onSubmit={searchUser} className={'join'} >
                    {/*<span className={'max-sm:text-md self-center font-bold text-xl mx-4'}>Search User</span>*/}
                    <input className={'input input-bordered input-primary w-full max-w-xs join-item'} name={'username'} type="text" />
                    <button className={'btn join-item rounded-r-full'}>Search</button>
                </form>
            </nav>
            {
                searchParams.get('username') ?
                    <div className={"h-screen w-screen flex flex-col items-center overflow-scroll"}>
                        <br/>
                        <div className={'tree'}>
                            <ul>
                                <li className={"flex rounded-4xl relative backdrop-blur overflow-hidden "}><BinaryTree elements={state}/></li>
                            </ul>
                        </div>
                    </div>
                    :
                    <>
                        Not Found
                    </>
            }
        </>



    );
};


export default Chart;