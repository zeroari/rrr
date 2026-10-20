import './App.css'
import {Route, Routes} from "react-router-dom";
import WalletConnectModule from "./modules/WalletConnectModule.tsx";
import AppLayout from "./AppLayout.tsx";
import Home from "./Home/Home.tsx";
import DashboardLayout from "./Dashboard/component/DashboardLayout.tsx";
import HomeLayout from "./Home/HomeLayout.tsx";
import Register from "./Register/Register.tsx";
import Profile from "./Profile/Profile.tsx";
import Chart from "./chart.tsx";
// import User from "./User/User.tsx";
import Dashboard from "./Dashboard/Dashboard.tsx";
import ContractDetails from "./Dashboard/ContractDetails.tsx";
import ProfileLayout from "./Profile/component/ProfileLayout.tsx";
import ProfileChart from "./Profile/ProfileChart";

function App() {

  return (
      <Routes>
          <Route element={<WalletConnectModule><AppLayout/></WalletConnectModule>}>
              <Route  element={<HomeLayout/>}>
                  <Route index element={<Home/>}/>
              </Route>

              <Route  element={<WalletConnectModule><DashboardLayout/></WalletConnectModule>}>
                  <Route path={'/dashboard'} element={<Dashboard/>}/>
                  <Route path={'/x'} element={<ContractDetails/>}/>
                  {/*<Route path={'/profile'} element={<Profile/>}/>*/}
                  {/*<Route path={'/profile/chart'} element={<ProfileChart/>}/>*/}
                  <Route path={'/register'} element={<Register/>}/>
                  <Route path={'/dashboard/chart'} element={<Chart/>}/>
              </Route>

              <Route element={<WalletConnectModule><ProfileLayout/></WalletConnectModule>}>
                  <Route path={'/profile'} element={<Profile/>}/>
                  <Route path={'/profile/chart'} element={<ProfileChart/>}/>
              </Route>


          </Route>


      </Routes>
  )
}

export default App
