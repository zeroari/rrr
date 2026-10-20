import {useNavigate} from "react-router-dom";

const SearchUserModule = ()=>{
    const navigate = useNavigate();
    const searchForm = (e: any) => {
        e.preventDefault();
        // console.log(s)
        navigate('/dashboard?username='+e.target.userName.value)
    }

    return(
        <div className={'bg-base-100 w-full flex flex-col items-center  border-b-2 border-secondary '}>
            <div className={' bg-base-100 px-8 md:px-20 py-2 rounded-lg flex flex-col items-center'}>
                <span className={'font-bold text-2xl my-2 mb-2'}>User Search</span>
                <form className={"join bg-base-300 p-4 rounded-full"} onSubmit={searchForm} >
                    <input className="input input-bordered join-item" type="text" id={"userName"} placeholder="Username"/>
                    <button className="btn btn-primary join-item rounded-r-full" type={"submit"}>Search</button>
                </form>
                <span className={'max-sm:max-w-[300px] text-center'}>
                    For informing of the all account details search desired  username
                </span>
            </div>

        </div>
    )
}
export default SearchUserModule;