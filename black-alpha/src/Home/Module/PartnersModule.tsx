import Marquee from "react-fast-marquee";
import daiCoin from '../../../public/dai-coin.png'
import metamask from '../../../public/metamask.webp'
import ploygon from '../../../public/polygon-scan.webp'
import trust from '../../../public/trust-wallet.png'
import tokenPocket from '../../../public/token-pocket.png'
import {Link} from "react-router-dom";

export default function PartnersModule() {
    return (
        <div>
            <div className={'md;text-center mx-2 pb-4'}>
                <span className={'text-3xl font-bold'}>Foreign Partners</span>

            </div>
            <div
                className={'bg-base-200 text-center w-full border-b-2 border-amber-50/50 pb-4 border-t-2 border-y-secondary '}>

                <br/>
                <Marquee className=" w-full flex  border-gray-700 z-[4] py-2 ">
                    <Link to={'https://www.dai.com/'}>
                        <img src={daiCoin} className={'mx-24'} width={'140px'} alt=""/>
                        <span className={'text-lg font-bold text-blue-600'}>Dai</span>
                    </Link>
                    <Link to={'https://www.tokenpocket.pro/'}>
                        <img src={tokenPocket} className={'mx-20'} width={'140px'} alt=""/>
                        <span className={'text-lg font-bold text-blue-600'}>Token Pocket</span>

                    </Link>
                    <Link to={'https://polygonscan.com/'}>
                        <img src={ploygon} className={'mx-24'} width={'140px'} alt=""/>
                        <span className={'text-lg font-bold text-blue-600'}>Polygon</span>

                    </Link>
                    <Link to={'https://metamask.io/'}>
                        <img src={metamask} className={'mx-24'} width={'140px'} alt=""/>

                        <span className={'text-lg font-bold text-blue-600'}>Metamask</span>

                    </Link>
                    <Link to={'https://trustwallet.com/'}>
                        <img src={trust} className={'mx-20'} width={'140px'} alt=""/>
                        <span className={'text-lg font-bold text-blue-600'}>Trust Wallet</span>

                    </Link>
                    {/*<img src={imgItem} className={'mx-24'} width={'140px'} alt=""/>*/}


                </Marquee>
            </div>
        </div>


    )
}