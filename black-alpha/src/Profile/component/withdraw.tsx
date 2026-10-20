// @ts-nocheck
import CachedIcon from '@mui/icons-material/Cached';
import {useRef, useState} from "react";

const Withdraw = (prop) => {
    const [state, setState] = useState({
        selectedToken: 'matic'
    });
    const valueRef = useRef('');

    const changeToken = () => {
        if (state.selectedToken === 'matic')
            setState({...state, selectedToken: 'dai'})
        else
            setState({...state, selectedToken: 'matic'})
    }

    const maxSelect = ()=>{
        valueRef.current.value = parseInt(prop.withdrawValue);
    }

    return (
        <>
            <div className={'w-[400px] px-4 pb-4 bg-base-100 rounded-b-lg gap-4 flex flex-col'}>
                <div className={'w-full text-end'}>

                </div>
                <div className={'flex flex-col'}>
                    <div className={'flex flex-row items-center'}>
                        {state.selectedToken === 'matic' ? <img alt={'matic'} className={'w-6'} src={'./matic-logo.png'}/> :
                            <img alt={'dai'} className={'w-6'} src={'./dai-logo.png'}/>} &nbsp;
                        <span className={'text-xl font-bold '}>{state.selectedToken}</span>
                        &nbsp;
                        <button onClick={changeToken}><CachedIcon/></button>
                        <img src="./" alt=""/>
                        <div className={'flex w-full justify-end'}>
                            <span className={'w-fit self-end'}>Balance: {prop.withdrawValue} <button className={'font-bold text-blue-700'} onClick={maxSelect}>Max</button></span>

                        </div>

                    </div>

                    <div className="join w-full">
                        <input className={' input input-bordered join-item'} ref={valueRef} type="text"/>
                        <span className="btn join-item ">$</span>
                    </div>

                </div>

                <div className={'flex flex-col'}>

                    <span className={' font-bold'}>To(Address):</span>
                    <input className={' textarea h-10 bg-base-200'} type="text"/>

                </div>

                <div className={'w-full'}>

                </div>
                <button className={'btn border-0 bg-blue-600 text-white/80 rounded-full'}>Withdraw</button>

                {/*<button className={'btn btn-primary'}>Close</button>*/}
            </div>
        </>
    )
}
export default Withdraw;