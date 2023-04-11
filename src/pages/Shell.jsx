import BSHeader from '../components/BSHeader';
import BSFooter from '../components/BSFooter';
import { Outlet } from "react-router-dom";

function Shell(){
  return (
    <>
      <BSHeader />
      <Outlet />
      <BSFooter />
    </>
  )
}

export default Shell;