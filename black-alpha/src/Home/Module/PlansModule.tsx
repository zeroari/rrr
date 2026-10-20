import diamond from "../../assets/diamond.png"
import gold from "../../assets/GOLD.png"
import silver from "../../assets/SILVER.png"
import bronze from "../../assets/BORONSE.png"

export default function PlansModule() {
    return (
        <section className={" px-8 md:px-20 bg-base-100 backdrop-blur py-8 mx-2 rounded-2xl"}>
            <h2 className={"mb-8  text-4xl font-bold  shadow"}> Plans</h2>

            <div className={"grid lg:grid-cols-2 gap-12 container mx-auto"}>
                <div
                    className={"rounded-3xl py-10 px-8 flex flex-col bg-neutral  p-4 gap-y-4  shadow-gray-800 shadow-md border-secondary border-2"}>
                    <img src={diamond} alt="gem" className={"w-32 h-32"}/>
                    <h3 className={"text-2xl font-bold"}>DIAMOND PLAN</h3>
                    <div className={"border-b border-secondary w-1/2"}></div>
                    <span className={"text-2xl font-bold"}>10,001$ to 100,000$</span>
                    <span>The amount of stake in this section is 1,000,100 to 10,00,000  and currently the monthly profit limit of this section is defined as 6.5 % per month. People active in this plan will also be eligible to receive a big reward.The daily income limit of each person will be equal to the person's own stake.</span>
                    <button className={"btn btn-outline btn-accent w-fit mt-4"}>Select Plan</button>

                </div>
                <div
                    className={"rounded-3xl py-10 px-8 flex flex-col bg-neutral  p-4 gap-y-4 shadow-gray-800 shadow-md border-secondary border-2"}>
                    <img src={gold} alt="gem" className={"w-32 h-32"}/>
                    <h3 className={"text-3xl font-bold "}>GOLD PLAN</h3>
                    <div className={"border-b border-secondary w-1/2"}></div>
                    <span className={"text-2xl font-bold"}>2,001$ to 10,000$</span>
                    <span>The amount of stake in this section is 200,100 to 1,000,000  and currently the monthly profit limit of this section is defined as 5 % per month. People active in this plan will also be eligible to receive a small reward.The daily income limit of each person will be equal to the person's own stake.</span>
                    <button className={"btn btn-outline btn-accent w-fit mt-4"}>Select Plan</button>

                </div>
                <div
                    className={"rounded-3xl py-10 px-8 flex flex-col bg-neutral p-4 gap-y-4  shadow-gray-800 shadow-md border-secondary border-2"}>
                    <img src={silver} alt="gem" className={"w-32 h-32"}/>
                    <h3 className={"text-3xl font-bold"}>SILVER PLAN</h3>
                    <div className={"border-b border-secondary w-1/2"}></div>
                    <span className={"text-2xl font-bold"}>501$ to 2,000$</span>
                    <span>The amount of stake in this section is 50,100 to 200,000  and currently the monthly profit limit of this section is defined as 4 % per month.The daily income limit of each person will be equal to the person's own stake.</span>
                    <button className={"btn btn-outline btn-accent w-fit mt-4"}>Select Plan</button>
                </div>

                <div
                    className={"rounded-3xl py-10 px-8 flex flex-col bg-neutral p-4 gap-y-4 shadow-gray-800 shadow-md border-secondary border-2"}>
                    <img src={bronze} alt="gem" className={"w-32 h-32"}/>
                    <h3 className={"text-3xl font-bold"}>BRONZE PLAN</h3>
                    <div className={"border-b border-secondary w-1/2"}></div>
                    <span className={"text-2xl font-bold"}>100$ to 500$</span>
                    <span>The amount of stake in this section is 10,000 to 50,000  and currently the monthly profit limit of this section is defined as 3 % per month.The daily income limit of each person will be equal to the person's own stake.</span>
                    <button className={"btn btn-outline btn-accent w-fit mt-4"}>Select Plan</button>
                </div>
            </div>

        </section>
    )
}