import "./style/home.css"
import {Link} from "react-router-dom";
import Footer from "./Module/FooterModule.tsx";
import PlansModule from "./Module/PlansModule.tsx";
import HowToStartModule from "./Module/HowToStartModule.tsx";
import DocumentationModule from "./Module/DocumentationModule.tsx";
import FAQModule from "./Module/FAQModule.tsx";
import {useAccount} from "wagmi";
import Lottie from "lottie-react";
import homeAnimation from "../../public/earth-lottie.json";
import ContractDataLine from "./ContractDataLine.tsx";
import LoginButton from "./component/LoginButton.tsx";
import SearchUserModule from "./Module/SearchUserModule.tsx";
import RoadmapModule from "./Module/RoadmapModule.tsx";
import PartnersModule from "./Module/PartnersModule.tsx";


export default function Home() {

    const {isConnected} = useAccount();
    if (!isConnected) {
        sessionStorage.removeItem("token")
    }

    return (
        <>
            <main className="bg-base-300 z-[1]">
                <ContractDataLine/>
                <section className=" relative text-opacity-60 text-white sm:px-4 poster ">
                    <div className={"grid lg:grid-cols-2 px-4 xl:py-32 pb-16 container mx-auto"}>
                        <div className={" pt-32 xl:px-24 xl:py-28 px-4 flex justify-center  "}>
                            <Lottie animationData={homeAnimation} loop={true}/>
                            {/*<img className={"shadow"}  src="../../block-component.svg" alt=""/>*/}
                        </div>
                        <div className={" sm:ml-4 lg:px-8 flex items-center p-4 md:p-10 "}>
                            <div className={'max-w-[300px]'}>
                                <span className={'text-white font-bold text-lg '}>
                                    Vigor is currently one of the top networking platforms
You will see  how it is equitable profitability
                                </span>
                                {/*<h1 className="font-bold leading-tight max-sm:tracking-[1px] md:tracking-[7px] mb-2 text-xl lg:text-3xl text-white md:leading-tight md:text-4xl lg:leading-tight 2xl:text-5xl 2xl:leading-tight ">*/}
                                {/*    Black Alpha Protocol*/}
                                {/*</h1>*/}
                                <p className="font-light mb-12 text-xl">
                                    Secure & Effortless
                                </p>
                                <div className="flex flex-wrap gap-4 items-center">

                                    <Link
                                        to="/register"
                                        className="btn btn-success px-10"
                                    >
                                        Register
                                    </Link>
                                    <LoginButton/>

                                </div>
                            </div>

                        </div>

                    </div>

                </section>

                <PlansModule/>
                <HowToStartModule/>
                <SearchUserModule/>

                <RoadmapModule/>
                <PartnersModule/>
                <DocumentationModule/>

                <FAQModule/>
            </main>
            <Footer/>
        </>
    );
}
